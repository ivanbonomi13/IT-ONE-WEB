
const Products = () => {
  return (
    <>
<section className="productos" id="productos">
<div className="eyebrow reveal">Productos</div>
<h2 className="sec-title reveal reveal-delay-1">Tecnología que integramos</h2>
<p className="sec-sub reveal reveal-delay-2">Dos productos de fabricación propia y fabricantes líderes seleccionados por su confiabilidad en entornos industriales y corporativos exigentes.</p>
{/* PRODUCTOS PROPIOS */}
<div className="prod-propios-wrap">
<div className="prod-propios">
<div className="prod-propio reveal">
<div className="prod-propio-badge">Fabricación propia</div>
<div className="prod-propio-name">TIM</div>
<div className="prod-propio-full">Torre Inteligente Móvil</div>
<div className="prod-propio-desc">Desplegable en el día sin obra civil ni excavaciones. Provee Internet de alta disponibilidad, WiFi en campo, Video IP y radiocomunicaciones desde el primer momento de operación. Diseñada para zonas remotas donde la infraestructura no llega antes que la operación.</div>
<div className="prod-propio-used">→ Aplicada en <a href="#caso-01">01 · El Quemado</a> · <a href="#caso-08">08 · Los Teros</a></div>
</div>
<div className="prod-propio reveal">
<div className="prod-propio-badge">Fabricación propia</div>
<div className="prod-propio-name">SAR-H</div>
<div className="prod-propio-full">Sistema de Accionamiento Remoto Hidráulico</div>
<div className="prod-propio-desc">Control automático y monitoreo remoto para válvulas de ¼ de giro en pozos petroleros. Modos temporizado y manual, apertura y cierre diferenciados para neutralizar golpe de ariete, telemetría 2G/3G/4G y energía solar autónoma — sin dependencia de red eléctrica.</div>
<div className="prod-propio-used">→ Aplicado en <a href="#caso-05">05 · Válvula</a></div>
</div>
</div>
</div>
{/* FABRICANTES */}
<div className="prod-fab-label reveal">Fabricantes que integramos</div>
<div className="prod-strip-marquee" style={{ 
  display: "flex", 
  overflow: "hidden", 
  position: "relative",
  width: "100%",
  marginTop: "1.5rem"
}}>
  <div style={{
    display: "flex",
    gap: "1.5rem",
    width: "max-content",
    animation: "marquee 40s linear infinite"
  }}>
    {/* First set */}
    {[1, 2].map((setIndex) => (
      <div key={setIndex} style={{ display: "flex", gap: "1.5rem" }}>
        <div className="prod">
          <div className="prod-name">Getac</div>
          <div className="prod-tag">Hardware ruggedizado</div>
          <div className="prod-desc">Computadoras y tablets certificadas para zonas clasificadas, extremos de temperatura y vibración continua.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Weidmüller</div>
          <div className="prod-tag">Automatización</div>
          <div className="prod-desc">Bornes, conectores, electrónica de señal y componentes para gabinetes de campo industrial.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Satelital LEO</div>
          <div className="prod-tag">Conectividad satelital</div>
          <div className="prod-desc">Conectividad de banda ancha vía satélite de órbita baja para sitios remotos.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Cisco</div>
          <div className="prod-tag">Networking</div>
          <div className="prod-desc">Infraestructura de red corporativa e industrial. Switching, routing y seguridad.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Fortinet</div>
          <div className="prod-tag">Firewall &amp; Seguridad</div>
          <div className="prod-desc">Firewalls, segmentación de redes y protección perimetral para entornos IT y OT.</div>
        </div>
        <div className="prod">
          <div className="prod-name">SonicWall</div>
          <div className="prod-tag">Firewall &amp; Seguridad</div>
          <div className="prod-desc">Firewall y seguridad perimetral para entornos corporativos. Protección avanzada.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Cambium</div>
          <div className="prod-tag">Radioenlaces</div>
          <div className="prod-desc">Radioenlaces punto a punto y multipunto para conectividad en zonas rurales, remotas e industriales.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Aruba</div>
          <div className="prod-tag">WiFi Corporativo</div>
          <div className="prod-desc">Conectividad inalámbrica empresarial e industrial. WiFi gestionado, seguro y escalable.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Hikvision</div>
          <div className="prod-tag">Video IP</div>
          <div className="prod-desc">Cámaras IP, grabación y analítica de video para instalaciones industriales y corporativas.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Ricoh</div>
          <div className="prod-tag">Gestión documental</div>
          <div className="prod-desc">Soluciones de impresión y gestión documental para entornos corporativos y administrativos.</div>
        </div>
        <div className="prod">
          <div className="prod-name">ABB</div>
          <div className="prod-tag">Automatización</div>
          <div className="prod-desc">Variadores de frecuencia, protecciones eléctricas y soluciones de potencia para la industria.</div>
        </div>
        <div className="prod">
          <div className="prod-name">Siemens</div>
          <div className="prod-tag">Control industrial</div>
          <div className="prod-desc">PLCs, HMI, sistemas SCADA y automatización industrial para procesos continuos y discretos.</div>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
    </>
  );
};

export default Products;
