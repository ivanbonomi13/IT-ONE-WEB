export default function About() {
    return (
        <>
            <section id="historia" className="section bg-light">
                <div className="container about-container">
                    <div className="about-image">
                        <img src="/images/about_industry.png" alt="Ingenieros en planta de IT ONE" />
                    </div>
                    <div className="about-content">
                        <div className="section-badge">15+ Años de Experiencia</div>
                        <h2>Nuestra Historia</h2>
                        <p>En el año 2002, <strong>Erick Wanger</strong> y <strong>Sebastián Puebla</strong> dieron comienzo a IT ONE en Argentina, con el objetivo de brindar servicios de fibra óptica, cableado estructurado y electricidad. Al poco tiempo la empresa incorporó soluciones de topología y electrónica de red y para el 2010, sumaron Firewalls, videovigilancia y sistemas de radio.</p>
                        <p>En ese mismo año, la empresa cuadruplicó su operación y comenzó un proceso de expansión dentro de Latinoamérica en Chile, Paraguay y México. Hoy en día IT ONE está posicionado como un referente en el sector corporativo energético ofreciendo múltiples servicios de TI y Telecomunicaciones.</p>
                        
                        <div className="vision-mission-grid">
                            <div className="card-simple animate-on-scroll">
                                <h3>Nuestra Misión</h3>
                                <p>Brindar soluciones en todas las plataformas de tecnologías de la información y telecomunicaciones, para cubrir las necesidades de nuestros clientes en cualquier ambiente y zona geográfica.</p>
                            </div>
                            <div className="card-simple animate-on-scroll">
                                <h3>Nuestra Visión</h3>
                                <p>Ser reconocidos por la creatividad e innovación de nuestras soluciones y servicios; y por la calidad humana de nuestro equipo de profesionales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-accent text-white" style={{ position: 'relative' }}>
                <div className="custom-shape-divider-top">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-light"></path>
                    </svg>
                </div>
                
                <div className="container text-center max-w-800 animate-on-scroll">
                    <h2>Lideramos la Transformación Tecnológica</h2>
                    <p className="large-text">Hace más de 15 años que impulsamos el proceso de crecimiento de empresas en América Latina.</p>
                    <p>Nuestro trabajo implica entender qué desafíos necesitan resolver cada uno de nuestros clientes, conocer las particularidades de su organización, y luego proveer las soluciones específicas que protejan su inversión y potencien su negocio. <strong>No existen imposibles: Todos los proyectos pueden realizarse.</strong></p>
                </div>

                <div className="custom-shape-divider-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-white"></path>
                    </svg>
                </div>
            </section>
        </>
    );
}
