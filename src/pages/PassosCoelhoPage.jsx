import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/CoelhoFrente.png'
import imgEsquerda from '../../pioes/CoelhoEsquerda.png'
import imgDireita from '../../pioes/CoelhoDireita.png'
import flag from '../../bandeira/portugal.png';

function PassosCoelhoPage() {
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
          <p className="eyebrow">Portuguese Republic</p>
          <h1>Pedro Passos Coelho</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca Pedro Passos Coelho">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peca Pedro Passos Coelho" /><figcaption>Fig1 : frente da peca</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peca Pedro Passos Coelho" /><figcaption>Fig2 : lado esquerdo da peca</figcaption></figure>
          {/* <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peca Pedro Passos Coelho" /><figcaption>Fig3 : traseira da peca</figcaption></figure> */}
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peca Pedro Passos Coelho" /><figcaption>Fig4 : lado direito da peca</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              Pedro Passos Coelho foi primeiro-ministro de Portugal de 2011 a 2015, pelo PSD, um partido de centro-direita. Esteve afastado da vida política durante anos, tendo voltado ao debate público em 2025.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.historico.portugal.gov.pt/pt/o-governo/arquivo-historico/governos-constitucionais/gc20/primeiro-ministro/pm/conheca-a-equipa/primeiro-ministro/pedro-passos-coelho.aspx" target="_blank" rel="noreferrer">
                Biografia na Histórico de Portugal
              </a>
              <a href="https://pt.wikipedia.org/wiki/Pedro_Passos_Coelho" target="_blank" rel="noreferrer">
                Biografia na Wikipédia
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PassosCoelhoPage;
