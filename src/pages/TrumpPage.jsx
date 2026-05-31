import Footer from '../components/Footer.jsx';
import placeholderPawnImage from '../../picture/imagem_branca.png';

function TrumpPage() {
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
          <h1>Donald Trump</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Trump">
          <figure className="person-figure person-figure-large">
            <img src={placeholderPawnImage} alt="Figura frente da peca Trump" />
            <figcaption>Fig1 : frente da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderPawnImage} alt="Figura lado esquerdo da peca Trump" />
            <figcaption>Fig2 : lado esquerdo da peca</figcaption>
          </figure>

          <figure className="person-figure person-figure-large">
            <img src={placeholderPawnImage} alt="Figura traseira da peca Trump" />
            <figcaption>Fig3 : traseira da peca</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={placeholderPawnImage} alt="Figura lado direito da peca Trump" />
            <figcaption>Fig4 : lado direito da peca</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Donald Trump e apresentado como uma peca ligada a poder mediatico,
              populismo e polarizacao publica.
            </p>
            <p>
              A sua imagem funciona como simbolo de disputa: aproxima pessoas,
              cria conflito e transforma cada movimento numa declaracao visual.
            </p>
            <p>
              No tabuleiro, esta peca pode representar ataque, ruido politico e
              a forma como a presenca publica muda a leitura do jogo.
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

export default TrumpPage;
