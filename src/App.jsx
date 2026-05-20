import { useEffect, useMemo, useRef } from 'react';

const imageModules = import.meta.glob('../consequence/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const pawnModules = import.meta.glob('../pioes/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
});

function frameNumber(path) {
  const match = path.match(/frame_(\d+)_/);
  return match ? Number(match[1]) : 0;
}

const sequenceImages = Object.entries(imageModules)
  .sort(([a], [b]) => frameNumber(a) - frameNumber(b))
  .map(([path, src], index) => ({
    id: `frame-${String(index).padStart(2, '0')}`,
    src,
    label: `Frame ${String(index).padStart(2, '0')}`,
    file: path.split('/').pop(),
  }));

const pawnExplanations = {
  ASEGURO: {
    title: 'Figura de poder latino-americano',
    sourceUrl: 'https://pt.wikipedia.org/wiki/Ant%C3%B3nio_Jos%C3%A9_Seguro',
    text:
      'Representa a permanencia politica, a disputa pela legitimidade e a forma como a imagem publica pode ser usada como peca de defesa, resistencia ou controlo.',
  },
  KIM: {
    title: 'Isolamento e autoridade absoluta',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kim_Jong_Un',
    text:
      'Evoca um poder fechado sobre si mesmo, onde a visibilidade e limitada, a distancia e estrategia, e cada movimento parece calculado para preservar autoridade.',
  },
  PUTIN: {
    title: 'Estrategia, territorio e tensao',
    sourceUrl: 'https://en.wikipedia.org/wiki/Vladimir_Putin',
    text:
      'Funciona como simbolo de confronto geopolitico: uma peca ligada a expansao, bloqueio, ameaca e leitura permanente do tabuleiro internacional.',
  },
  TRUMP: {
    title: 'Populismo, media e polarizacao',
    sourceUrl: 'https://en.wikipedia.org/wiki/Donald_Trump',
    text:
      'Introduz a ideia de poder performativo, em que discurso, imagem e reacao publica se tornam parte do proprio movimento politico.',
  },
};

const pawnOrder = ['TRUMP', 'PUTIN', 'KIM', 'ASEGURO'];

const pawns = pawnOrder.map((name) => {
  const frontEntry = Object.entries(pawnModules).find(([path]) =>
    path.endsWith(`${name}_front.png`),
  );
  const backEntry = Object.entries(pawnModules).find(([path]) =>
    path.endsWith(`${name}_back.png`),
  );

  return {
    id: name.toLowerCase(),
    name,
    front: frontEntry?.[1],
    back: backEntry?.[1],
    ...pawnExplanations[name],
  };
});

function Header() {
  return (
    <header className="site-header" aria-label="Navegação principal">
      <a className="brand" href="#top" aria-label="XEQUE-MATE">
        XEQUE-MATE
      </a>
      <nav className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#pioes">Peoes</a>
        <a href="#conceito">Conceito</a>
        <a href="#interacao">Interação</a>
        <a href="#exposicao">Exposição</a>
      </nav>
    </header>
  );
}

function IntroSequence({ images }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const captionFrameRef = useRef(null);
  const captionFileRef = useRef(null);
  const progressBarRef = useRef(null);
  const loadedImagesRef = useRef([]);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const animationRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement || images.length === 0) return undefined;

    let cancelled = false;
    loadedImagesRef.current = images.map((image) => {
      const frame = new Image();
      frame.src = image.src;
      frame.decoding = 'async';
      frame.onload = () => {
        renderedFrameRef.current = -1;
      };
      return frame;
    });

    const updateTargetProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      targetProgressRef.current = Math.min(1, Math.max(0, -rect.top / scrollable));
    };

    const animate = () => {
      if (cancelled) return;

      const target = targetProgressRef.current;
      const current = smoothProgressRef.current;
      const next = current + (target - current) * 0.12;
      const settled = Math.abs(target - next) < 0.0008;
      smoothProgressRef.current = settled ? target : next;

      const progress = smoothProgressRef.current;
      const frameIndex = Math.min(
        images.length - 1,
        Math.max(0, Math.round(progress * (images.length - 1))),
      );

      sectionRef.current?.style.setProperty('--scroll-progress', progress);
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      if (frameIndex !== renderedFrameRef.current) {
        imageElement.src = images[frameIndex]?.src ?? images[0].src;
        imageElement.alt = images[frameIndex]?.label ?? 'Frame';
        renderedFrameRef.current = frameIndex;

        if (captionFrameRef.current) {
          captionFrameRef.current.textContent = String(frameIndex + 1).padStart(2, '0');
        }
        if (captionFileRef.current) {
          captionFileRef.current.textContent = images[frameIndex]?.file ?? '';
        }
      }

      animationRef.current = window.requestAnimationFrame(animate);
    };

    imageElement.src = images[0].src;
    imageElement.alt = images[0].label;
    updateTargetProgress();
    animate();

    window.addEventListener('scroll', updateTargetProgress, { passive: true });

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', updateTargetProgress);
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
    };
  }, [images.length]);

  return (
    <section
      className="intro-sequence"
      id="top"
      ref={sectionRef}
      style={{ '--scroll-progress': 0 }}
    >
      <div className="intro-sticky">
        <div className="intro-blackout" aria-hidden="true" />
        <div className="intro-grain" aria-hidden="true" />

        <div className="intro-image" aria-label="Sequência visual controlada pelo scroll">
          <img ref={imageRef} src={images[0]?.src} alt={images[0]?.label ?? 'Frame'} />
        </div>

        <div className="intro-title">
          <p className="eyebrow">Sistema interativo</p>
          <h1>XEQUE-MATE</h1>
        </div>

        <div className="intro-caption" aria-hidden="true">
          <span ref={captionFrameRef}>01</span>
          <span ref={captionFileRef}>{images[0]?.file}</span>
          <span>{String(images.length).padStart(2, '0')}</span>
        </div>

        <div className="intro-progress" aria-hidden="true">
          <span ref={progressBarRef} />
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children, aside }) {
  return (
    <section className="section reveal" id={id}>
      <div className="section-index">{eyebrow}</div>
      <div className="section-body">
        <div className="section-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <div className="prose">{children}</div>
        </div>
        {aside ? <aside className="section-aside">{aside}</aside> : null}
      </div>
    </section>
  );
}

function PawnGallery({ items }) {
  return (
    <section className="pawn-gallery reveal" id="pioes">
      <div className="section-index">02 - Peoes</div>
      <div className="pawn-gallery-body">
        <div className="pawn-gallery-head">
          <p className="eyebrow">02 - Peoes politicos</p>
          <h2>As pecas tornam pessoas em posicoes.</h2>
          <p>
            Cada peao apresenta uma figura publica em dois lados: a frente como
            presenca imediata, o verso como objeto manipulavel no tabuleiro. A
            leitura nasce da relacao entre imagem, distancia e escolha.
          </p>
        </div>

        <div className="pawn-grid">
          {items.map((pawn) => (
            <article className="pawn-card" key={pawn.id}>
              <div className="pawn-images" aria-label={`${pawn.name} frente e verso`}>
                <figure>
                  <img src={pawn.front} alt={`${pawn.name} frente`} />
                  <figcaption>Frente</figcaption>
                </figure>
                <figure>
                  <img src={pawn.back} alt={`${pawn.name} verso`} />
                  <figcaption>Verso</figcaption>
                </figure>
              </div>
              <div className="pawn-copy">
                <p className="pawn-name">{pawn.name}</p>
                <h3>{pawn.title}</h3>
                <p>{pawn.text}</p>
                <a
                  className="source-link"
                  href={pawn.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir pagina sobre ${pawn.name}`}
                >
                  {pawn.sourceUrl}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>XEQUE-MATE</span>
      <span>Sistemas Interativos</span>
    </footer>
  );
}

function App() {
  const images = useMemo(() => sequenceImages, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <IntroSequence images={images} />

        <div className="content-start">
          <section className="opening-text" aria-label="Introdução ao projeto">
            <p className="eyebrow">Depois do movimento</p>
            <h2>Conteudo para colocar</h2>
            <div className="opening-columns">
              <p>
                Conteudo para colocar se quiser uma explicacao.
              </p>
              <p>
                O <strong>XEQUE-MATE</strong>, Conteudo para colocar.
              </p>
            </div>
          </section>

          <Section
            id="sobre"
            eyebrow="01 · Sobre o projeto"
            title="Explicacao para o projeto "
            aside={
              <dl className="fact-list">
                <div>
                  <dt>item</dt>
                  <dd>algunma coisa que percisam</dd>
                </div>
                <div>
                  <dt>item</dt>
                  <dd>algunma coisa que percisam</dd>
                </div>
                <div>
                  <dt>item</dt>
                  <dd>algunma coisa que percisam</dd>
                </div>
              </dl>
            }
          >
            <p>
              Explicacao dos peos e o que pode ser feito com eles
            </p>
          </Section>

          <PawnGallery items={pawns} />

          <Section
            id="conceito"
            eyebrow="03 · Conceito"
            title="A posição torna-se linguagem."
            aside={
              <div className="concept-grid" aria-hidden="true">
                {Array.from({ length: 16 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>
            }
          >
            <p>
              No xadrez, cada peça tem uma função fixa. Em{' '}
              <strong>XEQUE-MATE</strong>, essa estabilidade é posta em causa:
              poder, escolha e visibilidade passam a depender da distância entre
              corpos, da proximidade entre símbolos e da decisão de quem olha.
            </p>
            <p>
              O tabuleiro deixa de ser campo de vitória e derrota para se tornar
              meio de expressão. Colocar uma peça é tomar posição; afastá-la é
              produzir conflito, silêncio, aliança ou recusa.
            </p>
          </Section>

          <Section
            id="interacao"
            eyebrow="04 · Interação"
            title="Sem regras fixas, com consequências visíveis."
          >
            <p>
              Redras do tabuleiro ou etc
            </p>
          </Section>

          <Section
            id="exposicao"
            eyebrow="05 · Exposição"
            title="data local etc da exposicao"
            aside={
              <p className="aside-note">
                SALA EXEMPLO
              </p>
            }
          >
            <p>
              explicar como o fizemos ou como pretendemos fazer a exposição, o que queremos mostrar, etc
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
