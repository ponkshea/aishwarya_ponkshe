
// Company logo badge
const CompanyBadge = ({ company, dark }) => {
  const logos = {
    'Cummins Inc.': { text: 'CUMMINS', bg: '#1D2D5B', color: '#fff', fontSize: '8px' },
    'Purdue University': { text: 'PURDUE', bg: '#CFB991', color: '#1A1A1A', fontSize: '8px' },
    'Savitribai Phule Pune University': { text: 'SPPU', bg: '#800020', color: '#fff', fontSize: '9px' },
    'IISER Pune': { text: 'IISER', bg: '#00539B', color: '#fff', fontSize: '9px' },
    'Girls Inc – STEM Outreach': { text: 'GirlsInc', bg: '#E05A8A', color: '#fff', fontSize: '7px' },
    'Society of Women Engineers': { text: 'SWE', bg: '#C41230', color: '#fff', fontSize: '9px' },
    'Cummins Culture Champion': { text: 'CUMMINS', bg: '#1D2D5B', color: '#fff', fontSize: '8px' },
    'National Service Scheme': { text: 'NSS', bg: '#2E7D32', color: '#fff', fontSize: '9px' },
  };
  const l = logos[company];
  if (!l) return null;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: l.bg, color: l.color,
      borderRadius: '6px', padding: '3px 7px',
      fontFamily: "'DM Sans', sans-serif", fontSize: l.fontSize,
      fontWeight: 800, letterSpacing: '0.06em',
      flexShrink: 0, height: '28px',
    }}>{l.text}</div>
  );
};

const Experience = ({ dark, accent }) => {
  const [expanded, setExpanded] = React.useState(null);
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };

  const c = {
    bg:     dark ? '#0E0E12' : '#FAFAF7',
    bgAlt:  dark ? '#17171D' : '#F0EFEA',
    text:   dark ? '#E8EAE0' : '#1A1A14',
    muted:  dark ? '#888892' : '#74746C',
    green:  dark ? a.greenLight : a.green,
    border: dark ? '#2A2A33' : '#E4E2DB',
    card:   dark ? '#15151B' : '#fff',
    tag:    dark ? '#20202A' : '#ECEAE2',
    tagTxt: dark ? a.greenLight : '#54524B',
    line:   dark ? '#2A2A33' : '#E0DED6',
  };

  const typeLabel = { experience: 'Experience', education: 'Education', research: 'Research', opportunity: 'Open to Work' };
  const typeDot   = { experience: a.green, education: '#A8814A', research: '#3E9E96', opportunity: '#fff' };
  const typeBadge = (type, isOpp) => ({
    experience: { bg: c.tag, color: c.tagTxt },
    education:  { bg: dark ? '#221C12' : '#F0EBDE', color: dark ? '#A8814A' : '#8A6A38' },
    research:   { bg: dark ? '#0C1A18' : '#D8EAE6', color: dark ? '#3E9E96' : '#1E6E66' },
    opportunity:{ bg: 'rgba(255,255,255,0.22)', color: '#fff' },
  }[type]);

  const mainTimeline = [
    {
      id: 'open', type: 'opportunity', icon: 'star',
      title: 'Open to New Opportunities',
      subtitle: 'Product Manager · Automotive Engineer',
      period: 'Now · 2026', location: 'United States / Global',
      description: 'Actively seeking roles at the intersection of automotive engineering and product management. 6+ years at Cummins across calibration, product engineering, and systems simulation — now bringing that depth into product leadership.',
      highlights: ['Product Manager', 'Technical PM', 'Automotive / Mobility', 'EV & Emissions Products', 'United States · Global'],
    },
    {
      id: 'exp1', type: 'experience', icon: 'briefcase',
      title: 'System Performance Senior Engineer',
      company: 'Cummins Inc.',
      period: 'Aug 2023 – Jan 2026 · 2 yrs 6 mos', location: 'Greater Indianapolis, IN',
      description: 'Developed engine calibration maps for high altitude (12,000 ft, 60°F) and cold ambient (−40°F) operation across 4 Cummins CARB/EPA 2027 and LATAM 2025 programs by aligning product performance with regulatory and customer requirements.',
      highlights: [
        'Led customer-focused calibration tuning across RMCSET steady state test — delivered 3% improved fuel economy over legacy methodology, saving $160k annually for a 100-truck fleet',
        'Formulated off-nominal calibration best practice collaborating with simulation, regulatory, and product teams — accelerated test cell schedule by 1 week & saved ~$240k in personnel and facility costs',
        'Built data-driven tools in MATLAB + Excel to generate tuning tables across sea-level, mid & high-altitude for Base, SCR Thermal Management and De-Soot modes',
        'Analyzed 500+ time-series datasets and regulatory trend inputs to diagnose field performance and provide interim solutions',
        'Improved process reliability by 30% for engine friction characterization by redesigning cold motoring (−40°F – 0°F) sequence across 20+ automated tests to prevent low-pressure thermal events',
      ],
    },
    {
      id: 'edu1', type: 'education', icon: 'grad',
      title: 'M.S. Mechanical Engineering',
      company: 'Purdue University',
      period: 'Aug 2021 – Aug 2023', location: 'West Lafayette, IN',
      description: 'Graduate studies in mechanical engineering with specialization in Thermal Controls Engineering and Hybrid Vehicle Systems. Research focused on simulation-based product development in high horsepower diesel engines.',
      highlights: [
        'Specialization: Thermal Controls Engineering · Hybrid Vehicle Systems',
        'Research: Simulation-based product development in high horsepower diesel engines',
        'Teaching Assistant: ME 440 Automotive Prime Movers — coached 70+ students',
        'ASEE publications on engineering education and STEM outreach curriculum',
      ],
    },
    {
      id: 'exp2', type: 'experience', icon: 'briefcase',
      title: 'Product Engineer',
      company: 'Cummins Inc.',
      period: 'Oct 2020 – Jun 2021 · 9 mos', location: 'Pune, Maharashtra, India',
      description: 'Conducted benchmarking and market analysis of competitor residential generator sets. Led launch of 2000 kVA genset series accounting for 20% of India\'s total manufacturing volume.',
      highlights: [
        'Benchmarked competitor residential generator sets — identified custom usage-driven design trade-offs via reverse engineering and packaging modification; proposed 30% size reduction for future product',
        'Led timely launch of 2000 kVA "No Cool" genset series, accounting for 20% of India\'s total manufacturing volume',
        'Led product milestone tasks including HARA, OEM validation, and transportation feasibility studies',
      ],
    },
    {
      id: 'exp3', type: 'experience', icon: 'briefcase',
      title: 'Campus Hire Rotation Engineer',
      company: 'Cummins Inc.',
      period: 'Oct 2019 – Sep 2020 · 1 yr', location: 'Pune, Maharashtra, India',
      description: 'Competitive 1-year rotational program across four business units, delivering engineering solutions across the full product lifecycle.',
      highlights: [
        'Engine BU / Product Design: Automated oil consumption analysis across 53 field vehicle datasets, mapping critical engine oil properties for 3 types of engine oil',
        'Cummins Emissions Solutions / Product Engineer: Co-ordinated DVPR activities to complete Diesel Oxidation Catalyst Homologation readiness',
        'Engine BU / Systems Integrator: Created Value Package Profile for future CPCB IV+ programs in PTC Integrity; synchronized system interface agreements between business units',
        'Cummins Fuel Systems / Current Product Engineer: Drove ~$600k annual cost savings by identifying a local supplier for fuel injector subassembly, validating performance via transparency tests and injector teardowns following change management workflows',
      ],
    },
    {
      id: 'exp4', type: 'experience', icon: 'briefcase',
      title: 'Engineering Intern',
      company: 'Cummins Inc.',
      period: 'May 2018 – Jul 2018 · 3 mos', location: 'Pune, Maharashtra, India',
      description: 'Designed and simulated a portable hydraulic test rig in SolidWorks and ANSYS Workbench to validate structural rigidity and support emissions system testing across 36 test cells.',
      highlights: ['Designed portable hydraulic test rig in SolidWorks', 'FEA simulation in ANSYS Workbench for structural validation', 'Supported emissions system testing across 36 test cells'],
    },
    {
      id: 'edu2', type: 'education', icon: 'grad',
      title: 'B.E. Mechanical Engineering',
      company: 'Cummins College of Engineering for Women',
      period: '2015 – 2019', location: 'Pune, Maharashtra, India',
      description: 'Foundation in Mechanical Engineering with relevant coursework and research in CFD simulation.',
      highlights: [
        'Relevant Coursework: Thermodynamics, Numerical Methods in Engineering, Product & Process Design, Design of Mechanical Systems',
        'Research: Use of Taguchi DOE for CFD Simulation to maximize Reusability of Working Fluids of Centrifugal Filter — under Dr. Anand Bewoor',
        'Savitribai Phule Pune University',
      ],
    },
    {
      id: 'res1', type: 'research', icon: 'lab',
      title: 'Summer Research Intern',
      company: 'IISER Pune',
      period: 'May 2014 · 1 mo', location: 'Pune, Maharashtra, India',
      description: 'Introduction to research careers in Pure Sciences at IISER Pune and IUCAA. Exposure to cryptography, genetic mapping, and developments in radioactive chemistry.',
      highlights: ['Lab visits at IISER Pune and IUCAA', 'Cryptography & genetic mapping research', 'Radioactive chemistry developments'],
    },
  ];

  const volunteering = [
    {
      id: 'vol2', icon: 'cert',
      title: 'Technical Session Reviewer & Mentor',
      org: 'Society of Women Engineers',
      period: 'May 2024 – Present', location: 'USA',
      description: 'Evaluated proposals for technical sessions, panels, and keynotes for global SWE events. Mentored undergraduate students at Texas A&M University on early career topics.',
      highlights: ['Reviewed proposals for global SWE events', 'Improved content quality for technical sessions', 'Mentored undergrads at Texas A&M on early career'],
    },
    {
      id: 'vol3', icon: 'star',
      title: 'Culture Champion',
      org: 'Cummins Culture Champion',
      period: 'Sep 2024 – Dec 2024', location: 'Columbus, IN, USA',
      description: 'Assessed corporate culture, identified barriers to change and implemented key behavior shifts in workflows over a 12-week journey within Cummins Inc.',
      highlights: ['Assessed culture & identified change barriers', 'Implemented behavior shifts in workflows', 'Recognized for documenting culture change mission at every phase'],
    },
    {
      id: 'vol4', icon: 'heart',
      title: 'Engineering Dept. Representative',
      org: 'National Service Scheme',
      period: 'Jun 2016 – Jun 2018', location: 'Maharashtra, India',
      description: 'Led a team of 22 engineering students in rural development initiatives across education, healthcare, and infrastructure. Recognized by The Times of India.',
      highlights: ['Led 22-student team in rural development', 'Education, healthcare & infrastructure initiatives', 'Recognized by The Times of India for collaborative rural development'],
    },
  ];

  const SectionHeader = ({ title, sub }) => (
    <div style={{ margin: '52px 0 28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
        <div style={{ flex: 1, height: '1.5px', background: c.line }}></div>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.green, whiteSpace: 'nowrap' }}>{title}</span>
        <div style={{ flex: 1, height: '1.5px', background: c.line }}></div>
      </div>
      {sub && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: c.muted, margin: '6px 0 0', textAlign: 'center' }}>{sub}</p>}
    </div>
  );

  const TimelineCard = ({ item, isOpp }) => {
    const isExpanded = expanded === item.id;
    const dotColor = typeDot[item.type] || c.green;
    const badge = typeBadge(item.type);
    return (
      <div style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 1 }}>
        <div className="exp-dot-col" style={{
          width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0, marginTop: '8px',
          background: isOpp ? c.green : c.bg,
          border: `2.5px solid ${dotColor}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: isOpp ? `0 0 0 6px ${dark ? 'rgba(20,20,40,0.16)' : 'rgba(51,64,140,0.09)'}` : 'none',
        }}>
          {isOpp
            ? <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#fff', display: 'block', animation: 'pulse 2s infinite' }}></span>
            : <Icon name={item.icon} size={13} color={dotColor} />}
        </div>

        <div className={isOpp ? '' : 'exp-card-item'}
          style={{
            flex: 1,
            background: isOpp ? c.green : c.card,
            border: isOpp ? 'none' : `1.5px solid ${c.border}`,
            borderRadius: '12px', padding: '18px 22px',
            boxShadow: isOpp ? '0 8px 40px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
            cursor: isOpp ? 'default' : 'pointer',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onClick={() => !isOpp && setExpanded(expanded === item.id ? null : item.id)}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '5px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: badge.bg, color: badge.color, padding: '2px 7px', borderRadius: '3px' }}>{typeLabel[item.type]}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: isOpp ? 'rgba(255,255,255,0.65)' : c.muted }}>{item.period}</span>
                {item.location && <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: isOpp ? 'rgba(255,255,255,0.55)' : c.muted }}><Icon name="pin" size={10} color={isOpp ? 'rgba(255,255,255,0.55)' : c.muted} />{item.location}</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: isOpp ? '19px' : '16px', fontWeight: 900, color: isOpp ? '#fff' : c.text, margin: 0, lineHeight: 1.2 }}>{item.title}</h3>
                {item.company && <CompanyBadge company={item.company} dark={dark} />}
              </div>
              {item.company && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, color: isOpp ? 'rgba(255,255,255,0.75)' : c.green, marginTop: '2px' }}>{item.company}</div>}
            </div>
            {!isOpp && (
              <span style={{ color: c.muted, transition: 'transform 0.25s', display: 'inline-flex', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0 }}>
                <Icon name="arrow" size={15} color={c.muted} />
              </span>
            )}
          </div>

          {isOpp && (
            <>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, margin: '10px 0 12px' }}>{item.description}</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {item.highlights.map(h => <span key={h} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600, background: 'rgba(255,255,255,0.18)', color: '#fff', padding: '4px 9px', borderRadius: '4px' }}>{h}</span>)}
              </div>
            </>
          )}
          {!isOpp && (
            <div style={{ maxHeight: isExpanded ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted, lineHeight: 1.65, margin: '10px 0 10px' }}>{item.description}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: c.green, flexShrink: 0, marginTop: '1px' }}><Icon name="arrow" size={12} color={c.green} /></span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.text, lineHeight: 1.5 }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: c.bg, padding: '72px 48px 80px 0', maxWidth: '1100px', margin: '0 auto', transition: 'background 0.3s' }}>
      <style>{`
        .exp-card-item { transition: border-color 0.2s, box-shadow 0.2s; }
        .exp-card-item:hover { border-color: ${c.green} !important; box-shadow: 0 6px 28px rgba(0,0,0,0.08) !important; }
        @media (max-width: 900px) {
          .exp-dot-col { display: none !important; }
          .exp-vert-line { display: none !important; }
          .page-pad { padding: 40px 20px 60px !important; }
        }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.8); } }
      `}</style>

      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.green, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="briefcase" size={13} color={c.green} /> Career Journey
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(34px,5vw,52px)', fontWeight: 900, color: c.text, margin: '0 0 12px', letterSpacing: '-1.5px' }}>Experience</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: c.muted, maxWidth: '520px', lineHeight: 1.6, margin: 0 }}>
          From a research lab in Pune to Cummins' global engine programs and Purdue's classrooms — a full-stack engineering career.
        </p>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '36px', flexWrap: 'wrap' }}>
        {[['Experience', a.green], ['Education', '#A8814A'], ['Research', '#3E9E96']].map(([label, color]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: color, display: 'inline-block' }}></span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Main Timeline */}
      <div style={{ position: 'relative' }}>
        <div className="exp-vert-line" style={{ position: 'absolute', left: '18px', top: 0, bottom: 0, width: '2px', background: c.line, zIndex: 0 }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {mainTimeline.map(item => <TimelineCard key={item.id} item={item} isOpp={item.type === 'opportunity'} />)}
        </div>
      </div>

      {/* Volunteering */}
      <SectionHeader title="Volunteering & Community" sub="Giving back through STEM education, mentorship, and community leadership." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
        {volunteering.map(v => (
          <div key={v.id} className="exp-card-item" style={{ background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '12px', padding: '18px 20px', cursor: 'pointer' }}
            onClick={() => setExpanded(expanded === v.id ? null : v.id)}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: dark ? 'rgba(51,64,140,0.16)' : 'rgba(51,64,140,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={v.icon} size={16} color={c.green} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600, color: c.green, marginBottom: '2px' }}>{v.org}</div>
                    <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: c.text, margin: '0 0 3px', lineHeight: 1.3 }}>{v.title}</h4>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: c.muted, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Icon name="pin" size={9} color={c.muted} />{v.location} · {v.period}
                    </div>
                  </div>
                  <span style={{ color: c.muted, transition: 'transform 0.25s', display: 'inline-flex', transform: expanded === v.id ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0 }}>
                    <Icon name="arrow" size={13} color={c.muted} />
                  </span>
                </div>
                <div style={{ maxHeight: expanded === v.id ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted, lineHeight: 1.6, margin: '10px 0 8px' }}>{v.description}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {v.highlights.map(h => (
                      <li key={h} style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                        <Icon name="arrow" size={11} color={c.green} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.text, lineHeight: 1.4 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

Object.assign(window, { Experience, CompanyBadge });
