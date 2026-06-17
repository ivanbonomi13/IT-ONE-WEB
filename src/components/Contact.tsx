
import { useState } from 'react';

const Contact = () => {
  const [selectedIntent, setSelectedIntent] = useState<number | null>(null);

  const intents = [
    {
      label: "Tengo un proyecto en evaluación",
      status: "Le asignamos un asesor de proyectos para evaluar alcance y factibilidad.",
      subject: "Tengo un proyecto en evaluación"
    },
    {
      label: "Necesito consulta técnica",
      status: "Le asignamos un ingeniero especializado según el área de su consulta.",
      subject: "Necesito consulta técnica"
    },
    {
      label: "Quiero una propuesta técnico-comercial",
      status: "Le asignamos un referente comercial con experiencia en su sector.",
      subject: "Quiero una propuesta técnico-comercial"
    }
  ];

  const getMailtoLink = () => {
    if (selectedIntent !== null) {
      return `mailto:ventas@it-one.com.ar?subject=${encodeURIComponent(intents[selectedIntent].subject)}`;
    }
    return "mailto:ventas@it-one.com.ar";
  };

  return (
    <>
<section className="cta-sec" id="contacto">
<div className="eyebrow reveal" style={{ justifyContent: "center" }}><span>Contacto</span></div>
<h2 className="cta-h reveal reveal-delay-1">Cuéntenos su <span className="accent">proyecto.</span></h2>
<p className="cta-sub reveal reveal-delay-2">Comparta el requerimiento con el equipo de ingeniería y evaluamos la mejor solución juntos.</p>
<p style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--tx-dim)", marginBottom: "2rem" }}>Tecnología invisible que se nota cuando falta.</p>
{/* Selector de intención */}
<p className="intent-instruction reveal reveal-delay-3">Indique el tipo de consulta. Le asignaremos el interlocutor adecuado.</p>
<div className="intent-selector reveal reveal-delay-3">
  {intents.map((intent, index) => (
    <button 
      key={index}
      className={`intent-btn ${selectedIntent === index ? 'selected' : ''}`}
      onClick={() => setSelectedIntent(index)}
    >
      {intent.label}
    </button>
  ))}
</div>
<div className="intent-status" style={{ opacity: selectedIntent !== null ? 1 : 0 }}>
  {selectedIntent !== null ? intents[selectedIntent].status : ' '}
</div>
{/* CTA principal */}
<div className="cta-acts reveal reveal-delay-3">
<a className="btn-blue" href={getMailtoLink()}>Iniciar conversación</a>
<a className="btn-outline" href="tel:+541153680804">(+54) 11 5368-0804</a>
</div>
{/* Meta contacto */}
<div className="contact-meta">
<span className="contact-response">El equipo de ingeniería responde dentro de las 48 horas hábiles.</span>
<span className="contact-nocommit">Primera consulta sin costo ni compromiso.</span>
</div>
{/* Datos de contacto */}
<div className="cta-bar">
<div className="cta-item reveal"><div className="cta-lbl">Email comercial</div><div className="cta-val"><a href="mailto:ventas@it-one.com.ar">ventas@it-one.com.ar</a></div><div className="cta-micro">Consultas y propuestas</div></div>
<div className="cta-item reveal"><div className="cta-lbl">Oficina comercial</div><div className="cta-val">El Palomar, Buenos Aires</div><div className="cta-micro">Visitas con turno previo</div></div>
<div className="cta-item reveal"><div className="cta-lbl">Depósito y laboratorio</div><div className="cta-val">Villa Lynch, San Martín</div><div className="cta-micro">Laboratorio de integración</div></div>
<div className="cta-item reveal"><div className="cta-lbl">Presencia regional</div><div className="cta-val">Argentina · Chile · Paraguay</div><div className="cta-micro">Equipos propios y partners</div></div>
</div>
</section>
    </>
  );
};

export default Contact;
