import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/KimFrente.png'
import imgEsquerda from '../../pioes/KimEsquerda.png'
import imgDireita from '../../pioes/KimDireita.png'
import flag from '../../bandeira/northKorean.png';

function KimJongUnPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">
          XEQUE-MATE
        </a>
        <nav className="nav-links">
          <a className="back-link" href="./">Voltar</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Descricao</a>
          <a href="#links">Mais</a>
        </nav>
      </header>

      <main className="person-page">
        <section
          className="person-hero person-hero-flag"
          id="top"
          style={{ '--person-flag-image': `url(${flag})` }}
        >
          <p className="eyebrow">Democratic People's Republic of Korea</p>
          <h1>Kim Jong Un</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Kim Jong Un">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca Kim Jong Un" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca Kim Jong Un" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Kim Jong Un" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca Kim Jong Un" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Kim Jong Un é o líder da Coreia do Norte desde 2011, governa um dos regimes mais fechados do mundo, se não o mais. O país possui armamento nuclear e em 2024 assinou um tratado de defesa com a Rússia, tendo chegado a enviar tropas para combater na guerra da Ucrânia.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.rtp.pt/noticias/mundo/kim-jong-il-o-lider-da-unica-dinastia-comunista-da-historia_n510861" target="_blank" rel="noreferrer">
                Nota biográfica RTP
              </a>
              <a href="https://korea-dpr.com/kimjongun/" target="_blank" rel="noreferrer">
                Biografia no site oficial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default KimJongUnPage;
