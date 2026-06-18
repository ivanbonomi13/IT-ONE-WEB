
const About = () => {
  return (
    <>
<section className="porque por-empresa" id="empresa">
{/* Sub-anchor de compatibilidad: las referencias a #porque siguen funcionando */}
<div id="porque" style={{ position: "absolute", top: "-80px" }}></div>
<div className="eyebrow reveal">Por qué IT-ONE</div>
<h2 className="sec-title reveal reveal-delay-1">Tres diferenciales reales</h2>
<p className="sec-sub reveal reveal-delay-2">Tres razones concretas por las que las organizaciones más exigentes de la región eligen IT-ONE — y siguen eligiéndola.</p>
{/* Tres grandes números (hook institucional) */}
<div className="por-numbers">
<div className="por-num reveal">
<div className="por-num-val">+21 años</div>
<div className="por-num-copy">De operación ininterrumpida en IT &amp; OT</div>
</div>
<div className="por-num reveal">
<div className="por-num-val">12 provincias</div>
<div className="por-num-copy">Donde otros integradores no llegan</div>
</div>
<div className="por-num reveal">
<div className="por-num-val">+120 proyectos</div>
<div className="por-num-copy">Ejecutados en campo, no facturados desde escritorio</div>
</div>
</div>
{/* Tres pilares */}
<div className="pilares">
<div className="pilar reveal">
<div className="pilar-n">// 01</div>
<div className="pilar-title">Personas</div>
<div className="pilar-body">Un equipo de ingenieros, técnicos y asesores estratégicos con inversión continua en capacitación y tecnología, comprometido con acompañar la evolución de cada cliente.</div>
<div className="pilar-stats">
<div className="pilar-stat"><span className="pilar-stat-n">70%</span><span className="pilar-stat-l">Perfiles técnicos</span></div>
<div className="pilar-stat"><span className="pilar-stat-n">+7 años</span><span className="pilar-stat-l">Permanencia promedio</span></div>
</div>
<div className="pilar-stat-note">En una industria con alta rotación, retenemos el talento y el know-how.</div>
<div className="pilar-proof">→ Verificado en <a href="#casos">caso 05 · Válvula</a> y <a href="#casos">caso 07 · Laminadora</a></div>
</div>
<div className="pilar reveal">
<div className="pilar-n">// 02</div>
<div className="pilar-title">Capacidad de campo</div>
<div className="pilar-body">Operamos en zonas remotas donde la mayoría de los integradores no llega. Comunicaciones, infraestructura, satelital de órbita baja, radio, fibra — en donde su operación lo necesita.</div>
<div className="pilar-stats">
<div className="pilar-stat"><span className="pilar-stat-n">7</span><span className="pilar-stat-l">Países</span></div>
<div className="pilar-stat"><span className="pilar-stat-n">12</span><span className="pilar-stat-l">Provincias</span></div>
</div>
<div className="pilar-proof">→ Verificado en casos <a href="#casos">02 · PECASA</a>, <a href="#casos">03 · Zonda</a> y <a href="#casos">01 · El Quemado</a></div>
</div>
<div className="pilar reveal">
<div className="pilar-n">// 03</div>
<div className="pilar-title">Ciclo completo</div>
<div className="pilar-body">Desde la ingeniería conceptual hasta el soporte continuo post-implementación. Un mismo equipo en todas las etapas, garantizando coherencia técnica y trazabilidad del proyecto.</div>
<div className="pilar-stats">
<div className="pilar-stat"><span className="pilar-stat-n">6</span><span className="pilar-stat-l">Clientes principales</span></div>
<div className="pilar-stat"><span className="pilar-stat-n">+15 años</span><span className="pilar-stat-l">De relación promedio</span></div>
</div>
<div className="pilar-stat-note">Quince años no se sostienen con un único proyecto. Se sostienen con ciclo completo.</div>
<div className="pilar-proof">→ Verificado en la trayectoria <a href="#casos">Zonda → PECASA → El Quemado</a> con YPF Luz</div>
</div>
</div>
{/* Mini-puente entre pilares y trayectoria */}
<div className="evidencia-bisagra"><p className="evidencia-bisagra-text">Se verifican en las organizaciones que siguen eligiendo IT-ONE.</p></div><div className="clientes-block" id="clientes">
<div className="clientes-block-eyebrow">Clientes</div>
<h3 className="clientes-block-title">Organizaciones que confían en IT-ONE</h3>
<div className="clientes-wrap reveal" style={{ 
  display: "flex", 
  flexDirection: "column",
  gap: "1.5rem",
  overflow: "hidden", 
  position: "relative",
  width: "100%",
  padding: "1rem 0"
}}>
  {/* ROW 1: Industriales & Energía + Minería */}
  <div style={{
    display: "flex",
    gap: "1rem",
    width: "max-content",
    animation: "marquee 50s linear infinite"
  }}>
    {[1, 2].map((setIndex) => (
      <div key={`row1-${setIndex}`} style={{ display: "flex", gap: "1rem" }}>
        <div className="cli"><img alt="Techint" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Techint</span>"; }} src="https://logos.hunter.io/techint.com"/></div>
        <div className="cli"><img alt="Siemens" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Siemens</span>"; }} src="https://logos.hunter.io/siemens.com"/></div>
        <div className="cli"><img alt="General Electric" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>General Electric</span>"; }} src="https://logos.hunter.io/ge.com"/></div>
        <div className="cli"><img alt="Central Puerto" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Central Puerto</span>"; }} src="https://logos.hunter.io/centralpuerto.com"/></div>
        <div className="cli"><span className="cli-txt">AESA</span></div>
        <div className="cli"><span className="cli-txt">DVS Energy</span></div>
        <div className="cli"><span className="cli-txt">Aspro Energy</span></div>
        <div className="cli"><span className="cli-txt">Central Dock Sud</span></div>
        <div className="cli"><span className="cli-txt">Refinor</span></div>
        <div className="cli"><img alt="YPF Luz" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>YPF Luz</span>"; }} src="https://logos.hunter.io/ypfluz.com"/></div>
        <div className="cli"><span className="cli-txt">MSU Energy</span></div>
        <div className="cli"><span className="cli-txt">ALUAR</span></div>
        <div className="cli"><img alt="Wärtsilä" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Wärtsilä</span>"; }} src="https://logos.hunter.io/wartsila.com"/></div>
        <div className="cli"><img alt="Veolia" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Veolia</span>"; }} src="https://logos.hunter.io/veolia.com"/></div>
        <div className="cli"><img alt="VALE" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>VALE</span>"; }} src="https://logos.hunter.io/vale.com"/></div>
        <div className="cli"><img alt="McEwen Copper" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>McEwen Copper</span>"; }} src="https://logos.hunter.io/mcewencopper.com"/></div>
      </div>
    ))}
  </div>

  {/* ROW 2: Corporativos & Gobierno (Reverse direction) */}
  <div style={{
    display: "flex",
    gap: "1rem",
    width: "max-content",
    animation: "marquee 60s linear infinite reverse"
  }}>
    {[1, 2].map((setIndex) => (
      <div key={`row2-${setIndex}`} style={{ display: "flex", gap: "1rem" }}>
        <div className="cli"><img alt="Toyota" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Toyota</span>"; }} src="https://logos.hunter.io/toyota.com"/></div>
        <div className="cli"><img alt="ESPN" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>ESPN</span>"; }} src="https://logos.hunter.io/espn.com"/></div>
        <div className="cli"><span className="cli-txt">Autopistas del Oeste</span></div>
        <div className="cli"><img alt="Swiss Medical" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Swiss Medical</span>"; }} src="https://logos.hunter.io/swissmedical.com.ar"/></div>
        <div className="cli"><span className="cli-txt">ACARA</span></div>
        <div className="cli"><img alt="Ferrovías" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Ferrovías</span>"; }} src="https://logos.hunter.io/ferrovias.com.ar"/></div>
        <div className="cli"><span className="cli-txt">Autotrol</span></div>
        <div className="cli"><span className="cli-txt">IOSFA</span></div>
        <div className="cli"><span className="cli-txt">OSFATLYF</span></div>
        <div className="cli"><span className="cli-txt">Epidata</span></div>
        <div className="cli"><img alt="IESS" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>IESS Ecuador</span>"; }} src="https://logos.hunter.io/iess.gob.ec"/></div>
        <div className="cli"><img alt="RITBA" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>RITBA EE.UU.</span>"; }} src="https://logos.hunter.io/ritba.com"/></div>
        <div className="cli"><img alt="AYSA" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>AYSA</span>"; }} src="https://logos.hunter.io/aysa.com.ar"/></div>
        <div className="cli"><img alt="Duro Felguera" loading="lazy" onError={(e) => { const p = e.currentTarget.parentNode as HTMLElement; if (p) p.innerHTML = "<span class='cli-txt'>Duro Felguera</span>"; }} src="https://logos.hunter.io/durofelguera.com"/></div>
        <div className="cli"><span className="cli-txt">ACTC</span></div>
        <div className="cli"><span className="cli-txt">Grupo Timbo</span></div>
        <div className="cli"><span className="cli-txt">Distecna SA <span style={{fontSize:"8px", opacity:0.7}}>Paraguay</span></span></div>
        <div className="cli"><span className="cli-txt">Gob. San Juan</span></div>
        <div className="cli"><span className="cli-txt">Ferrocarriles Argentinos S.E.</span></div>
      </div>
    ))}
  </div>
</div>
</div><div className="evidencia-bisagra"><p className="evidencia-bisagra-text">Esta confianza se construye en 21 años de ejecución.</p></div>
{/* Subsección Trayectoria — timeline compacto + presencia regional */}
<div className="por-trayectoria">
{/* Sub-anchor de compatibilidad: las referencias a #nosotros siguen funcionando */}
<div id="nosotros" style={{ position: "absolute" }}></div>
<div className="eyebrow reveal">Trayectoria</div>
<h2 className="sec-title reveal reveal-delay-1">+21 años transformando organizaciones</h2>
<p className="sec-sub reveal reveal-delay-2">Nacimos en Argentina con foco en redes e infraestructura física y hemos evolucionado hacia la convergencia IT/OT y la automatización industrial, sin perder la capacidad de ejecución en campo que nos distingue.</p>
<div className="tl-grid">
{/* Timeline compacto */}
<div className="tl-list">
<div className="tl-row reveal">
<div className="tl-year">2002</div>
<div className="tl-txt">Fundación en Argentina. Fibra óptica, cableado estructurado y proyectos eléctricos.</div>
</div>
<div className="tl-row reveal">
<div className="tl-year">2004–2008</div>
<div className="tl-txt">Primeros proyectos de networking de topología y electrónica de red. Ejecución de los primeros proyectos en el sector energético. Suma de firewalls, videovigilancia y radioenlaces.</div>
</div>
<div className="tl-row reveal">
<div className="tl-year">2010–2011</div>
<div className="tl-txt">Desarrollo de los Departamentos de Ingeniería y Servicios Gestionados.</div>
</div>
<div className="tl-row reveal">
<div className="tl-year">2012–2014</div>
<div className="tl-txt">Primeros proyectos de Última Milla de Internet en locaciones remotas.</div>
</div>
<div className="tl-row reveal">
<div className="tl-year">2015</div>
<div className="tl-txt">Expansión a Chile, Paraguay y México.</div>
</div>
<div className="tl-row reveal">
<div className="tl-year">2016–2019</div>
<div className="tl-txt">Posicionamiento en energía corporativa. Incorporación de IIoT y automatización industrial.</div>
</div>
<div className="tl-row reveal">
<div className="tl-year">Hoy</div>
<div className="tl-txt">Ingeniería y Servicios integrales para Energía, Industria, Oil &amp; Gas y corporativos en Argentina y Chile.</div>
</div>
</div>
{/* Presencia regional */}
<div className="presencia">
<div>
<div className="presencia-col-title">Operación propia</div>
<div className="presencia-list">
<span className="presencia-item">Argentina</span>
<span className="presencia-item">Chile</span>
<span className="presencia-item">Paraguay</span>
</div>
</div>
<div>
<div className="presencia-col-title">Partners asociados</div>
<div className="presencia-list">
<span className="presencia-item">Brasil</span>
<span className="presencia-item">Colombia</span>
<span className="presencia-item">Panamá</span>
<span className="presencia-item">México</span>
</div>
</div>
</div>
</div>
</div>
<div style={{ marginTop: "3.5rem", textAlign: "center" }}>
<a className="btn-blue" href="#contacto" style={{ fontSize: "11px", padding: "12px 28px", display: "inline-block" }}>Hablemos →</a>
</div>
</section>
    </>
  );
};

export default About;
