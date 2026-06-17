
import { useState } from 'react';

const Services = () => {
  const [openEnergia, setOpenEnergia] = useState(false);
  return (
    <>
<section className="servicios" id="servicios">
<div className="eyebrow reveal">Lo que hacemos</div>
<h2 className="sec-title reveal reveal-delay-1">El integrador que une los dos mundos</h2>
<p className="sec-sub reveal reveal-delay-2">No somos un reseller. Somos un equipo de ingeniería propio que diseña, ejecuta y sostiene proyectos donde el mundo IT y OT se encuentran.</p>
<div className="srv-intro reveal reveal-delay-3">
<div className="srv-intro-content">
<h3 className="srv-intro-title">No somos un reseller. Somos el equipo que entiende el problema, diseña la solución y la ejecuta en campo.</h3>
<p className="srv-intro-desc">Servicios integrales IT &amp; OT, diseñados para condiciones reales. Cada servicio puede contratarse de forma independiente o como parte de un proyecto integral. Modelos CAPEX para implementación y OPEX para operación gestionada.</p>
</div>
</div>
{/* ★ IT & OT BRIDGE BAND */}
<div className="itot-band reveal">
<div className="itot-bg-parallax"></div>
<div className="itot-eyebrow">★ Categoría integrada</div>
<h3 className="itot-title">IT &amp; OT Bridge</h3>
<p className="itot-promise">Donde la operación industrial conversa con la inteligencia del negocio. Convergencia IT &amp; OT segura.</p>
<div className="itot-divider"></div>
<div className="itot-children">
<div className="itot-child">
<div className="itot-child-num">// 01</div>
<div className="itot-child-name">Auditoría fronteras IT &amp; OT</div>
<div className="itot-child-desc">Diagnóstico de los puntos de contacto entre redes industriales y corporativas. Mapeo de exposiciones, dependencias y riesgos antes de tocar la operación.</div>
</div>
<div className="itot-child">
<div className="itot-child-num">// 02</div>
<div className="itot-child-name">Convergencia de redes IT &amp; OT</div>
<div className="itot-child-desc">Arquitectura unificada con segmentación y jerarquía Purdue. Protocolos industriales y corporativos hablando entre sí, sin comprometer la planta.</div>
</div>
<div className="itot-child">
<div className="itot-child-num">// 03</div>
<div className="itot-child-name">OT Cyberseg</div>
<div className="itot-child-desc">Ciberseguridad diseñada para entornos OT, no para oficinas. Hardening, detección y respuesta sin afectar la continuidad operativa.</div>
</div>
<div className="itot-child">
<div className="itot-child-num">// 04</div>
<div className="itot-child-name">Automatización &amp; Control</div>
<div className="itot-child-desc">Sus máquinas saben más de lo que parece — solo hay que escucharlas. Integración de SCADA, PLCs e IIoT para convertir datos OT en decisiones operativas.</div>
</div>
</div>
</div>
<div className="srv-grid">
{/* S1 · Ingeniería de Proyectos IT & OT */}
<div className="srv reveal">
<div className="srv-watermark">01</div>
<div className="srv-num">// 01</div>
<div className="srv-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg></div>
<div className="srv-title">Ingeniería de Proyectos IT &amp; OT</div>
<div className="srv-desc">Relevamiento en sitio, arquitectura de la solución, integración de sistemas de campo y documentación según estándares de la industria. Cada proyecto atraviesa un proceso técnico estructurado: análisis de requerimientos, definición de topología, especificación de componentes y planes de implementación verificables.</div>
<div className="srv-areas">
<span className="srv-tag">Relevamiento</span>
<span className="srv-tag">Memoria descriptiva</span>
<span className="srv-tag">Pliegos</span>
<span className="srv-tag">Ingeniería de detalle</span>
<span className="srv-tag">PM técnico</span>
</div>
<div className="srv-tags-block">
<div className="chip-row"><span className="chip-lbl">Aplicado en</span>
<a className="chip chip-d1" href="#casos">03 · Zonda</a>
<a className="chip chip-d1" href="#casos">01 · El Quemado</a>
</div>
<div className="chip-row"><span className="chip-lbl">Verticales</span>
<span className="chip chip-d1">Industrial</span>
<span className="chip chip-d1">Corporativo</span>
<span className="chip chip-d1">Gobierno</span>
</div>
</div>
</div>
{/* S2 · Conectividad de última milla (antes era S3) */}
<div className="srv reveal">
<div className="srv-watermark">03</div>
<div className="srv-num">// 03</div>
<div className="srv-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg></div>
<div className="srv-title">Conectividad de última milla</div>
<div className="srv-desc">¿Su próximo proyecto está en medio de la nada? Ningún problema, nosotros llegamos. Órbita baja, radioenlaces, fibra — armamos la solución que su locación necesita. Sin conectividad, no hay operación. Opere con la misma calidad que su oficina central. La distancia ya no es una excusa.</div>
<div className="srv-areas">
<span className="srv-tag">Donde sea</span>
<span className="srv-tag">Lo que sea</span>
<span className="srv-tag">Rápido</span>
<span className="srv-tag">Confiable</span>
</div>
<div className="srv-tags-block">
<div className="chip-row"><span className="chip-lbl">Aplicado en</span>
<a className="chip chip-d1" href="#casos">02 · PECASA</a>
<a className="chip chip-d1" href="#casos">03 · Zonda</a>
<a className="chip chip-d1" href="#casos">01 · El Quemado</a>
</div>
<div className="chip-row"><span className="chip-lbl">Tecnología</span>
<span className="chip chip-d4">Starlink</span>
<span className="chip chip-d4">Getac</span>
</div>
</div>
</div>
{/* S4 · Redes & Conectividad */}
<div className="srv reveal">
<div className="srv-watermark">04</div>
<div className="srv-num">// 04</div>
<div className="srv-icon"><svg viewBox="0 0 24 24"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect></svg></div>
<div className="srv-title">Redes &amp; Conectividad</div>
<div className="srv-desc">La red es el activo invisible que sostiene cada decisión de su negocio. Diseñamos arquitecturas de datos robustas para entornos industriales y corporativos, con foco en alta disponibilidad, seguridad y escalabilidad. Cuando la red funciona, su operación también.</div>
<div className="srv-areas">
<span className="srv-tag">Arquitectura</span>
<span className="srv-tag">Alta disponibilidad</span>
<span className="srv-tag">Multisite</span>
<span className="srv-tag">Soporte continuo</span>
</div>
<div className="srv-tags-block">
<div className="chip-row"><span className="chip-lbl">Aplicado en</span>
<a className="chip chip-d1" href="#casos">02 · PECASA</a>
<a className="chip chip-d1" href="#casos">01 · El Quemado</a>
</div>
<div className="chip-row"><span className="chip-lbl">Verticales</span>
<span className="chip chip-d1">Industrial</span>
<span className="chip chip-d1">Corporativo</span>
</div>
</div>
</div>
{/* S5 · Sistemas de Seguridad Integrados */}
<div className="srv reveal">
<div className="srv-watermark">05</div>
<div className="srv-num">// 05</div>
<div className="srv-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
<div className="srv-title">Sistemas de Seguridad Integrados</div>
<div className="srv-desc">La seguridad ya no es una cámara y un guardia. Es un ecosistema integrado de videovigilancia IP, control de accesos y detección de intrusión operando en tiempo real desde una única plataforma — con cumplimiento normativo para entornos regulados como banca, energía y minería. La inteligencia aparece cuando estos sistemas dialogan con los sistemas de gestión.</div>
<div className="srv-areas">
<span className="srv-tag">Videovigilancia IP</span>
<span className="srv-tag">Control de accesos</span>
<span className="srv-tag">VMS/PSIM</span>
<span className="srv-tag">Biometría</span>
<span className="srv-tag">Cumplimiento</span>
</div>
<div className="srv-tags-block">
<div className="chip-row"><span className="chip-lbl">Aplicado en</span>
<a className="chip chip-d1" href="#casos">01 · El Quemado</a>
<a className="chip chip-d1" href="#casos">06 · Molino</a>
<a className="chip chip-d1" href="#casos">07 · Laminadora</a>
</div>
<div className="chip-row"><span className="chip-lbl">Verticales</span>
<span className="chip chip-d1">Industrial</span>
<span className="chip chip-d1">Corporativo</span>
<span className="chip chip-d1">Gobierno</span>
</div>
</div>
</div>
{/* S6 · Infraestructura & Energía */}
<div className="srv reveal">
<div className="srv-watermark">06</div>
<div className="srv-num">// 06</div>
<div className="srv-icon"><svg viewBox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="7"></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg></div>
<div className="srv-title">Infraestructura &amp; Energía</div>
<div className="srv-desc">Salas de datos, UPS modulares con redundancia N+1, tableros eléctricos TGBT, sistemas de tierra y pararrayos, climatización de precisión y cableado estructurado. Coordinamos obra civil, electricidad y tecnología bajo un solo project management. Proyectos llave en mano.</div>
<div className="srv-areas">
<span className="srv-tag">Salas Tier</span>
<span className="srv-tag">UPS N+1</span>
<span className="srv-tag">TGBT</span>
<span className="srv-tag">Cat 6A/7</span>
</div>
<div className="srv-tags-block">
<div className="chip-row"><span className="chip-lbl">Tecnología</span>
<span className="chip chip-d4">Weidmüller</span>
</div>
<div className="chip-row"><span className="chip-lbl">Verticales</span>
<span className="chip chip-d1">Industrial</span>
<span className="chip chip-d1">Corporativo</span>
</div>
</div>
</div>
{/* S8 · Servicios gestionados */}
<div className="srv reveal">
<div className="srv-watermark">08</div>
<div className="srv-num">// 08</div>
<div className="srv-icon"><svg viewBox="0 0 24 24"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg></div>
<div className="srv-title">Servicios gestionados</div>
<div className="srv-desc">Lo que instalamos lo cuidamos. Su tecnología funciona los 365 días del año porque nuestro equipo trabaja para que así sea. Monitoreo continuo, respuesta inmediata, mantenimiento planificado. Gestionamos infraestructura crítica bajo modelos de servicio con SLA, costos predecibles y reportes ejecutivos.</div>
<div className="srv-areas">
<span className="srv-tag">SLA garantizado</span>
<span className="srv-tag">Monitoreo 24/7</span>
<span className="srv-tag">Modelo OPEX</span>
<span className="srv-tag">Reportes ejecutivos</span>
</div>
<div className="srv-tags-block">
<div className="chip-row"><span className="chip-lbl">Aplicado en</span>
<a className="chip chip-d1" href="#casos">02 · PECASA</a>
<a className="chip chip-d1" href="#casos">01 · El Quemado</a>
</div>
<div className="chip-row"><span className="chip-lbl">Tecnología</span>
<span className="chip chip-d4">TIM</span>
<span className="chip chip-d4">SAR-H</span>
</div>
</div>
</div>
{/* CTA Card */}
<div className="srv srv-cta-card">
<div className="srv-num" style={{ color: "var(--amber)" }}>// CTA</div>
<div className="srv-title">¿Su proyecto tiene requerimientos específicos?</div>
<div className="srv-desc" style={{ marginBottom: "1.5rem" }}>Cada proyecto es único. El equipo de ingeniería evalúa los requerimientos y diseña la solución.</div>
<a className="btn-blue" href="#contacto" style={{ alignSelf: "flex-start" }}>Consultar con ingeniería</a>
</div>
</div>
<div className="por-bridge reveal"><p className="por-bridge-text">La misma ingeniería, adaptada al entorno donde opera. IT-ONE conoce las tres: industria, corporaciones y gobierno.</p></div><div className="verticales verticales-sub"><div id="verticales" style={{ position: "absolute", top: "-80px" }}></div><div className="eyebrow reveal">Sectores</div><h2 className="sec-title reveal reveal-delay-1">Verticales</h2><p className="sec-sub reveal reveal-delay-2">Industrial, Corporativo y Gobierno. Cada contexto define sus propias exigencias operativas; IT-ONE tiene interlocución e ingeniería propias para cada uno.</p><div className="vert-wrap">
{/* INDUSTRIAL */}
<div className="vert-col reveal">
<div className="vert-head">
<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
        Industrial
      </div>
<div className={`vert-row vert-accordion ${openEnergia ? 'open' : ''}`} onClick={() => setOpenEnergia(!openEnergia)}>
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Energía <span className="acc-arrow">▸</span></div>
<div className="vert-desc">Generación térmica, eólica y solar.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Última Milla</span>
<span className="chip chip-d2">Redes</span>
<span className="chip chip-d2">Seguridad</span>
<span className="chip chip-d2">Gestionados</span>
</div>
</div>
</div>
<div className={`acc-panel ${openEnergia ? 'open' : ''}`} id="energia-panel">
<div className="vert-row vert-child">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-child-name">Centrales Termoeléctricas</div>
<div className="vert-child-desc">La tecnología que mantiene la generación en línea, sin importar las condiciones del entorno.</div>
</div>
</div>
</div>
<div className="vert-row vert-child">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-child-name">Parques Eólicos</div>
<div className="vert-child-desc">Conectividad y control en locaciones remotas donde el viento llega antes que la fibra.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Caso</span>
<a className="chip chip-d1" href="#casos">02 · PECASA</a>
</div>
</div>
</div>
<div className="vert-row vert-child">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-child-name">Parques Solares</div>
<div className="vert-child-desc">Infraestructura IT y OT para parques que operan solos, lejos de todo.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Casos</span>
<a className="chip chip-d1" href="#casos">03 · Zonda</a>
<a className="chip chip-d1" href="#casos">01 · El Quemado</a>
<span className="chip chip-rigi">RIGI ★</span>
</div>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Oil &amp; Gas</div>
<div className="vert-desc">Desde el pozo hasta la refinería. Redes, automatización y seguridad donde la operación no puede parar.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Automatización</span>
<span className="chip chip-d2">IT/OT Bridge</span>
<span className="chip chip-d2">Última Milla</span>
</div>
<div className="chip-row">
<span className="chip-lbl">Caso</span>
<a className="chip chip-d1" href="#casos">05 · Válvula</a>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Minería</div>
<div className="vert-desc">En superficie o bajo tierra, llevamos tecnología a donde otros no llegan.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Automatización</span>
<span className="chip chip-d2">Seguridad</span>
</div>
<div className="chip-row">
<span className="chip-lbl">Caso</span>
<a className="chip chip-d1" href="#casos">06 · Molino</a>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Plantas de Producción</div>
<div className="vert-desc">Conectamos el piso de planta con la sala de dirección. En tiempo real.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Automatización</span>
<span className="chip chip-d2">IT/OT Bridge</span>
<span className="chip chip-d2">Seguridad</span>
</div>
<div className="chip-row">
<span className="chip-lbl">Casos</span>
<a className="chip chip-d1" href="#casos">04 · Fresadora</a>
<a className="chip chip-d1" href="#casos">07 · Laminadora</a>
</div>
</div>
</div>
</div>
{/* CORPORATIVO */}
<div className="vert-col reveal">
<div className="vert-head">
<svg viewBox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
        Corporativo
      </div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Empresas Multisite</div>
<div className="vert-desc">Una sola tecnología, muchas locaciones. Estandarización y soporte unificado.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Redes</span>
<span className="chip chip-d2">Gestionados</span>
<span className="chip chip-d2">Infraestructura</span>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Logística &amp; Supply Chain</div>
<div className="vert-desc">Trazabilidad, conectividad y automatización para operaciones que no admiten demoras.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Automatización</span>
<span className="chip chip-d2">Seguridad</span>
<span className="chip chip-d2">Redes</span>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Banca &amp; Servicios Financieros</div>
<div className="vert-desc">Infraestructura crítica para entornos donde cada segundo y cada dato importan.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Seguridad</span>
<span className="chip chip-d2">Infraestructura</span>
<span className="chip chip-d2">Gestionados</span>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Salud</div>
<div className="vert-desc">Tecnología confiable para organizaciones donde una falla puede tener consecuencias reales.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Redes</span>
<span className="chip chip-d2">Infraestructura</span>
<span className="chip chip-d2">Seguridad</span>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Real Estate Corporativo</div>
<div className="vert-desc">Edificios inteligentes, seguros y conectados. Tecnología invisible que se nota cuando falta.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Infraestructura</span>
<span className="chip chip-d2">Seguridad</span>
<span className="chip chip-d2">Automatización</span>
</div>
</div>
</div>
</div>
{/* GOBIERNO */}
<div className="vert-col reveal">
<div className="vert-head">
<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        Gobierno
      </div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Seguridad &amp; Fuerzas</div>
<div className="vert-desc">Infraestructura tecnológica robusta para organizaciones que operan en alta exigencia.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Seguridad</span>
<span className="chip chip-d2">Última Milla</span>
<span className="chip chip-d2">Redes</span>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Salud Pública</div>
<div className="vert-desc">Conectividad y sistemas para hospitales, centros de salud y redes sanitarias distribuidas.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Redes</span>
<span className="chip chip-d2">Infraestructura</span>
<span className="chip chip-d2">Gestionados</span>
</div>
</div>
</div>
<div className="vert-row">
<div className="vert-row-top">
<div className="vert-dot"></div>
<div>
<div className="vert-name">Smart Cities</div>
<div className="vert-desc">Tecnología que hace más eficiente lo público. Sensores, redes y datos al servicio del ciudadano.</div>
</div>
</div>
<div className="vert-tags">
<div className="chip-row">
<span className="chip-lbl">Servicios</span>
<span className="chip chip-d2">Automatización</span>
<span className="chip chip-d2">Redes</span>
<span className="chip chip-d2">Seguridad</span>
</div>
</div>
</div>
</div>
</div></div></section>
    </>
  );
};

export default Services;
