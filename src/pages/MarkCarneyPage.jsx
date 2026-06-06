import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/CarneyFrente.png'
import imgEsquerda from '../../pioes/CarneyEsquerda.png'
import imgDireita from '../../pioes/CarneyDireita.png'
import flag from '../../bandeira/canada.png';

function MarkCarneyPage() {
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
        <section className="person-hero person-hero-flag" id="top" style={{ '--person-flag-image': `url(${flag})` }}>
          <p className="eyebrow">Canada</p>
          <h1>Mark Carney</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Mark Carney">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca Mark Carney" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca Mark Carney" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>
          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Mark Carney" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}
          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca Mark Carney" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Mark Carney é primeiro-ministro do Canadá desde março de 2025, pelo Partido Liberal, um partido de centro-esquerda. Foi anteriormente governador do Banco do Canadá e do Banco de Inglaterra.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://expresso.pt/revista/fisga/2025-03-13-quem-e-mark-carney-o-economista-que-sucede-a-justin-trudeau-nos-comandos-do-canada-bf4d2b60" target="_blank" rel="noreferrer">
                Nota biográfica Expresso
              </a>
              <a href="https://sicnoticias.pt/mundo/2025-03-10-video-quem-e-mark-carney-o-novo-primeiro-ministro-do-canada-que-promete-fazer-frente-a-trump-f980ad2c" target="_blank" rel="noreferrer">
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

export default MarkCarneyPage;
