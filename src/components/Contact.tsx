import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate network request
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 3000);
            (e.target as HTMLFormElement).reset();
        }, 1000);
    };

    return (
        <section id="contacto" className="section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info-panel animate-on-scroll">
                        <h2>Contáctenos</h2>
                        <p>Estamos listos para afrontar cualquier proyecto. Póngase en contacto con nosotros para recibir asesoramiento personalizado acorde a las necesidades de su empresa.</p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="c-icon">📞</div>
                                <div>
                                    <strong>Teléfono</strong>
                                    <p>(+54) 11 5368 0804</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="c-icon">✉️</div>
                                <div>
                                    <strong>Email</strong>
                                    <p>ventas@it-one.com.ar</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="c-icon">🏢</div>
                                <div>
                                    <strong>Oficina Comercial y Show Room</strong>
                                    <p>Capitán Joaquín Madariaga 718<br/>El Palomar - CP 1685</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="c-icon">🏭</div>
                                <div>
                                    <strong>Depósito y Laboratorio</strong>
                                    <p>Calle 87 (ex Manuel Alberti) 425<br/>Villa Lynch - San Martín - CP 1672</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form-panel animate-on-scroll">
                        <h3>Envíe su Consulta</h3>
                        <form id="contactForm" className="form-corporate" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" id="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Empresa</label>
                                    <input type="text" id="company" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input type="tel" id="phone" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" rows={5} required></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn-primary" 
                                style={{ backgroundColor: status === 'sent' ? '#00d084' : '' }}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Enviado!' : 'Enviar Mensaje'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
