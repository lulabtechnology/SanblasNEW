const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#acompanamiento", label: "Acompañamiento" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#formas", label: "Formas de acompañarte" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="nav-logo-mark">
          <img src="/logo-aureya.png" alt="Logo Entre Almas Abiertas" />
          <div>
            <div className="nav-title-main">Entre Almas Abiertas</div>
            <div className="nav-subtitle">Acompañamiento humano · Aureya</div>
          </div>
        </div>
      </div>

      <nav className="nav-links">
        {links.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-cta-wrap">
        <a href="#contacto">
          <button className="btn-gradient">Agenda una sesión</button>
        </a>
      </div>
    </header>
  );
}
