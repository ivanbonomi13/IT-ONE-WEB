export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <div className="logo logo-footer">IT <span>ONE</span></div>
                    <p>Brindamos servicios y herramientas sobre la Tecnología de la Información (TI) y las Telecomunicaciones para todo tipo de organizaciones.</p>
                </div>
                <div className="footer-col">
                    <h4>Directorio</h4>
                    <p>Eric Wanger - Director</p>
                    <p>Sebastian Puebla - Director</p>
                </div>
                <div className="footer-col">
                    <h4>Enlaces</h4>
                    <ul className="footer-links">
                        <li><a href="#historia">Nuestra Historia</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#unidades">Unidades de Negocio</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 IT ONE. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
