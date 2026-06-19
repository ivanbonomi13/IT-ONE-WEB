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
}const CASES_DATA: CaseStudy[] = [
  {
    id: 'caso-01',
    num: '01',
    category: 'Energía',
    sector: 'Energía Solar · RIGI ★',
    title: 'Parque Solar El Quemado — Mendoza',
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
    similars: ['caso-02', 'caso-10', 'caso-09']
  },
  {
    id: 'caso-02',
    num: '02',
    category: 'Energía',
    sector: 'Energía Solar',
    title: 'Parque Solar Zonda — San Juan',
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
    similars: ['caso-10', 'caso-01']
  },
  {
    id: 'caso-03',
    num: '03',
    category: 'Energía',
    sector: 'Energía · Termoeléctrica',
    title: 'Central Termoeléctrica El Bracho – Tucumán',
    desc: 'Ingeniería, diseño, construcción, ejecución y operación de la infraestructura tecnológica completa del Complejo Generación Tucumán de YPF Energía Eléctrica, proyecto conjunto YPF–GE de 261 MW e inversión de US$ 170 millones. En etapas de construcción (fases I y II): servicio de última milla de conectividad al sitio. En puesta en marcha: datacenter, red de cableado estructurado, networking, WiFi en oficinas y frentes remotos, videovigilancia IP con guarda y auditoría, control de accesos y backbones de FO con radioenlaces a los sitios del predio.',
    results: [
      'Infraestructura IT completa operativa para uno de los polos de generación eléctrica más importantes del NOA'
    ],
    tags: {
      d1: ['Industrial', 'Energía', 'Termoeléctrica'],
      d2: ['Infraestructura', 'Redes', 'Datacenter', 'Última Milla', 'Seguridad', 'Conectividad', 'Servicios gestionados'],
      d3: ['Llave en mano', 'Gran Escala', 'Dos etapas'],
      d4: ['Fibra óptica', 'Radioenlaces', 'WiFi', 'Video IP', 'Control de accesos']
    },
    client: 'YPF Luz / General Electric',
    similars: ['caso-04', 'caso-05']
  },
  {
    id: 'caso-04',
    num: '04',
    category: 'Energía',
    sector: 'Energía · Termoeléctrica',
    title: 'Central Termoeléctrica Manantiales Behr – Chubut',
    desc: 'Instalación del sistema de videovigilancia.',
    results: [
      'Sistema de videovigilancia operativo'
    ],
    tags: {
      d1: ['Industrial', 'Energía', 'Termoeléctrica'],
      d2: ['Seguridad'],
      d3: []
    },
    client: 'YPF Luz S.A.',
    similars: ['caso-03', 'caso-05']
  },
  {
    id: 'caso-05',
    num: '05',
    category: 'Automatización',
    sector: 'Energía · Termoeléctrica',
    title: 'Tablero Variación Velocidad Sistema de Motores Diesel – Costanera, Bs. As.',
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
    id: 'caso-06',
    num: '06',
    category: 'Telecomunicaciones',
    sector: 'Energía · Oil & Gas',
    title: 'Sistema de Video IP para Supervisión de Obra – Complejo Industrial Ensenada, Bs. As.',
    desc: 'Ingeniería, diseño, provisión, montaje, ejecución y operación del sistema de video IP para la supervisión de las tareas de construcción en el Complejo Industrial Ensenada – YPF Química, uno de los complejos petroquímicos más importantes de Argentina, productor de 950.000 toneladas anuales de productos petroquímicos. El sistema consiste en un domo PTZ 35x con radioenlace, montados a 70 metros de altura, más el equipamiento completo de monitoreo, almacenamiento y auditoría de imágenes para la dirección de obra.',
    results: [
      'Sistema de videovigilancia IP operativo para supervisión remota en tiempo real del avance de construcción, con trazabilidad completa de imágenes'
    ],
    tags: {
      d1: ['Industrial', 'Energía', 'Oil & Gas'],
      d2: ['Seguridad', 'Conectividad', 'Servicios gestionados'],
      d3: ['Altura extrema', 'Monitoreo remoto', 'Llave en mano'],
      d4: ['Domo PTZ 35x', 'Radioenlace']
    },
    client: 'YPF Química',
    similars: ['caso-07', 'caso-08']
  },
  {
    id: 'caso-07',
    num: '07',
    category: 'Telecomunicaciones',
    sector: 'Energía · Oil & Gas',
    title: 'Yacimiento Cerro Dragón – Chubut',
    desc: 'Diseño y ejecución del sistema de conectividad y red de datos para el equipo de mantenimiento mecánico durante parada de planta. 40 mecánicos conectados en 2 meses.',
    results: [
      'Conectividad operativa para 40 personas en plazo crítico de parada de planta'
    ],
    tags: {
      d1: ['Industrial', 'Oil & Gas'],
      d2: ['Redes', 'Conectividad'],
      d3: ['Plazo Crítico', 'Parada de Planta']
    },
    client: 'Pan American Energy',
    similars: ['caso-06', 'caso-08']
  },
  {
    id: 'caso-08',
    num: '08',
    category: 'Automatización',
    sector: 'Energía · Oil & Gas',
    title: 'SAR-H: Sistema Actuador Remoto Hidráulico para Válvulas ¼ giro · Neuquén',
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
    similars: ['caso-06', 'caso-07']
  },
  {
    id: 'caso-09',
    num: '09',
    category: 'Telecomunicaciones',
    sector: 'Energía Eólica · Buenos Aires',
    title: 'Parque Eólico Los Teros I – Azul, Bs. As.',
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
    client: 'General Electric / YPF Luz',
    similars: ['caso-10', 'caso-01']
  },
  {
    id: 'caso-10',
    num: '10',
    category: 'Telecomunicaciones',
    sector: 'Energía Eólica',
    title: 'Parque Eólico Cementos Avellaneda – Olavarría, Bs. As.',
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
    similars: ['caso-02', 'caso-01', 'caso-09']
  },
  {
    id: 'caso-11',
    num: '11',
    category: 'Telecomunicaciones',
    sector: 'Minería · Mendoza',
    title: 'VALE Potasio Río Colorado – Mendoza',
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
    similars: ['caso-14', 'caso-15']
  },
  {
    id: 'caso-12',
    num: '12',
    category: 'Infraestructura & Gobierno',
    sector: 'Corporativo · CABA',
    title: 'Sede ACTC "Edificio Juan Gálvez" – Caballito, CABA',
    desc: 'Diseño, ingeniería, ejecución y montaje de la infraestructura tecnológica completa de la nueva sede de la Asociación Corredores Turismo Carretera, la institución que organiza el campeonato de automovilismo más popular de Argentina. IT-ONE ejecutó el datacenter, la red de cableado estructurado, el networking, el sistema de videovigilancia IP, el sistema de control de accesos, el sistema de música ambiente y los backbones de fibra óptica con vinculación entre sedes.',
    results: [
      'Infraestructura tecnológica integral operativa para la sede institucional de referencia del automovilismo nacional argentino'
    ],
    tags: {
      d1: ['Corporativo'],
      d2: ['Infraestructura', 'Redes', 'Datacenter', 'Seguridad', 'Cableado estructurado'],
      d3: ['Llave en mano', 'Integración de sistemas'],
      d4: ['Fibra óptica', 'Control de accesos', 'Video IP']
    },
    client: 'Asociación Corredores Turismo Carretera',
    similars: ['caso-13', 'caso-15']
  },
  {
    id: 'caso-13',
    num: '13',
    category: 'Automatización',
    sector: 'Corporativo · Río Negro',
    title: 'Desarrollo app integración Sistema Control de Accesos a Sistema Centro de Costos – Allen, Río Negro',
    desc: 'Integración de sistema de control de accesos de personal, visitas y vehículos con lectura de DNIs y patentes, vinculado a las bases de datos corporativas del cliente. 3 lectores de DNI, 2 lectores de patentes, 2 plataformas y 5 bases de datos integradas en 1 mes.',
    results: [
      'Sistema unificado de accesos conectado a las bases de datos corporativas del cliente'
    ],
    tags: {
      d1: ['Corporativo'],
      d2: ['Seguridad', 'Integración de sistemas'],
      d3: ['Integración de plataformas'],
      d4: ['Control de accesos', 'Lectura DNI', 'Lectura de patentes']
    },
    client: 'Confidencial',
    similars: ['caso-12', 'caso-08']
  },
  {
    id: 'caso-14',
    num: '14',
    category: 'Infraestructura & Gobierno',
    sector: 'Gobierno · San Juan',
    title: 'Centro Cívico de San Juan – San Juan Capital',
    desc: 'Diseño y ejecución de la infraestructura tecnológica del principal complejo de administración pública de la Provincia de San Juan, en rol de subcontratista de la constructora principal. IT-ONE ejecutó la red de cableado estructurado, el datacenter central y las 18 salas de cableado distribuidas en el edificio. El complejo concentra 4 ministerios provinciales y opera con una circulación de aproximadamente 10.000 personas diarias. Proyectado en 1971 e inaugurado en 2009, fue sede de la Cumbre del Mercosur de 2010.',
    results: [
      'Infraestructura de red y datacenter operativos para el edificio de administración pública más relevante de la Provincia de San Juan'
    ],
    tags: {
      d1: ['Gobierno'],
      d2: ['Infraestructura', 'Redes', 'Datacenter', 'Cableado estructurado'],
      d3: ['Gran Escala', 'Edificio Crítico']
    },
    client: 'Gobierno de la Provincia de San Juan',
    similars: ['caso-11', 'caso-15']
  },
  {
    id: 'caso-15',
    num: '15',
    category: 'Infraestructura & Gobierno',
    sector: 'Gobierno · Bs. As.',
    title: 'Unidad Penitenciaria N° 47 – San Martín, Bs. As.',
    desc: 'Ingeniería, diseño y ejecución de la infraestructura tecnológica y de seguridad completa de la Unidad Penitenciaria N° 47 del Servicio Penitenciario Bonaerense. IT-ONE ejecutó el datacenter, la red de cableado estructurado, la red de telefonía, el networking, la central telefónica, el sistema de alarmas perimetral, el sistema de sirenas perimetral y el sistema de videovigilancia IP con guarda y auditoría de imágenes.',
    results: [
      'Infraestructura tecnológica y de seguridad perimetral integral operativa para una unidad penitenciaria de alta exigencia operativa'
    ],
    tags: {
      d1: ['Gobierno'],
      d2: ['Infraestructura', 'Redes', 'Datacenter', 'Seguridad', 'Telefonía'],
      d3: ['Llave en mano', 'Entorno crítico', 'Integración de sistemas'],
      d4: ['Video IP', 'Alarmas perimetral', 'Central telefónica', 'Fibra óptica']
    },
    client: 'Servicio Penitenciario Bonaerense',
    similars: ['caso-14', 'caso-11']
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
              </div>
            </div>
            <div>
              <div className="otros-grupo-lbl reveal"><span className="chip chip-d1">Minería</span></div>
              <div className="otros-lista">
                <div className="otro-item reveal">Xstrata Copper – Minera Alumbrera <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">McEwen Copper – Los Azules <span className="otro-loc">San Juan</span></div>
              </div>
            </div>
            <div>
              <div className="otros-grupo-lbl reveal"><span className="chip chip-d1">Gobierno &amp; Infraestructura</span></div>
              <div className="otros-lista">
                <div className="otro-item reveal">Proyecto Soterramiento Tren Sarmiento <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Renovación Belgrano Cargas Ramal C8 <span className="otro-loc">Tucumán</span></div>
                <div className="otro-item reveal">Renovación Belgrano Cargas Ramal C8 <span className="otro-loc">Salta</span></div>
                <div className="otro-item reveal">Alcaldía Santa Catalina <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Fuero de Menores San Justo <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Plaza de la Memoria <span className="otro-loc">CABA</span></div>
              </div>
            </div>
            <div>
              <div className="otros-grupo-lbl reveal"><span className="chip chip-d1">Industrial &amp; Corporativo</span></div>
              <div className="otros-lista">
                <div className="otro-item reveal">Planta ALUAR <span className="otro-loc">Puerto Madryn · Chubut</span></div>
                <div className="otro-item reveal">Planta Productiva Grupo Timbo <span className="otro-loc">La Pampa</span></div>
                <div className="otro-item reveal">Planta Potabilizadora Ing. Maschwitz <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Centro Logística JBS Pilarica <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Hospital Garrahan <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Grupo Timbo <span className="otro-loc">BA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Wärtsilä <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Duro Felguera <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas AYSA <span className="otro-loc">Escobar</span></div>
                <div className="otro-item reveal">Oficinas Distecna SA <span className="otro-loc">Paraguay</span></div>
                <div className="otro-item reveal">Oficinas Emergencias Médicas <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Greenpeace Argentina <span className="otro-loc">CABA</span></div>
                <div className="otro-item reveal">Oficinas Corporativas Greenpeace Chile <span className="otro-loc">CABA</span></div>
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
