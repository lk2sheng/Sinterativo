function PawnCard({ pawn }) {
  return (
    <article className="pawn-card">
      <div className="pawn-images" aria-label={`${pawn.name} frente e verso`}>
        <figure>
          <img src={pawn.front} alt={`${pawn.name} frente`} />
          <figcaption>Frente</figcaption>
        </figure>
        <figure>
          <img src={pawn.back} alt={`${pawn.name} verso`} />
          <figcaption>Verso</figcaption>
        </figure>
      </div>
      <div className="pawn-copy">
        <p className="pawn-name">{pawn.name}</p>
        <h3>{pawn.title}</h3>
        <p>{pawn.text}</p>
        {pawn.pageUrl ? (
          <a className="pawn-page-link" href={pawn.pageUrl}>
            Abrir pagina
          </a>
        ) : null}
        <a
          className="source-link"
          href={pawn.sourceUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir pagina sobre ${pawn.name}`}
        >
          {pawn.sourceUrl}
        </a>
      </div>
    </article>
  );
}

function PawnGallery({ trumpPawn, putinPawn, kimPawn, aseguroPawn }) {
  return (
    <section className="pawn-gallery reveal" id="pioes">
      <div className="section-index">02 - Peoes</div>
      <div className="pawn-gallery-body">
        <div className="pawn-gallery-head">
          <p className="eyebrow">02 - Peoes politicos</p>
          <h2>As pecas tornam pessoas em posicoes.</h2>
          <p>
            Cada peao apresenta uma figura publica em dois lados: a frente como
            presenca imediata, o verso como objeto manipulavel no tabuleiro. A
            leitura nasce da relacao entre imagem, distancia e escolha.
          </p>
        </div>

        <div className="pawn-grid">
          <PawnCard pawn={trumpPawn} />
          <PawnCard pawn={putinPawn} />
          <PawnCard pawn={kimPawn} />
          <PawnCard pawn={aseguroPawn} />
        </div>
      </div>
    </section>
  );
}

export default PawnGallery;
