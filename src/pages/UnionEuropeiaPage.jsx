import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/UEuropaFrente.png'
import imgEsquerda from '../../pioes/UEuropaEsquerda.png'
import imgDireita from '../../pioes/UEuropaDireita.png'
import flag from '../../bandeira/europian.png';

function UnionEuropeiaPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">XEQUE-MATE</a>
        <nav className="nav-links">
          <a className="back-link" href="./">Voltar</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Descrição</a>
          <a href="#links">Mais</a>
        </nav>
      </header>

      <main className="person-page">
        <section className="person-hero person-hero-flag" id="top" style={{ '--person-flag-image': `url(${flag})` }}>
          <p className="eyebrow">European Union</p>
          <h1>União Europeia</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça União Europeia">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peça União Europeia" /><figcaption>Fig1 : frente da peça</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peça União Europeia" /><figcaption>Fig2 : lado esquerdo da peça</figcaption></figure>
          {/* <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peça União Europeia" /><figcaption>Fig3 : traseira da peça</figcaption></figure> */}
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peça União Europeia" /><figcaption>Fig4 : lado direito da peça</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              A União Europeia é um bloco político e económico de 27 países europeus, fundado nos anos 50. Os seus membros partilham um mercado único e uma moeda comum, o euro.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://european-union.europa.eu/index_pt" target="_blank" rel="noreferrer">
                Site oficial da União Europeia
              </a>
              <a href="https://european-union.europa.eu/principles-countries-history/eu-countries_pt" target="_blank" rel="noreferrer">
                Descrição dos países membros no site oficial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UnionEuropeiaPage;
