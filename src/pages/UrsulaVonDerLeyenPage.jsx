import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/UrsulaFrente.png'
import imgEsquerda from '../../pioes/UrsulaEsquerda.png'
import imgDireita from '../../pioes/UrsulaDireita.png'
import flag from '../../bandeira/europian.png';

function UrsulaVonDerLeyenPage() {
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
          <p className="eyebrow">European Union</p>
          <h1>Ursula von der Leyen</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Ursula von der Leyen">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peça Ursula von der Leyen" /><figcaption>Fig1 : frente da peça</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peça Ursula von der Leyen" /><figcaption>Fig2 : lado esquerdo da peça</figcaption></figure>
          {/* <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peça Ursula von der Leyen" /><figcaption>Fig3 : traseira da peça</figcaption></figure> */}
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peça Ursula von der Leyen" /><figcaption>Fig4 : lado direito da peça</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              Ursula von der Leyen é presidente da Comissão Europeia desde 2019, reeleita em dezembro de 2024 para um segundo mandato, pelo CDU, um partido de centro-direita alemão.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://expresso.pt/revista/2023-03-03-A-maquina-Von-der-Leyen-o-perfil-da-maior-representante-do-poder-no-feminino-cf762c6d" target="_blank" rel="noreferrer">
                Biografia no Expresso
              </a>
              <a href="https://sicnoticias.pt/mundo/2019-07-16-Von-der-Leyen-a-primeira-mulher-Presidente-da-Comissao-Europeia?fbclid=IwAR36f8QYebbmTk2zuSv59P8vJX_24j9w7hd-B5VQ3vru7j7Rm9aCP07IOOQ" target="_blank" rel="noreferrer">
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

export default UrsulaVonDerLeyenPage;
