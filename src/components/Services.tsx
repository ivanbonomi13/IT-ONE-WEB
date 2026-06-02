const servicesList = [
    { id: 1, icon: '💻', title: 'Devops', text: 'Integración y entrega continua para optimizar el ciclo de vida del software en su organización.' },
    { id: 2, icon: '🔄', title: 'Outsourcing IT', text: 'Tercerización de personal capacitado y servicios administrados para potenciar su equipo de tecnología.' },
    { id: 3, icon: '☁️', title: 'Cloud', text: 'Migración, arquitectura y gestión de infraestructura en la nube para garantizar disponibilidad y escalabilidad.' },
    { id: 4, icon: '📡', title: 'Soluciones IOT', text: 'Internet de las Cosas para entornos industriales. Monitoreo y recolección de datos en tiempo real.' },
    { id: 5, icon: '⚙️', title: 'TIM', text: 'Telecomunicaciones e Infraestructura Móvil. Redes de amplio alcance y comunicaciones seguras.' },
    { id: 6, icon: '🚁', title: 'SAR-H', text: 'Sistemas Aéreos Remotamente Tripulados. Drones para inspección industrial y relevamiento en zonas de difícil acceso.' },
    { id: 7, icon: '🌡️', title: 'Termografía', text: 'Análisis térmico avanzado para mantenimiento preventivo de infraestructura eléctrica y mecánica.' }
];

export default function Services() {
    return (
        <section id="servicios" className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Nuestros Servicios</h2>
                    <p>Procesos y soluciones tecnológicas diseñadas para resolver sus requerimientos con el mayor grado de eficiencia y rapidez.</p>
                </div>
                
                <div className="services-grid">
                    {servicesList.map(svc => (
                        <div key={svc.id} className="service-box animate-on-scroll">
                            <div className="icon">{svc.icon}</div>
                            <h3>{svc.title}</h3>
                            <p>{svc.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
