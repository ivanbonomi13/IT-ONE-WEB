import { useState, useMemo, useEffect } from 'react';

interface CaseStudy {
  id: string;
  num: string;
  category: 'Energía' | 'Automatización' | 'Telecomunicaciones' | 'Infraestructura & Gobierno';
  sector: string;
  title: string;
  desc: string;
  results: string[];
  tags: {
    d1: string[];
    d2: string[];
    d3: string[];
    d4?: string[];
  };
  client: string;
  similars?: string[];
}

const CASES_DATA: CaseStudy[] = [
  {
    id: 'caso-01',
    num: '01',
    category: 'Energía',
    sector: 'Energía Solar · Primer RIGI Nacional ★',
    title: 'El Quemado — Primer RIGI aprobado y desplegado en Argentina, Mendoza',
    desc: 'Solución llave en mano en entorno hostil de baja infraestructura. IT-ONE desplegó internet de alta disponibilidad, WiFi LAN con seguridad administrada y monitoreo, videovigilancia para el predio de Aduana, radioenlaces industriales y redes OT en campo, y monitoreo continuo de todos los servicios. El know-how aplicado proviene directamente de los relevamientos previos en Zonda y Loma Campana. Primera ejecución nacional bajo marco RIGI.',
    results: [
      'Llave en mano operativa en zona de infraestructura mínima',
      'Primera ejecución nacional bajo marco RIGI',
      'IT-ONE referente para proyectos RIGI en energía, minería y O&G'
    ],
    tags: {
      d1: ['Industrial', 'Energía · Solar'],
      d2: ['Ingeniería IT/OT', 'Última Milla', 'Redes', 'Seguridad', 'Gestionados'],
      d3: ['RIGI ★', 'Llave en Mano', 'Zona Remota', 'Operación Crítica'],
      d4: ['Starlink', 'TIM', 'SAR-H']
    },
    client: 'YPF Luz S.A.',
    similars: ['caso-02', 'caso-03', 'caso-08']
  },
  {
    id: 'caso-02',
    num: '02',
    category: 'Energía',
    sector: 'Energía Eólica · 2024',
    title: 'PECASA — Internet de Obra en 24hs',
    desc: 'YPF Luz necesitaba conectividad operativa inmediata en un sitio de obra que no contaba con infraestructura. IT-ONE relevó el sitio, diseñó la infraestructura y gestionó el servicio en el transcurso del día. Monitoreo continuo y coordinación directa con el responsable de obra durante toda la ejecución.',
    results: [
      'Conectividad operativa en tiempo récord',
      'Implementación sin infraestructura previa',
      'Monitoreo continuo durante toda la obra'
    ],
    tags: {
      d1: ['Industrial', 'Energía · Eólica'],
      d2: ['Última Milla', 'Redes', 'Gestionados'],
      d3: ['Despliegue Express', 'Sin Infraestructura Previa', 'Monitoreo 24/7'],
      d4: ['Starlink']
    },
    client: 'YPF Luz S.A.',
    similars: ['caso-03', 'caso-01', 'caso-08']
  },
  {
    id: 'caso-03',
    num: '03',
    category: 'Energía',
    sector: 'Energía Solar · 2021',
    title: 'Parque Solar Zonda — Relevamiento de conectividad en zona remota, San Juan',
    desc: 'En una zona extremadamente remota de San Juan, sin infraestructura de carrier disponible, YPF Luz necesitaba saber si era posible conectar el futuro Parque Solar Zonda — y cómo. IT-ONE pasó 7 días en el sitio, relevó el terreno y entregó un informe con tres alternativas comparadas, estimación de costos y cronograma. Ese informe fue el punto de partida de una relación de largo plazo: los proyectos El Quemado y PECASA son su consecuencia directa.',
    results: [
      'Factibilidad técnica documentada con tres alternativas comparadas',
      'Plazo de implementación establecido: 90 días máximo',
      'Antecedente directo para El Quemado y PECASA'
    ],
    tags: {
      d1: ['Industrial', 'Energía · Solar'],
      d2: ['Ingeniería IT/OT', 'Última Milla'],
      d3: ['Zona Remota', 'Sin Infraestructura Previa']
    },
    client: 'YPF Luz S.A.',
    similars: ['caso-02', 'caso-01']
  },
  {
    id: 'caso-04',
    num: '04',
    category: 'Automatización',
    sector: 'Automatización · Industria',
    title: 'Fresadora · Automatización y telemetría industrial en nube',
    desc: 'Una línea de montaje industrial necesitaba automatizar el cabezal de una fresadora con sistema hidráulico de avance y tener visibilidad remota del equipo en tiempo real. IT-ONE diseñó una solución a medida: automatización del proceso mecánico e integración de telemetría vía microprocesador conectado a Microsoft Azure, con visualización y control centralizado del equipo desde cualquier ubicación.',
    results: [
      'Automatización completa del cabezal hidráulico',
      'Telemetría en tiempo real integrada a Azure',
      'Control y visualización remota desde cualquier punto'
    ],
    tags: {
      d1: ['Industrial', 'Plantas de Producción'],
      d2: ['Automatización', 'IT/OT Bridge'],
      d3: ['IIoT', 'Telemetría', 'Convergencia IT/OT', 'Confidencial'],
      d4: ['Microsoft Azure']
    },
    client: 'Confidencial',
    similars: ['caso-07']
  },
  {
    id: 'caso-05',
    num: '05',
    category: 'Automatización',
    sector: 'Automatización · Oil & Gas',
    title: 'Válvula de ramal · Actuador automático con energía solar y telemetría',
    desc: 'Una empresa petrolera necesitaba automatizar una válvula de cuarto de giro en un ramal principal, en una locación sin acceso a red eléctrica. IT-ONE desarrolló una solución integral: control del sistema hidráulico del actuador con modos de operación temporizado y manual, apertura y cierre diferenciados para neutralizar el efecto golpe de ariete, telemetría remota vía red móvil y un sistema de energía solar para alimentar de forma autónoma el circuito de control y el actuador hidráulico.',
    results: [
      'Operación automatizada sin dependencia de red eléctrica',
      'Telemetría remota operativa vía red móvil',
      'Protección contra golpe de ariete implementada en control'
    ],
    tags: {
      d1: ['Industrial', 'Oil & Gas'],
      d2: ['Automatización', 'IT/OT Bridge'],
      d3: ['Telemetría', 'Energía Autónoma', 'Zona Remota', 'Confidencial']
    },
    client: 'Confidencial',
    similars: ['caso-07']
  },
  {
    id: 'caso-06',
    num: '06',
    category: 'Automatización',
    sector: 'Automatización · Minería',
    title: 'Molino de bolas · Sistema de control neumático y eléctrico',
    desc: 'Diseño e implementación del sistema de control completo para un molino de bolas industrial. IT-ONE ejecutó el control neumático y eléctrico del equipo integrando los sistemas de seguridad requeridos para la operación continua y segura del proceso. La solución garantiza la coordinación de los subsistemas de potencia y mando bajo una arquitectura de control unificada.',
    results: [
      'Control neumático y eléctrico bajo arquitectura unificada',
      'Sistemas de seguridad incorporados al proceso de control',
      'Operación continua y segura en entorno minero'
    ],
    tags: {
      d1: ['Industrial', 'Minería'],
      d2: ['Automatización', 'Seguridad'],
      d3: ['Seguridad Industrial', 'Operación Crítica', 'Confidencial']
    },
    client: 'Confidencial',
    similars: ['caso-09']
  },
  {
    id: 'caso-07',
    num: '07',
    category: 'Automatización',
    sector: 'Automatización · Industria',
    title: 'Laminadora · Control de carro de transporte para bobinas de acero',
    desc: 'Una planta laminadora necesitaba automatizar el carro de transporte de bobinas de acero, un proceso que exige precisión milimétrica en la alineación en dos ejes para la carga correcta en el mandril. IT-ONE diseñó el sistema de control completo: posicionamiento automatizado con modo manual para operarios, control eléctrico e hidráulico de potencia, y un sistema de seguridad con barreras láser a lo largo de todo el recorrido del carro y barrera física en la zona de carga.',
    results: [
      'Posicionamiento de bobinas con alineación en dos ejes',
      'Seguridad perimetral con barreras láser en toda la trayectoria',
      'Control integrado eléctrico e hidráulico bajo un único sistema'
    ],
    tags: {
      d1: ['Industrial', 'Plantas de Producción'],
      d2: ['Automatización', 'Seguridad'],
      d3: ['Seguridad Industrial', 'Operación Crítica', 'Confidencial']
    },
    client: 'Confidencial',
    similars: ['caso-04']
  },
  {
    id: 'caso-08',
    num: '08',
    category: 'Telecomunicaciones',
    sector: 'Energía Eólica · Buenos Aires',
    title: 'Torre Inteligente Móvil para cobertura de radiocomunicaciones en parque eólico',
    desc: 'El Parque Eólico Los Teros requería un sistema de comunicaciones capaz de adaptarse a la geografía con zonas oscuras en la señal, para cubrir los distintos frentes remotos de trabajo con cumplimiento de H&S. IT-ONE diseñó, construyó y puso en servicio la T.I.M. (Torre Inteligente Móvil) de fabricación propia, proveyendo radiocomunicaciones, Video IP y WiFi en campo desde el primer día.',
    results: [
      'Cobertura de radiocomunicaciones en zonas oscuras sin infraestructura previa',
      'Despliegue en el día sin obra civil ni excavaciones',
      'Cumplimiento de requisitos H&S para todos los frentes de trabajo'
    ],
    tags: {
      d1: ['Industrial', 'Energía · Eólica'],
      d2: ['Radiocomunicaciones', 'Última Milla'],
      d3: ['Despliegue Express', 'Sin Infraestructura Previa', 'H&S'],
      d4: ['TIM']
    },
    client: 'General Electric / YPF Energía Eléctrica',
    similars: ['caso-02', 'caso-01']
  },
  {
    id: 'caso-09',
    num: '09',
    category: 'Telecomunicaciones',
    sector: 'Minería · Mendoza',
    title: '700 puestos de trabajo, 3 data centers y backbone de fibra para proyecto minero de gran escala',
    desc: 'El proyecto de potasio de VALE en Río Colorado requería una infraestructura tecnológica completa para 700 puestos de trabajo en zona remota. IT-ONE implementó cableado Cat 6, backbone de fibra óptica con backup Cat 6A, tres data centers con detección y extinción de incendio, control de accesos, telefonía IP para 700 internos y switching completo.',
    results: [
      '700 puestos de trabajo conectados en zona remota sin infraestructura previa',
      '3 data centers operativos con sistemas de seguridad física integrados',
      'Infraestructura de telecomunicaciones completa bajo un único interlocutor técnico'
    ],
    tags: {
      d1: ['Industrial', 'Minería'],
      d2: ['Infraestructura', 'Redes', 'Seguridad', 'Gestionados'],
      d3: ['Zona Remota', 'Sin Infraestructura Previa', 'Gran Escala'],
      d4: ['Cat 6A', 'Fibra Óptica']
    },
    client: 'VALE S.A.',
    similars: ['caso-06']
  },
  {
    id: 'caso-10',
    num: '10',
    category: 'Energía',
    sector: 'Energía · Buenos Aires',
    title: 'Control de variación de velocidad de motores diesel para sistema de incendio en central termoeléctrica',
    desc: 'La Central Termoeléctrica Costanera necesitaba un sistema de control para sus motores diesel Cummins — dos grupos electrógenos y tres bombas de incendio — con encendido remoto y sincronización de cargas. IT-ONE ejecutó el proyecto llave en mano: ingeniería, instalación mecánica y eléctrica, calibración, sincronización de grupos y documentación completa.',
    results: [
      'Sistema de incendio con encendido remoto y control de velocidad integrado',
      'Sincronización de 5 motores diesel para balance de carga',
      'Entrega llave en mano con documentación de ingeniería completa'
    ],
    tags: {
      d1: ['Industrial', 'Energía · Termoeléctrica'],
      d2: ['Automatización', 'Ingeniería IT/OT'],
      d3: ['Llave en Mano', 'Operación Crítica'],
      d4: ['Cummins']
    },
    client: 'Central Costanera',
    similars: ['caso-01']
  },
  {
    id: 'caso-11',
    num: '11',
    category: 'Infraestructura & Gobierno',
    sector: 'Gobierno · Ecuador',
    title: 'Infraestructura tecnológica crítica para más de 7 millones de usuarios',
    desc: 'El IESS necesitaba una infraestructura robusta y escalable para soportar la demanda de más de 7 millones de usuarios con alta disponibilidad. IT-ONE diseñó e implementó la solución integral con hardware y software para grandes volúmenes de datos y transacciones simultáneas, y monitoreo 24/7 para garantizar la continuidad del servicio.',
    results: [
      'Infraestructura operativa para más de 7 millones de usuarios',
      'Reducción de tiempos de respuesta y ahorro de costos del 35%',
      'Operaciones ininterrumpidas con confiabilidad mejorada en servicios críticos'
    ],
    tags: {
      d1: ['Gobierno', 'Salud Pública'],
      d2: ['Infraestructura Crítica', 'Gestionados'],
      d3: ['Alta Disponibilidad', 'Gran Escala', 'Monitoreo 24/7']
    },
    client: 'IESS — Instituto Ecuatoriano de Seguridad Social',
    similars: ['caso-12']
  },
  {
    id: 'caso-12',
    num: '12',
    category: 'Infraestructura & Gobierno',
    sector: 'Gobierno · Estados Unidos',
    title: 'Clústeres de bases de datos con recuperación ante desastres para autoridad vial de Rhode Island',
    desc: 'RITBA necesitaba garantizar alta disponibilidad y recuperación ante desastres para sus sistemas críticos en SQL Server y PostgreSQL. IT-ONE diseñó e implementó clústeres con replicación y failover automático, creó un sitio DRS completamente funcional y optimizó el rendimiento con monitoreo proactivo.',
    results: [
      'Reducción del downtime operativo en un 90%',
      'Recuperación integral garantizada en menos de 15 minutos',
      'Recuperación completa de operatividad en 2 horas ante eventos de desastre'
    ],
    tags: {
      d1: ['Gobierno'],
      d2: ['Infraestructura Crítica', 'Alta Disponibilidad'],
      d3: ['Disaster Recovery', 'Alta Disponibilidad'],
      d4: ['SQL Server', 'PostgreSQL']
    },
    client: 'RITBA — Rhode Island Turnpike and Bridge Authority',
    similars: ['caso-11']
  }
];

const CATEGORIES = ['Todos', 'Energía', 'Automatización', 'Telecomunicaciones', 'Infraestructura & Gobierno'] as const;

const Evidence = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [visibleCount, setVisibleCount] = useState<number>(4);

  // Local observer for scroll reveal animations on dynamic cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    // Query both active case study cards and timeline rows that might mount dynamically
    const revealElements = document.querySelectorAll('#evidencia .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory, visibleCount]);

  // Filter cases based on selected category
  const filteredCases = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return CASES_DATA;
    }
    return CASES_DATA.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const displayedCases = useMemo(() => {
    return filteredCases.slice(0, visibleCount);
  }, [filteredCases, visibleCount]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(4); // Reset pagination on category change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <section className="evidencia" id="evidencia">
        {/* Sub-anchor de compatibilidad */}
        <div id="casos" style={{ position: "absolute", top: "-80px" }}></div>
        <div className="eyebrow reveal">Evidencia</div>
        <h2 className="sec-title reveal reveal-delay-1">Proyectos que hablan por nosotros</h2>
        <p className="sec-sub reveal reveal-delay-2">
          Soluciones ejecutadas en campo, con resultados medibles. Cada proyecto es la prueba de lo que podemos hacer en el tuyo.
        </p>

        {/* Leyenda del sistema de tags */}
        <div className="tag-legend reveal reveal-delay-3" style={{ marginBottom: '2rem' }}>
          <span className="tag-legend-title">Cómo leer cada caso:</span>
          <div className="tag-legend-item"><span className="chip chip-d1">Vertical</span></div>
          <div className="tag-legend-item"><span className="chip chip-d2">Servicio</span></div>
          <div className="tag-legend-item"><span className="chip chip-d3">Atributo</span></div>
          <div className="tag-legend-item"><span className="chip chip-d4">Tecnología</span></div>
          <div className="tag-legend-item"><span className="chip chip-rigi">★ Destacado</span></div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="cases-filter-container reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat === 'Todos' ? 'Ver Todos' : cat} ({CASES_DATA.filter(c => cat === 'Todos' || c.category === cat).length})
            </button>
          ))}
        </div>

        <div className="casos-confidential-note reveal">
          Algunos casos identifican al cliente como confidencial por solicitud expresa del mismo. IT-ONE puede facilitar referencias verificables bajo acuerdo de confidencialidad.
        </div>

        {/* CASES GRID */}
        <div className="casos-grid">
          {displayedCases.map((c) => (
            <div className="caso reveal" id={c.id} key={c.id}>
              <div className="caso-head">
                <div className="caso-sector">{c.sector}</div>
                <div className="caso-num">// {c.num}</div>
              </div>
              <h3 className="caso-title">{c.title}</h3>
              <p className="caso-desc">{c.desc}</p>
              
              <div className="caso-results">
                {c.results.map((res, i) => (
                  <div className="caso-result" key={i}>✔ {res}</div>
                ))}
              </div>

              <div className="caso-tags-block">
                <div className="chip-row">
                  <span className="chip-lbl">D1</span>
                  {c.tags.d1.map((tag, i) => (
                    <span className="chip chip-d1" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="chip-row">
                  <span className="chip-lbl">D2</span>
                  {c.tags.d2.map((tag, i) => (
                    <span className="chip chip-d2" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="chip-row">
                  <span className="chip-lbl">D3</span>
                  {c.tags.d3.map((tag, i) => (
                    <span className={`chip ${tag.includes('★') || tag.includes('RIGI') ? 'chip-rigi' : 'chip-d3'}`} key={i}>{tag}</span>
                  ))}
                </div>
                {c.tags.d4 && c.tags.d4.length > 0 && (
                  <div className="chip-row">
                    <span className="chip-lbl">D4</span>
                    {c.tags.d4.map((tag, i) => (
                      <span className="chip chip-d4" key={i}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="caso-client">Cliente: <b>{c.client}</b></div>
              
              {c.client === 'Confidencial' && (
                <div className="caso-nda">Referencias de proyectos y solvencia técnica disponibles bajo acuerdo de confidencialidad (NDA).</div>
              )}

              <div className="caso-nav-ctas">
                {c.similars && c.similars.length > 0 && (
                  <>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--tx-dim)" }}>Ver similares:</span>
                    {c.similars.map((simId, i) => {
                      const simNum = simId.replace('caso-', '');
                      return (
                        <span key={simId}>
                          {i > 0 && ' · '}
                          <a className="caso-nav-sim" href={`#${simId}`}>{simNum}</a>
                        </span>
                      );
                    })}
                    <span className="caso-nav-sep">·</span>
                  </>
                )}
                <a className="caso-nav-consult" href="#contacto">Consultar proyecto similar →</a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION / LOAD MORE */}
        {filteredCases.length > visibleCount && (
          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <button className="btn-outline" onClick={handleLoadMore}>
              Cargar más casos ({filteredCases.length - visibleCount} restantes) ↓
            </button>
          </div>
        )}

        {/* BISAGRA 1: Casos → Otros proyectos */}
        <div className="evidencia-bisagra reveal">
          <p className="evidencia-bisagra-text">Más allá de los doce casos detallados, otras 28 ejecuciones componen la trayectoria.</p>
        </div>

        {/* OTROS PROYECTOS EJECUTADOS */}
        <div className="otros-proyectos otros-densa" id="proyectos">
          <div className="otros-densa-eyebrow">Volumen ejecutado</div>
          <p className="otros-densa-intro">
            Referencias adicionales de proyectos completados. Cada uno responde a una necesidad real, ejecutado con el mismo estándar de ingeniería.
          </p>
          <div className="otros-grid">
            <div>
              <div className="otros-grupo-lbl reveal"><span className="chip chip-d1">Energía · Termoeléctricas</span></div>
              <div className="otros-lista">
                <div className="otro-item reveal">Central Termoeléctrica Barker <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Central Termoeléctrica General Rojo <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Dock Sud <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Puerto <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Loma Campana Este <span className="otro-loc">NQN</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Manuel Belgrano <span className="otro-loc">Campana</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Plaza Huincul <span className="otro-loc">NQN</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Villa María <span className="otro-loc">Córdoba</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Vuelta de Obligado <span className="otro-loc">Santa Fe</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Luján <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Central Termoeléctrica Matheu <span className="otro-loc">BA</span></div>
              </div>
            </div>
            <div>
              <div className="otros-grupo-lbl reveal"><span className="chip chip-d1">Energía · Eólica</span></div>
              <div className="otros-lista">
                <div className="otro-item reveal">Parque Eólico Gral. Levalle <span className="otro-loc">Córdoba</span></div>
                <div className="otro-item reveal">Parque Eólico Los Teros II <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Parque Eólico Manantiales Behr <span className="otro-loc">Chubut</span></div>
              </div>
              <div className="otros-grupo-lbl reveal" style={{ marginTop: "2rem" }}><span className="chip chip-d1">Gobierno &amp; Infraestructura</span></div>
              <div className="otros-lista">
                <div className="otro-item reveal">Centro Cívico Provincia de San Juan <span className="otro-loc">San Juan</span></div>
                <div className="otro-item reveal">Proyecto Soterramiento Tren Sarmiento <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Renovación Belgrano Cargas Ramal C8 <span className="otro-loc">Tucumán</span></div>
                <div className="otro-item reveal">Renovación Belgrano Cargas Ramal C8 <span className="otro-loc">Salta</span></div>
              </div>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <div className="otros-grupo-lbl reveal"><span className="chip chip-d1">Industrial &amp; Corporativo</span></div>
              <div className="otros-lista" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0 3rem" }}>
                <div className="otro-item reveal">Planta ALUAR <span className="otro-loc">Puerto Madryn · Chubut</span></div>
                <div className="otro-item reveal">Planta Productiva Grupo Timbo <span className="otro-loc">La Pampa</span></div>
                <div className="otro-item reveal">Planta YPF <span className="otro-loc">Ensenada · BA</span></div>
                <div className="otro-item reveal">Planta Water Tech Veolia <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Wärtsilä <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Duro Felguera <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">Oficinas ACTC <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Grupo Timbo <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas AYSA <span className="otro-loc">Escobar</span></div>
                <div className="otro-item reveal">Oficinas Distecna SA <span className="otro-loc">Paraguay</span></div>
                <div className="otro-item reveal">Oficinas Proyecto CCR YPF <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Oficinas Emergencias Médicas <span className="otro-loc">BA</span></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a className="btn-blue" href="#contacto" style={{ fontSize: "11px", padding: "12px 28px", display: "inline-block" }}>Hablemos →</a>
        </div>
      </section>
    </>
  );
};

export default Evidence;
