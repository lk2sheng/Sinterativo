import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/RutteFrente.png'
import imgEsquerda from '../../pioes/RutteEsquerda.png'
import imgDireita from '../../pioes/RutteDireita.png'
import flag from '../../bandeira/nato.jpg';

function MarkRuttePage() {
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
          <p className="eyebrow">NATO</p>
          <h1>Mark Rutte</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Mark Rutte">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca Mark Rutte" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca Mark Rutte" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>
          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Mark Rutte" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}
          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca Mark Rutte" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Mark Rutte é secretário-geral da NATO desde outubro de 2024. Foi primeiro-ministro dos Países Baixos de 2010 a 2024, pelo VVD, um partido liberal de direita.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://sicnoticias.pt/mundo/2024-06-26-quem-e-mark-rutte--o-perfil-do-proximo-secretario-geral-da-nato-abeed026" target="_blank" rel="noreferrer">
                Nota biográfica na SIC Notícias
              </a>
              <a href="https://expresso.pt/internacional/2024-06-27-mark-rutte-o-novo-secretario-geral-da-nato-diz-se-um-conector-e-vai-precisar-dessa-qualidade-no-seu-novo-emprego-6dc5f413" target="_blank" rel="noreferrer">
                Biografia no Expresso
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MarkRuttePage;
