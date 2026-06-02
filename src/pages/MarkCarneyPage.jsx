import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
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
            <img src={placeholderFigureImage} alt="Figura frente da peca Mark Carney" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura lado esquerdo da peca Mark Carney" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Mark Carney" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura lado direito da peca Mark Carney" />
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
              <a href="" target="_blank" rel="noreferrer">link 1</a>
              <a href="" target="_blank" rel="noreferrer">link 2</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MarkCarneyPage;
