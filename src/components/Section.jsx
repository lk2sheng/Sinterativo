function Section({ id, eyebrow, title, children, aside }) {
  return (
    <section className="section reveal" id={id}>
      {eyebrow ? <div className="section-index">{eyebrow}</div> : null}
      <div className="section-body">
        <div className="section-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          <div className="prose">{children}</div>
        </div>
        {aside ? <aside className="section-aside">{aside}</aside> : null}
      </div>
    </section>
  );
}

export default Section;
