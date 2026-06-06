import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/NatoFrente.png'
import imgEsquerda from '../../pioes/NatoEsquerda.png'
import imgDireita from '../../pioes/NatoDireita.png'
import flag from '../../bandeira/nato.jpg';

function NatoPage() {
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
          <p className="eyebrow">North Atlantic Treaty Organization(NATO)</p>
          <h1>NATO/OTAN</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca NATO/OTAN">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca NATO/OTAN" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca NATO/OTAN" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>
          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca NATO/OTAN" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}
          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca NATO/OTAN" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              A NATO é a principal aliança militar ocidental, fundada em 1949 com 32 países membros. Foi criada no pós-guerra e continua a ser o principal mecanismo de defesa coletiva do mundo ocidental.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.nato.int/" target="_blank" rel="noreferrer">
                Site oficial da NATO
              </a>
              <a href="https://eur-lex.europa.eu/PT/legal-content/glossary/nato-north-atlantic-treaty-organisation.html" target="_blank" rel="noreferrer">
                Descrição da NATO na União Europeia
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NatoPage;
