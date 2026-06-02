export default function BusinessUnits() {
    return (
        <section id="unidades" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2>Unidades de Negocio</h2>
                    <p>Adaptamos nuestra experiencia a los requerimientos específicos de su sector.</p>
                </div>
                <div className="units-grid">
                    <div className="unit-card animate-on-scroll">
                        <div className="unit-img industrial"></div>
                        <div className="unit-content">
                            <h3>Industria y Energía</h3>
                            <p>Soluciones para zonas remotas, infraestructura crítica y monitoreo continuo para el sector energético, minero e industrial.</p>
                        </div>
                    </div>
                    <div className="unit-card animate-on-scroll">
                        <div className="unit-img corporate"></div>
                        <div className="unit-content">
                            <h3>Corporativo y Gobierno</h3>
                            <p>Infraestructura de TI robusta, seguridad de la información y redes corporativas escalables para grandes entidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
