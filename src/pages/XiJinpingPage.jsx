import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/XiFrente.png'
import imgEsquerda from '../../pioes/XiEsquerda.png'
import imgDireita from '../../pioes/XiDireita.png'
import flag from '../../bandeira/china.png';

function XiJinpingPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">XEQUE-MATE</a>
        <nav className="nav-links">
          <a className="back-link" href="./">Voltar</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Descricao</a>
          <a href="#links">Mais</a>
        </nav>
      </header>

      <main className="person-page">
        <section className="person-hero person-hero-flag" id="top" style={{ '--person-flag-image': `url(${flag})` }}>
          <p className="eyebrow">People's Republic of China</p>
          <h1>Xi Jinping</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Xi Jinping">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peca Xi Jinping" /><figcaption>Fig1 : frente da peca</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peca Xi Jinping" /><figcaption>Fig2 : lado esquerdo da peca</figcaption></figure>
          {/* <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peca Xi Jinping" /><figcaption>Fig3 : traseira da peca</figcaption></figure> */}
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peca Xi Jinping" /><figcaption>Fig4 : lado direito da peca</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Xi Jinping é presidente da China desde 2013, pelo Partido Comunista Chinês, um partido de esquerda autoritária. Em 2018 eliminou o limite de mandatos, sendo atualmente o líder mais poderoso do país desde Mao Tsé-Tung.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://cnnportugal.iol.pt/xi-jinping/perfil/a-incrivel-historia-de-xi-jinping-nascido-para-reinar/20221016/634a731a0cf26256cd3aa8b5" target="_blank" rel="noreferrer">
                Biografia na CNN Portugal
              </a>
              <a href="https://sicnoticias.pt/mundo/2018-12-04-Quem-e-Xi-Jinping-o-homem-forte-da-Republica-Popular-da-China" target="_blank" rel="noreferrer">
                Biografia na SIC Notícias
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default XiJinpingPage;
