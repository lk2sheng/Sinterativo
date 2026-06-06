import Footer from '../components/Footer.jsx';
import placeholderFigureImage from '../../picture/imagem_branca.png';
import imgFrente from '../../pioes/MacronFrente.png'
import imgEsquerda from '../../pioes/MacronEsquerda.png'
import imgDireita from '../../pioes/MacronDireita.png'
import flag from '../../bandeira/france.png';

function EmmanuelMacronPage() {
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
          <p className="eyebrow">French Republic</p>
          <h1>Emmanuel Macron</h1>
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
            <img src={placeholderFigureImage} alt="Figura traseira da peça Trump" />
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
                Emmanuel Macron é presidente de França desde 2017, pelo La République En Marche, um partido de centro. Está no seu segundo e último mandato, que termina em 2027.
            </p>
          </div>
        </section>

        <section className="person-links" id="links">
          <div className="person-section-index">02</div>
          <div>
            <p className="eyebrow">Para mais informações visite os seguintes sites</p>
            <div className="person-link-grid">
              <a href="https://www.cmjornal.pt/politica/detalhe/quem-e-emmanuel-macron-o-novo-presidente-de-franca" target="_blank" rel="noreferrer">
                Nota biográfica do presidente de França
              </a>
              <a href="https://www.publico.pt/2017/05/07/mundo/noticia/emmanuel-macron-o-maquiavelico-que-passou-a-vida-a-desafiar-a-sorte-1771204" target="_blank" rel="noreferrer">
                Biografia no Público
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default EmmanuelMacronPage;
