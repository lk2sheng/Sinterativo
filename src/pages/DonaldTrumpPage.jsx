import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import usaFlag from '../../bandeira/usa.png';

function TrumpPage() {
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
          style={{ '--person-flag-image': `url(${usaFlag})` }}
        >
          <p className="eyebrow">United States of America</p>
          <h1>Donald Trump</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Trump">
          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura frente da peca Trump" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura lado esquerdo da peca Trump" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura traseira da peca Trump" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderFigureImage} alt="Figura lado direito da peca Trump" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Donald Trump é presidente dos Estados Unidos desde 2025, pelo Partido Republicano, um partido de direita. Teve um primeiro mandato de 2017 a 2021, tornando-se o único presidente americano eleito em dois mandatos não consecutivos.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.britannica.com/biography/Donald-Trump" target="_blank" rel="noreferrer">
                Contexto historico
              </a>
              <a href="https://www.whitehouse.gov/administration/donald-j-trump/" target="_blank" rel="noreferrer">
                Presidencia
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TrumpPage;
