import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/SeguroFrente.png'
import imgEsquerda from '../../pioes/SeguroEsquerda.png'
import imgDireita from '../../pioes/SeguroDireita.png'
import flag from '../../bandeira/portugal.png';

function AntonioSeguroPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">
          XEQUE-MATE
        </a>
        <nav className="nav-links">
          <a className="back-link" href="./">Voltar</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Descrição</a>
          <a href="#links">Mais</a>
        </nav>
      </header>

      <main className="person-page">
        <section
          className="person-hero person-hero-flag"
          id="top"
          style={{ '--person-flag-image': `url(${flag})` }}
        >
          <p className="eyebrow">Portuguese Republic</p>
          <h1>António Seguro</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Trump">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peça Trump" />
            <figcaption>Fig1 : frente da peça</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peça Trump" />
            <figcaption>Fig2 : lado esquerdo da peça</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peça Trump" />
            <figcaption>Fig3 : traseira da peça</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peça Trump" />
            <figcaption>Fig4 : lado direito da peça</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
                António Seguro é Presidente da República Portuguesa desde 2026. Foi secretário-geral do Partido Socialista, um partido de centro-esquerda, de 2011 a 2014, tendo regressado à política em 2025 para se candidatar às presidenciais.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.presidencia.pt/presidente-da-republica/o-presidente/biografia/" target="_blank" rel="noreferrer">
                Nota biográfica do Presidente da República
              </a>
              <a href="https://sicnoticias.pt/especiais/eleicoes-presidenciais/2026/2026-02-08-video-quem-e-antonio-jose-seguro-o-novo-presidente-da-republica--357b8142" target="_blank" rel="noreferrer">
                Biografia na SIC Notícias
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AntonioSeguroPage;
