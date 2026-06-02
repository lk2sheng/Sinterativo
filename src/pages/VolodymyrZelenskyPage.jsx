import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import flag from '../../bandeira/ukrain.png';

function VolodymyrZelenskyPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">XEQUE-MATE</a>
        <nav className="nav-links">
          <a className="back-link" href="./">Voltar</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Descricao</a>
          <a href="#links">Mais</a>
        </nav>
      </header>

      <main className="person-page">
        <section className="person-hero person-hero-flag" id="top" style={{ '--person-flag-image': `url(${flag})` }}>
          <p className="eyebrow">Ukraine</p>
          <h1>Volodymyr Zelensky</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Volodymyr Zelensky">
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura frente da peca Volodymyr Zelensky" /><figcaption>Fig1 : frente da peca</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura lado esquerdo da peca Volodymyr Zelensky" /><figcaption>Fig2 : lado esquerdo da peca</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peca Volodymyr Zelensky" /><figcaption>Fig3 : traseira da peca</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura lado direito da peca Volodymyr Zelensky" /><figcaption>Fig4 : lado direito da peca</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Volodymyr Zelensky é presidente da Ucrânia desde 2019, pelo Servidor do Povo, um partido de centro. Tornou-se o rosto da resistência ucraniana após a invasão russa de fevereiro de 2022.
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

export default VolodymyrZelenskyPage;
