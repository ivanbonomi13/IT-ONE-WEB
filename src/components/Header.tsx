import { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="top-contact">
                        <span>📞 (+54) 11 5368 0804</span>
                        <span>✉️ ventas@it-one.com.ar</span>
                    </div>
                    <div className="top-links">
                        <a href="#unidades">Unidades de Negocio</a>
                        <a href="#casos">Casos de Éxito</a>
                    </div>
                </div>
            </div>

            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar">
                    <a href="#" className="logo">
                        IT <span>ONE</span>
                    </a>
                    <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <a href="#inicio" onClick={closeMenu}>Inicio</a>
                        <a href="#historia" onClick={closeMenu}>Nuestra Historia</a>
                        <a href="#servicios" onClick={closeMenu}>Servicios</a>
                        <a href="#contacto" className="btn-primary" onClick={closeMenu}>Contacto</a>
                    </nav>
                    <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
                        {menuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>
            </header>
        </>
    );
}
