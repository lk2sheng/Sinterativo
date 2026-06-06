import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/PutinFrente.png'
import imgEsquerda from '../../pioes/PutinEsquerda.png'
import imgDireita from '../../pioes/PutinDireita.png'
import flag from '../../bandeira/russia.png';

function PutinPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">XEQUE-MATE</a>
        <nav className="nav-links">
          <a className="back-link" href="./">Voltar</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Descrição</a>
          <a href="#links">Mais</a>
        </nav>
      </header>

      <main className="person-page">
        <section className="person-hero person-hero-flag" id="top" style={{ '--person-flag-image': `url(${flag})` }}>
          <p className="eyebrow">Russian Federation</p>
          <h1>Vladimir Putin</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Vladimir Putin">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peça Vladimir Putin" /><figcaption>Fig1 : frente da peça</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peça Vladimir Putin" /><figcaption>Fig2 : lado esquerdo da peça</figcaption></figure>
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peça Vladimir Putin" /><figcaption>Fig4 : lado direito da peça</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              Vladimir Putin é presidente da Rússia desde 2000, pelo Rússia Unida, um partido de direita nacionalista. Com uma breve interrupção de 2008 a 2012, é o responsável pela invasão da Ucrânia em fevereiro de 2022.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://portugal.mid.ru/pt/russia/presidente/" target="_blank" rel="noreferrer">
                Site oficial da Rússia
              </a>
              <a href="https://www.imdb.com/pt/name/nm1269884/bio/" target="_blank" rel="noreferrer">
                Biografia na IMDb
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PutinPage;
