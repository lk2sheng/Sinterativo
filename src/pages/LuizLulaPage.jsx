import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/LulaFrente.png'
import imgEsquerda from '../../pioes/LulaEsquerda.png'
import imgDireita from '../../pioes/LulaDireita.png'
import flag from '../../bandeira/brazil.png';

function LuizLulaPage() {
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
          <p className="eyebrow">Federative Republic of Brazil</p>
          <h1>Luiz Inácio Lula da Silva</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Luiz Inácio Lula da Silva">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peça Luiz Inácio Lula da Silva" />
            <figcaption>Fig1 : frente da peça</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peça Luiz Inácio Lula da Silva" />
            <figcaption>Fig2 : lado esquerdo da peça</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peça Luiz Inácio Lula da Silva" />
            <figcaption>Fig3 : traseira da peça</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peça Luiz Inácio Lula da Silva" />
            <figcaption>Fig4 : lado direito da peça</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              Luiz Inácio Lula da Silva é presidente do Brasil e já vai no seu terceiro mandato, tendo voltado ao poder em 2023. Governa com ideais de esquerda, num país muito dividido politicamente desde a era Bolsonaro.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.parlamento.pt/Documents/LuladaSilva.pdf" target="_blank" rel="noreferrer">
                Nota biográfica Parlamento
              </a>
              <a href="https://www.ebiografia.com/luiz_inacio_lula_silva/" target="_blank" rel="noreferrer">
                Biografia na eBiografia
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LuizLulaPage;
