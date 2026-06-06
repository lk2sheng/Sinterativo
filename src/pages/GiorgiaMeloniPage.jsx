import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/MeloniFrente.png'
import imgEsquerda from '../../pioes/MeloniEsquerda.png'
import imgDireita from '../../pioes/MeloniDireita.png'
import flag from '../../bandeira/italy.png';

function GiorgiaMeloniPage() {
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
          <p className="eyebrow">Italian Republic</p>
          <h1>Giorgia Meloni</h1>
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
                Giorgia Meloni é primeira-ministra de Itália desde outubro de 2022, sendo a primeira mulher a ocupar o cargo. Lidera os Irmãos de Itália, partido de direita radical, e tem como foco o apoio à família, redução de impostos e controlo da imigração.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.governo.it/en/governo/meloni/president-council-ministers/giorgia-meloni" target="_blank" rel="noreferrer">
                Nota biográfica da primeira-ministra de Itália
              </a>
              <a href="https://www.bbc.com/portuguese/articles/crgdkl42311o" target="_blank" rel="noreferrer">
                Biografia na BBC
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GiorgiaMeloniPage;
