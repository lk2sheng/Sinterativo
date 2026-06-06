import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/KhameneiFrente.png'
import imgEsquerda from '../../pioes/KhameneiEsquerda.png'
import imgDireita from '../../pioes/KhameneiDireita.png'
import flag from '../../bandeira/iran.png';

function MojtabaKhameneiPage() {
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
          <p className="eyebrow">Islamic Republic of Iran</p>
          <h1>Mojtaba Khamenei</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Mojtaba Khamenei">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca Mojtaba Khamenei" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>
          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca Mojtaba Khamenei" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>
          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Mojtaba Khamenei" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}
          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca Mojtaba Khamenei" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Mojtaba Khamenei é o Líder Supremo do Irão desde março de 2026, cargo sem filiação partidária formal mas associado à linha mais conservadora e dura do regime. Sucedeu ao seu pai Ali Khamenei e tem fortes ligações às Guardas da Revolução Islâmica.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://pt.euronews.com/2026/03/09/quem-e-mojtaba-khamenei-de-herdeiro-do-pai-a-lider-supremo-do-irao" target="_blank" rel="noreferrer">
                Nota biográfica Euronews
              </a>
              <a href="https://www.jornaldenegocios.pt/economia/detalhe/quem-e-mojtaba-khamenei-o-novo-lider-supremo-do-irao" target="_blank" rel="noreferrer">
                Biografia na Jornal de Negócios
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default MojtabaKhameneiPage;
