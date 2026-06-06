import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/MontenegroFrente.png'
import imgEsquerda from '../../pioes/MontenegroEsquerda.png'
import imgDireita from '../../pioes/MontenegroDireita.png'
import flag from '../../bandeira/portugal.png';

function LuisMontenegroPage() {
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
          <h1>Luís Montenegro</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Luís Montenegro">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peça Luís Montenegro" />
            <figcaption>Fig1 : frente da peça</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peça Luís Montenegro" />
            <figcaption>Fig2 : lado esquerdo da peça</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peça Luís Montenegro" />
            <figcaption>Fig3 : traseira da peça</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peça Luís Montenegro" />
            <figcaption>Fig4 : lado direito da peça</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              Luís Montenegro é primeiro-ministro de Portugal desde abril de 2024, líder do PSD e da Aliança Democrática. Ganhou as eleições de maio de 2025 e está agora no seu segundo mandato seguido.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://portugal.gov.pt/gc24/primeiro-ministro" target="_blank" rel="noreferrer">
                Nota biográfica do primeiro-ministro
              </a>
              <a href="https://cnnportugal.iol.pt/liveevents/perfil/conferencia-38/luis-montenegro/6908f0f60cf2c7eb24444096" target="_blank" rel="noreferrer">
                Biografia na CNN Portugal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LuisMontenegroPage;
