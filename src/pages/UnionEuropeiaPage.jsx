import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import flag from '../../bandeira/europian.png';

function UnionEuropeiaPage() {
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
          <p className="eyebrow">European Union</p>
          <h1>Uniao Europeia</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Uniao Europeia">
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura frente da peca Uniao Europeia" /><figcaption>Fig1 : frente da peca</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura lado esquerdo da peca Uniao Europeia" /><figcaption>Fig2 : lado esquerdo da peca</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peca Uniao Europeia" /><figcaption>Fig3 : traseira da peca</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura lado direito da peca Uniao Europeia" /><figcaption>Fig4 : lado direito da peca</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              A União Europeia é um bloco político e económico de 27 países europeus, fundado nos anos 50. Os seus membros partilham um mercado único e uma moeda comum, o euro.
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

export default UnionEuropeiaPage;
