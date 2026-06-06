import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/NetanyahuFrente.png'
import imgEsquerda from '../../pioes/NetanyahuEsquerda.png'
import imgDireita from '../../pioes/NetanyahuDireita.png'
import flag from '../../bandeira/israel.png';

function BenjaminNetanyahuPage() {
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
          <p className="eyebrow">State of Israel</p>
          <h1>Benjamin Netanyahu</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Trump">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca Trump" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca Trump" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Trump" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca Trump" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
                Benjamin Netanyahu é primeiro-ministro de Israel desde 2022, pelo Likud, um partido de direita. Governou também de 1996 a 1999 e de 2009 a 2021, sendo o chefe de governo com mais tempo no cargo na história do país.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.bbc.com/portuguese/articles/cmlp0vzlxgjo" target="_blank" rel="noreferrer">
                Biografia na BBC
              </a>
              <a href="https://www.publico.pt/2025/03/10/opiniao/opiniao/gloria-queda-benjamin-netanyahu-2125294" target="_blank" rel="noreferrer">
                Biografia no Público
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BenjaminNetanyahuPage;
