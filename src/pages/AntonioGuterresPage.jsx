import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/GuterresFrente.png'
import imgEsquerda from '../../pioes/GuterresEsquerda.png'
import imgDireita from '../../pioes/GuterresDireita.png'
import flag from '../../bandeira/unitedNation.png';

function AntonioGuterresPage() {
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
          style={{ '--person-flag-image': `url(${flag})` }}
        >
          <p className="eyebrow">United Nations</p>
          <h1>António Guterres</h1>
        </section>

        <section className="person-figures" id="figuras" aria-label="Figuras da peça Trump">
          <figure className="person-figure">
            <img src={imgFrente} alt="Figura frente da peça Trump" />
            <figcaption>Fig1 : frente da peça</figcaption>
          </figure>

          <figure className="person-figure">
            <img src={imgEsquerda} alt="Figura lado esquerdo da peça Trump" />
            <figcaption>Fig2 : lado esquerdo da peça</figcaption>
          </figure>

          {/* <figure className="person-figure">
            <img src={imgDireita} alt="Figura traseira da peça Trump" />
            <figcaption>Fig3 : traseira da peça</figcaption>
          </figure> */}

          <figure className="person-figure">
            <img src={imgDireita} alt="Figura lado direito da peça Trump" />
            <figcaption>Fig4 : lado direito da peça</figcaption>
          </figure>
        </section>

        <section className="person-bio" id="biografia">
          <div className="person-section-index">01</div>
          <div>
            <p className="eyebrow">Quem sou eu?</p>
            <h2>Descrição da peça</h2>
            <p>
              António Guterres é secretário-geral das Nações Unidas desde 2017, reeleito para um segundo mandato até 2026. Foi primeiro-ministro de Portugal de 1995 a 2002, pelo Partido Socialista, um partido de centro-esquerda.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://unric.org/pt/biografia/" target="_blank" rel="noreferrer">
                Nota biográfica do secretário-geral das Nações Unidas
              </a>
              <a href="https://www.ulisboa.pt/bio/antonio-guterres" target="_blank" rel="noreferrer">
                Biografia na Universidade de Lisboa
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AntonioGuterresPage;
