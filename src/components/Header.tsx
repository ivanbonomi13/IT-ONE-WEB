import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a className="nav-brand" href="#">
        <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="30" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="700" fill="#0B1D35">IT</text>
          <text x="34" y="30" fontFamily="'Space Grotesk', sans-serif" fontSize="28" fontWeight="700" fill="#00D4FF">ONE</text>
          <text x="0" y="39" fontFamily="'JetBrains Mono', monospace" fontSize="7" fontWeight="500" letterSpacing="1.5" fill="#94A3B8">SERVICIOS + TECNOLOGÍA</text>
        </svg>
      </a>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={menuOpen ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}} />
      </button>

      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Lo que hacemos</a></li>
        <li><a href="#verticales" onClick={() => setMenuOpen(false)}>Verticales</a></li>
        <li><a href="#empresa" onClick={() => setMenuOpen(false)}>Por qué IT-ONE</a></li>
        <li><a href="#casos" onClick={() => setMenuOpen(false)}>Casos</a></li>
        <li><a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a></li>
        <li><a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Hablar con ingeniería</a></li>
      </ul>
    </nav>
  );
};

export default Header;
