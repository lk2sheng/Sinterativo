function Header() {
  return (
    <header className="site-header" aria-label="Navegacao principal">
      <a className="brand" href="#top" aria-label="XEQUE-MATE">
        XEQUE-MATE
      </a>
      <nav className="nav-links">
        <a href="#peoes">Peoes</a>
        {/* <a href="#frases">Frases</a> */}
        <a href="#manual">Manual</a>
        <a href="#interacao">Interacao</a>
        <a href="#exposicao">Exposicao</a>
      </nav>
    </header>
  );
}

export default Header;
