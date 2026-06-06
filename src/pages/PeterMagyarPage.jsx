import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/VenturaFrente.png'
import imgEsquerda from '../../pioes/VenturaEsquerda.png'
import imgDireita from '../../pioes/VenturaDireita.png'
import flag from '../../bandeira/hungary.png';

function PeterMagyarPage() {
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
          <p className="eyebrow">Hungary</p>
          <h1>Peter Magyar</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Peter Magyar">
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura frente da peça Peter Magyar" /><figcaption>Fig1 : frente da peça</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura lado esquerdo da peça Peter Magyar" /><figcaption>Fig2 : lado esquerdo da peça</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peça Peter Magyar" /><figcaption>Fig3 : traseira da peça</figcaption></figure>
          <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura lado direito da peça Peter Magyar" /><figcaption>Fig4 : lado direito da peça</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              Péter Magyar é primeiro-ministro da Hungria desde abril de 2026, pelo Tisza, um partido de centro-direita. Pôs fim a 16 anos de poder de Viktor Orbán, de extrema-direita.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.rtp.pt/noticias/mundo/quem-e-peter-magyar-o-antigo-homem-de-orban-que-venceu-as-eleicoes-legislativas-na-hungria_n1733496" target="_blank" rel="noreferrer">
                Quem é Peter Magyar?
              </a>
              <a href="https://cnnportugal.iol.pt/hungria/eleicoes/quem-e-peter-magyar-o-ex-aliado-que-tirou-o-poder-a-orban/20260412/69dc07d4d34e28842c82d1be" target="_blank" rel="noreferrer">
                Biografia na CNN Portugal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PeterMagyarPage;
