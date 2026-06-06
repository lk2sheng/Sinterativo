import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/TakaichiFrente.png'
import imgEsquerda from '../../pioes/TakaichiEsquerda.png'
import imgDireita from '../../pioes/TakaichiDireita.png'
import flag from '../../bandeira/japan.png';

function SanaeTakaichiPage() {
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
          <p className="eyebrow">Japan</p>
          <h1>Sanae Takaichi</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Sanae Takaichi">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peca Sanae Takaichi" /><figcaption>Fig1 : frente da peca</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peca Sanae Takaichi" /><figcaption>Fig2 : lado esquerdo da peca</figcaption></figure>
          {/* <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peca Sanae Takaichi" /><figcaption>Fig3 : traseira da peca</figcaption></figure> */}
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peca Sanae Takaichi" /><figcaption>Fig4 : lado direito da peca</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Sanae Takaichi é primeira-ministra do Japão desde outubro de 2025, pelo Partido Liberal Democrático, um partido de centro-direita. É a primeira mulher a ocupar o cargo na história do país.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://expresso.pt/revista/fisga/2025-10-09-quem-e-sanae-takaichi-a-conservadora-que-quer-governar-o-japao-com-trabalho-muito-trabalho-f613c873" target="_blank" rel="noreferrer">
                Biografia no Expresso
              </a>
              <a href="https://www.bbc.com/portuguese/articles/cvg9jlzp157o" target="_blank" rel="noreferrer">
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

export default SanaeTakaichiPage;
