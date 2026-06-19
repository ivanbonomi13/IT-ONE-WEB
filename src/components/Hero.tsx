
import { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const Hero = () => {
  return (
    <>
<section className="hero" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
<ParticlesBackground />
<div className="hero-left" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
<div className="badge">+21 años · +120 proyectos ejecutados</div>
<h1 className="hero-h" style={{ pointerEvents: 'auto' }}>
  <span className="thin">Un solo equipo.</span>
  De la <span className="accent">ingeniería</span> al activo en operación.
</h1>
<p className="hero-sub" style={{ pointerEvents: 'auto' }}>Industria, energía, corporativo y gobierno. Donde IT y OT se conectan, estamos nosotros.</p>
<div className="hero-acts" style={{ pointerEvents: 'auto' }}>
  <a className="btn-blue" href="#contacto">Conversemos sobre su proyecto →</a>
  <a className="btn-outline" href="#casos">Ver casos ejecutados</a>
</div>
<div className="hero-link-cta" style={{ pointerEvents: 'auto' }}>
  <a href="#nosotros">Ver el equipo de ingeniería →</a>
</div>
<div className="hero-stats">
<div className="stat"><div className="stat-n"><AnimatedCounter end={21} suffix="+" /></div><div className="stat-l">años de trayectoria</div></div>
<div className="stat"><div className="stat-n"><AnimatedCounter end={3} /></div><div className="stat-l">países propios</div></div>
<div className="stat"><div className="stat-n"><AnimatedCounter end={1} suffix="°" /></div><div className="stat-l">RIGI ejecutado</div></div>
<div className="stat"><div className="stat-n"><AnimatedCounter end={360} suffix="°" /></div><div className="stat-l">ingeniería a operación</div></div>
</div>
</div>
<div className="hero-right">
<div className="hero-bg-parallax"></div>
<div className="panel-lbl">Capacidades clave</div>
<div className="cap-list">
<div className="cap-item">
<div className="cap-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg></div>
<div className="cap-name">Ingeniería de Proyectos IT &amp; OT</div>
</div>
<div className="cap-item">
<div className="cap-icon"><svg viewBox="0 0 24 24"><path d="M4 9h16M4 15h16M10 3L8 21M14 3l-2 18"></path></svg></div>
<div className="cap-name">IT &amp; OT Bridge</div>
</div>
<div className="cap-item">
<div className="cap-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg></div>
<div className="cap-name">Conectividad de última milla</div>
</div>
<div className="cap-item">
<div className="cap-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
<div className="cap-name">Automatización &amp; Control</div>
</div>
<div className="cap-item">
<div className="cap-icon"><svg viewBox="0 0 24 24"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg></div>
<div className="cap-name">Servicios gestionados</div>
</div>
</div>
<div className="panel-geo">
<span className="geo-chip">Argentina</span>
<span className="geo-chip">Chile</span>
<span className="geo-chip">Paraguay</span>
</div>
</div>
</section>
    </>
  );
};

export default Hero;
