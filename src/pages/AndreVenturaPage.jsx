import Footer from '../components/Footer.jsx';
import placeholderPawnImage from '../../picture/imagem_branca.png';

function AndreVenturaPage() {
  return (
    <>
      <header className="person-header">
        <a className="brand" href="./" aria-label="Voltar para XEQUE-MATE">
          XEQUE-MATE
        </a>
        <nav className="nav-links">
          <a href="./">Inicio</a>
          <a href="#figuras">Figuras</a>
          <a href="#biografia">Biografia</a>
          <a href="#links">Links</a>
        </nav>
      </header>

      <main className="person-page">
        <section className="person-hero" id="top">
          <p className="eyebrow">Peca politica</p>
          <h1>André Ventura</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca André Ventura">
          <figure className="person-figure person-figure-large">
            <img src={placeholderPawnImage} alt="Figura frente da peca André Ventura" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderPawnImage} alt="Figura lado esquerdo da peca André Ventura" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>

          <figure className="person-figure person-figure-large">
            <img src={placeholderPawnImage} alt="Figura traseira da peca André Ventura" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderPawnImage} alt="Figura lado direito da peca André Ventura" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>descricao da pessoa</p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="#" target="_blank" rel="noreferrer">Contexto historico</a>
              <a href="#" target="_blank" rel="noreferrer">Presidencia</a>
            </div>

            <div className="person-note-grid">
              <article>
                <span>27 pecas</span>
                <p>Espaco reservado para organizar as pecas associadas a esta figura.</p>
              </article>
              <article>
                <span>10 eleicoes</span>
                <p>Area para referencias politicas, eventos e momentos eleitorais.</p>
              </article>
              <article>
                <span>Restantes modelos</span>
                <p>Campo para guardar versoes futuras, testes visuais e variacoes.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AndreVenturaPage;
