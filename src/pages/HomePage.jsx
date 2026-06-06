import { useEffect, useMemo } from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import IntroSequence from '../components/IntroSequence.jsx';
import Section from '../components/Section.jsx';
import { frameNumber } from '../utils/frames.js';
import argentinaFlag from '../../bandeira/argentina.png';
import brazilFlag from '../../bandeira/brazil.png';
import canadaFlag from '../../bandeira/canada.png';
import chinaFlag from '../../bandeira/china.png';
import europianFlag from '../../bandeira/europian.png';
import franceFlag from '../../bandeira/france.png';
import germanyFlag from '../../bandeira/germany.png';
import hungaryFlag from '../../bandeira/hungary.png';
import indiaFlag from '../../bandeira/indian.png';
import iranFlag from '../../bandeira/iran.png';
import israelFlag from '../../bandeira/israel.png';
import italyFlag from '../../bandeira/italy.png';
import japanFlag from '../../bandeira/japan.png';
import natoFlag from '../../bandeira/nato.jpg';
import northKoreanFlag from '../../bandeira/northKorean.png';
import portugalFlag from '../../bandeira/portugal.png';
import russiaFlag from '../../bandeira/russia.png';
import spainFlag from '../../bandeira/spain.png';
import ukraineFlag from '../../bandeira/ukrain.png';
import unitedNationsFlag from '../../bandeira/unitedNation.png';
import usaFlag from '../../bandeira/usa.png';

import trumpPhoto from '../../personagem6/trumpPhoto.png';
import XiPhoto from '../../personagem6/XiPhoto.png';
import putinPhoto from '../../personagem6/putinPhoto.jpg';
import VolodymyrPhoto from '../../personagem6/VolodymyrPhoto.png';
import BenjaminPhoto from '../../personagem6/BenjaminPhoto.jpg';
import AntonioPhoto from '../../personagem6/AntonioPhoto.jpg';

const imageModules = import.meta.glob('../../consequence/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const sequenceImages = Object.entries(imageModules)
  .sort(([a], [b]) => frameNumber(a) - frameNumber(b))
  .map(([path, src], index) => ({
    id: `frame-${String(index).padStart(2, '0')}`,
    src,
    label: `Frame ${String(index).padStart(2, '0')}`,
    file: path.split('/').pop(),
  }));

const politicalNames = [
  { name: 'André Ventura', flag: portugalFlag },
  { name: 'António Costa', flag: europianFlag },
  { name: 'António Guterres', flag: unitedNationsFlag },
  { name: 'António Seguro', flag: portugalFlag },
  { name: 'Benjamin Netanyahu', flag: israelFlag },
  { name: 'Donald Trump', flag: usaFlag },
  { name: 'Emmanuel Macron', flag: franceFlag },
  { name: 'Friedrich Merz', flag: germanyFlag },
  { name: 'Giorgia Meloni', flag: italyFlag },
  { name: 'Javier Milei', flag: argentinaFlag },
  { name: 'Kim Jong Un', flag: northKoreanFlag },
  { name: 'Luís Montenegro', flag: portugalFlag },
  { name: 'Luiz Inácio Lula da Silva', flag: brazilFlag },
  { name: 'Mark Carney', flag: canadaFlag },
  { name: 'Mark Rutte', flag: natoFlag },
  { name: 'Mojtaba Khamenei', flag: iranFlag },
  { name: 'NATO/OTAN', flag: natoFlag },
  { name: 'ONU', flag: unitedNationsFlag },
  { name: 'Pedro Passos Coelho', flag: portugalFlag },
  { name: 'Pedro Sánchez', flag: spainFlag },
  { name: 'Péter Magyar', flag: hungaryFlag },
  { name: 'Sanae Takaichi', flag: japanFlag },
  { name: 'União Europeia', flag: europianFlag },
  { name: 'Ursula von der Leyen', flag: europianFlag },
  { name: 'Vladimir Putin', flag: russiaFlag },
  { name: 'Volodymyr Zelensky', flag: ukraineFlag },
  { name: 'Xi Jinping', flag: chinaFlag },
];

const createSlug = (name) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const speakerQuotes = [
  {
    name: 'Donald Trump',
    photo: trumpPhoto,
    quote: 'Frase que a pessoa pode dizer ...',
  },
  {
    name: 'Xi Jinping',
    photo: XiPhoto,
    quote: 'Frase que a pessoa pode dizer ...',
  },
  {
    name: 'Vladimir Putin',
    photo: putinPhoto,
    quote: 'Frase que a pessoa pode dizer ...',
  },
  {
    name: 'Volodymyr Zelensky',
    photo: VolodymyrPhoto,
    quote: 'Frase que a pessoa pode dizer ...',
  },
  {
    name: 'Benjamin Netanyahu',
    photo: BenjaminPhoto,
    quote: 'Frase que a pessoa pode dizer ...',
  },
  {
    name: 'NATO / António Guterres',
    photo: AntonioPhoto,
    quote: 'Frase que a pessoa pode dizer ...',
  },
];

const teamMembers = [
  {
    name: 'Afonso Paulo',
    number: 'FC62238',
    school: 'Faculdade de Ciencias',
  },
  {
    name: 'Kaisheng Li',
    number: 'FC60284',
    school: 'Faculdade de Ciencias',
  },
  {
    name: 'Francisca Silva',
    number: 'nº15411',
    school: 'Faculdade de Belas Artes',
  },
  {
    name: 'Madalena Pereira',
    number: 'nº15589',
    school: 'Faculdade de Belas Artes',
  },
  {
    name: 'Marte Costa',
    number: 'nº15584',
    school: 'Faculdade de Belas Artes',
  },
];

function HomePage() {
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
          {/* <section className="opening-text" aria-label="Introducao ao projeto">
            <p className="eyebrow">Depois do movimento</p>
            <h2>Conteudo paraa colocar</h2>
            <div className="opening-columns">
              <p>Conteudo para colocar se quiser uma explicacao.</p>
              <p>
                O <strong>XEQUE-MATE</strong>, Conteudo para colocar.
              </p>
            </div>
          </section> */}

          <Section
            id="peoes"
            title="Personagens dos peoes"
            aside={
              <dl className="fact-list">
                {politicalNames.map(({ name, flag }) => (
                  <div key={name}>
                    <dt>
                      <img src={flag} alt={`Bandeira associada a ${name}`} />
                    </dt>
                    <dd>
                      <a className="fact-link" href={`/${createSlug(name)}`}>
                        {name}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            }
          >
          </Section>

          {/* <Section
            id="frases"
            title="Frases dos peoes"
          >
            <div className="speaker-grid">
              {speakerQuotes.map((speaker, index) => (
                <article
                  key={speaker.name}
                  className={`speaker-item ${index % 2 === 1 ? 'reverse' : ''}`}
                >
                  <div className="speaker-avatar">
                    <img src={speaker.photo} alt={`Foto de ${speaker.name}`} />
                    <span>{speaker.name}</span>
                  </div>
                  <div className="speaker-copy">
                    <p>{speaker.quote}</p>
                  </div>
                </article>
              ))}
            </div>
          </Section> */}

          <Section
            id="manual"
            title="Como Jogar"
          >
            <div className="manual-instructions">
              <ol>
                <li>
                  <span>Escolhe</span>
                  <p>
                    Seleciona as pecas que consideras mais relevantes para a tua
                    visao politica.
                  </p>
                </li>

                <li>
                  <span>Posiciona</span>
                  <p>
                    Organiza-as no tabuleiro por importancia: mais importantes
                    na frente, menos importantes atras.
                  </p>
                </li>

                <li>
                  <span>Regista</span>
                  <p>
                    Fotografa a tua versao e coloca-a no quadro para partilhar a
                    tua opiniao, mesmo anonimamente.
                  </p>
                </li>
              </ol>
            </div>
          </Section>

          <Section
            id="interacao"
            title="Regista a tua experiência"
          >
            <div className="interaction-grid">
              <div className="interaction-photo">
                <img
                  src="../../picture/fototabExperiencia.png"
                  alt="Fotografias dos participantes"
                />
              </div>

              <div className="interaction-content">
                <p>
                  Após colocares as peças no tabuleiro, regista a tua experiência
                  tirando uma fotografia com a Polaroid e cola-a no quadro da exposição.
                </p>

                <h3>Vídeo de demonstração</h3>

                <a
                  href="https://youtube.com/..."
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Ver vídeo (ainda nao disponivel)
                </a>
              </div>
            </div>
          </Section>

          {/* <Section
            id="exposicao"
            title="data local etc da exposicao"
            aside={<p className="aside-note">SALA EXEMPLO</p>}
          >
            <p>
              explicar como o fizemos ou como pretendemos fazer a exposicao, o
              que queremos mostrar, etc
            </p>
          </Section> */}

          <section className="team-block reveal" aria-label="Sobre o grupo">
            <h2>Sobre o grupo</h2>
            <ol className="team-list">
              {teamMembers.map(({ name, number, school }) => (
                <li key={number}>
                  <span>{name}</span>
                  <small>{number}</small>
                  <em>{school}</em>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

