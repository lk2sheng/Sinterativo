import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/ONUFrente.png'
import imgEsquerda from '../../pioes/ONUEsquerda.png'
import imgDireita from '../../pioes/ONUDireita.png'
import flag from '../../bandeira/unitedNation.png';

function OnuPage() {
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
        <section className="person-hero person-hero-flag" id="top" style={{ '--person-flag-image': `url(${flag})` }}>
          <p className="eyebrow">United Nations</p>
          <h1>ONU</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peca ONU">
          <figure className="person-figure"><img src={imgFrente} alt="Figura frente da peca ONU" /><figcaption>Fig1 : frente da peca</figcaption></figure>
          <figure className="person-figure"><img src={imgEsquerda} alt="Figura lado esquerdo da peca ONU" /><figcaption>Fig2 : lado esquerdo da peca</figcaption></figure>
          {/* <figure className="person-figure"><img src={placeholderFigureImage} alt="Figura traseira da peca ONU" /><figcaption>Fig3 : traseira da peca</figcaption></figure> */}
          <figure className="person-figure"><img src={imgDireita} alt="Figura lado direito da peca ONU" /><figcaption>Fig4 : lado direito da peca</figcaption></figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descricao da peca</h2>
            <p>
              A ONU é a principal organização internacional do mundo, fundada em 1945 com 193 países membros. Tem como missão promover a paz, os direitos humanos e a cooperação entre nações.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informacoes visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://unric.org/pt/" target="_blank" rel="noreferrer">
                Site oficial da ONU
              </a>
              <a href="https://www.un.org/pt/rio/recursos/conheca-a-onu" target="_blank" rel="noreferrer">
                Descrição da ONU no site oficial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default OnuPage;
