import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/MileiFrente.png'
import imgEsquerda from '../../pioes/MileiEsquerda.png'
import imgDireita from '../../pioes/MileiDireita.png'
import flag from '../../bandeira/argentina.png';

function JavierMileiPage() {
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
        <section
          className="person-hero person-hero-flag"
          id="top"
          style={{ '--person-flag-image': `url(${flag})` }}
        >
          <p className="eyebrow">Argentine Republic</p>
          <h1>Javier Milei</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Javier Milei">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peca Javier Milei" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peca Javier Milei" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Javier Milei" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peca Javier Milei" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Javier Milei é presidente da Argentina desde dezembro de 2023. É economista de profissão e chegou ao poder com uma proposta radical para curtar os gastos públicos e reduzir o Estado, tornando-se um dos rostos mais conhecidos da nova direita populista a nível mundial.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.rtp.pt/noticias/mundo/javier-milei-o-louco-que-ascendeu-a-presidencia-para-mudar-o-rumo-da-argentina_n1531256" target="_blank" rel="noreferrer">
                Nota biográfica RTP
              </a>
              <a href="https://visao.pt/atualidade/mundo/2023-11-20-quem-e-javier-milei-o-anarcocapitalista-da-ultra-direita-que-e-o-novo-presidente-da-argentina/" target="_blank" rel="noreferrer">
                Biografia na Visão
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default JavierMileiPage;
