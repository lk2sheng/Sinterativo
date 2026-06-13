function Header() {
  return (
    <header className="site-header" aria-label="Navegação principal">
      <a className="brand" href="#top" aria-label="XEQUE-MATE">
        XEQUE-MATE
      </a>
      <nav className="nav-links">
        <a href="#peoes">Peões</a>
        {/* <a href="#frases">Frases</a> */}
        <a href="#manual">Manual</a>
        <a href="#interacao">Interação</a>
        <a href="#grupo">Sobre o grupo</a>
      </nav>
    </header>
  );
}

export default Header;
