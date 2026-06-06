import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/CostaFrente.png'
import imgEsquerda from '../../pioes/CostaEsquerda.png'
import imgDireita from '../../pioes/CostaDireita.png'
import flag from '../../bandeira/europian.png';

function AntonioCostaPage() {
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
          <p className="eyebrow">European Union</p>
          <h1>António Costa</h1>
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
              António Costa é Presidente do Conselho Europeu desde dezembro de 2024, cargo que ocupa até 2027. Foi primeiro-ministro de Portugal de 2015 a 2024, pelo Partido Socialista, um partido de centro-esquerda.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://portugal.gov.pt/gc21/primeiro-ministro" target="_blank" rel="noreferrer">
                Página oficial do Governo de Portugal
              </a>
              <a href="https://www.consilium.europa.eu/pt/european-council/president/biography/" target="_blank" rel="noreferrer">
                Biografia no Conselho Europeu
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AntonioCostaPage;
