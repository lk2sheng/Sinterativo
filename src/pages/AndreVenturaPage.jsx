import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/VenturaFrente.png'
import imgEsquerda from '../../pioes/VenturaEsquerda.png'
import imgDireita from '../../pioes/VenturaDireita.png'
import flag from '../../bandeira/portugal.png';

function AndreVenturaPage() {
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
          <h1>André Ventura</h1>
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
              André Ventura é o fundador e presidente do Chega desde 2019, um partido de extrema-direita. Nas eleições legislativas de 2025 tornou-se a segunda maior força política do parlamento. Foi candidato às presidenciais de 2025 onde ficou em segundo lugar.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://apegsaudeorg.wordpress.com/chega-andre-ventura/" target="_blank" rel="noreferrer">
                Nota biográfica do Chega sobre André Ventura
              </a>
              <a href="https://www.parlamento.pt/DeputadoGP/Paginas/Biografia.aspx?BID=6535" target="_blank" rel="noreferrer">
                Biografia no Parlamento
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AndreVenturaPage;
