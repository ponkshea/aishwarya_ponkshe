
const Home = ({ dark, accent }) => {
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };
  const [heroLayout, setHeroLayout] = React.useState('split');
  const [visible, setVisible] = React.useState(false);
  const [typedText, setTypedText] = React.useState('');
  const [counters, setCounters] = React.useState({ years: 0, projects: 0, disciplines: 0 });
  const fullText = 'Automotive Engineer · Product Manager';  React.useEffect(() => {
    setTimeout(() => setVisible(true), 80);
    // Typewriter
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 38);
    // Animated counters
    const targets = { years: 5, projects: 10, disciplines: 2 };
    const duration = 1400;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;
    const counterInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounters({
        years:       Math.round(targets.years * ease),
        projects:    Math.round(targets.projects * ease),
        disciplines: Math.round(targets.disciplines * ease),
      });
      if (step >= steps) clearInterval(counterInterval);
    }, stepTime);
    return () => { clearInterval(typeInterval); clearInterval(counterInterval); };
  }, []);

  const c = {
    bg:       dark ? '#0E0E12' : '#FAFAF7',
    bgAlt:    dark ? '#17171D' : '#F0EFEA',
    text:     dark ? '#E8EAE0' : '#1A1A14',
    muted:    dark ? '#888892' : '#74746C',
    green:    dark ? a.greenLight : a.green,
    greenBg:  `${a.green}22`,
    border:   dark ? '#2A2A33' : '#E4E2DB',
    tag:      dark ? '#20202A' : '#ECEAE2',
    tagText:  dark ? a.greenLight : '#54524B',
  };

  const skills = {
    'Product': ['Market Research', 'Benchmarking', 'Product Roadmap', 'Requirements Management', 'Competitive Advantage Frameworks', 'New Product Development (NPD)', 'Product Lifecycle Management (PLM)', 'Project Management', 'DFMEA', '7-Step Problem Solving', 'Root Cause Analysis (RCA)', 'Lean Six Sigma', 'Change Management'],
    'System Analysis & Test': ['GT Power', 'MATLAB', 'SIMULINK', 'SQL', 'Python', 'Ansys Chemkin', 'Calterm (ETAS INCA equivalent)', 'Excel', 'Power BI', 'AutoCAD', 'SOLIDWORKS', 'PTC Integrity', 'DFM', 'DVA', 'Design of Experiments', 'Data Acquisition'],
    'Regulatory Knowledge': ['CARB', 'EPA', 'CPCB IV+ Requirements', 'FTP75', 'CHET', 'RMCSET Steady State Composite', 'CAFÉ norms'],
  };

  return (
    <div style={{ minHeight: '100vh', background: c.bg, transition: 'background 0.3s ease' }}>
      <style>{`
        .hero-img-wrap { transition: transform 0.5s ease; }
        .hero-img-wrap:hover { transform: scale(1.02); }
        .skill-tag { transition: all 0.2s ease; cursor: default; }
        .skill-tag:hover { background: ${c.green} !important; color: #fff !important; }
        .stat-box { transition: transform 0.2s ease; }
        .stat-box:hover { transform: translateY(-3px); }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .photo-shimmer {
          position: absolute; inset: 0; border-radius: inherit;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none; z-index: 2;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          from { width: 0; }
          to   { width: 100%; }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity: 0; }
        .layout-toggle { cursor: pointer; transition: all 0.2s; }
        .layout-toggle:hover { opacity: 0.7; }
      `}</style>

      {/* Layout Toggle */}
      <div style={{ position: 'absolute', top: '24px', right: '24px', display: 'flex', gap: '8px', zIndex: 10 }}>
        {['split', 'editorial'].map(l => (
          <button key={l} className="layout-toggle"
            onClick={() => setHeroLayout(l)}
            style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '6px 12px', borderRadius: '4px',
              background: heroLayout === l ? c.green : 'transparent',
              color: heroLayout === l ? '#fff' : c.muted,
              border: `1px solid ${heroLayout === l ? c.green : c.border}`,
              cursor: 'pointer',
            }}>
            {l === 'split' ? '⊟ Split' : '⊠ Editorial'}
          </button>
        ))}
      </div>

      {visible && heroLayout === 'split' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Left: Text */}
          <div style={{ padding: '80px 48px 60px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: c.green, marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ display: 'inline-block', width: '32px', height: '1.5px', background: c.green }}></span>
              {typedText}
            </div>
            <h1 className="fade-up-2" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-2px',
              color: c.text, margin: '0 0 24px',
            }}>
              Building the<br />
              <span style={{ color: c.green }}>Future of</span><br />
              Mobility.
            </h1>
            <p className="fade-up-3" style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '17px', lineHeight: 1.7,
              color: c.muted, maxWidth: '420px', margin: '0 0 36px',
            }}>
              I'm <strong style={{ color: c.text }}>Aishwarya Ponkshe</strong> — an automotive engineer turned product thinker. I live at the intersection of deep technical expertise and human-centered design to move mobility forward.
            </p>
            <div className="fade-up-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/ponkshea/" target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600,
                  padding: '12px 24px', borderRadius: '6px',
                  background: c.green, color: '#fff',
                  textDecoration: 'none', letterSpacing: '0.04em',
                  transition: 'opacity 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                Connect on LinkedIn
              </a>
              <a href="mailto:ponksheaishwarya@gmail.com"
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600,
                  padding: '12px 24px', borderRadius: '6px',
                  background: 'transparent', color: c.green,
                  border: `1.5px solid ${c.green}`,
                  textDecoration: 'none', letterSpacing: '0.04em',
                  transition: 'all 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.background = c.greenBg; }}
                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; }}>
                Say Hello
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 0 60px 48px', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '80px', right: '0',
              width: '320px', height: '320px',
              background: c.bgAlt, borderRadius: '50%',
              zIndex: 0,
            }}></div>
            <div className="hero-img-wrap" style={{
              position: 'relative', zIndex: 1,
              width: '340px', height: '420px',
              borderRadius: '200px 200px 120px 120px',
              overflow: 'hidden',
              boxShadow: dark ? '0 32px 80px rgba(0,0,0,0.6)' : '0 32px 80px rgba(20,20,40,0.16)',
              border: `4px solid ${c.border}`,
            }}>
              <img src="uploads/photo-1777071268644.jpg" alt="Aishwarya Ponkshe"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div className="photo-shimmer"></div>
            </div>
            {/* Decorative label */}
            <div style={{
              position: 'absolute', bottom: '80px', right: '20px',
              background: dark ? '#20202A' : '#fff',
              border: `1px solid ${c.border}`,
              borderRadius: '12px', padding: '12px 16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              zIndex: 2,
            }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: c.muted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>Status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#33408C', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, color: c.text }}>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {visible && heroLayout === 'editorial' && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 48px 60px 0' }}>
          <div className="fade-up" style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: c.green, marginBottom: '24px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ display: 'inline-block', width: '32px', height: '1.5px', background: c.green }}></span>
            {typedText}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start' }}>
            <div>
              <h1 className="fade-up-2" style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 900,
                lineHeight: 1.0, letterSpacing: '-3px',
                color: c.text, margin: '0 0 32px',
              }}>
                Aishwarya<br />
                <em style={{ color: c.green, fontStyle: 'italic' }}>Ponkshe.</em>
              </h1>
              <p className="fade-up-3" style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '18px', lineHeight: 1.7,
                color: c.muted, maxWidth: '560px', margin: '0 0 40px',
              }}>
                Building the future of mobility — one system, one product, one decision at a time. I bridge deep automotive engineering with product strategy.
              </p>
              <div className="fade-up-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: c.greenBg, borderRadius: '20px', padding: '8px 14px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.green, display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, color: c.green }}>Open to opportunities</span>
                </div>
                <a href="https://www.linkedin.com/in/ponkshea/" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, padding: '10px 20px', borderRadius: '6px', background: c.green, color: '#fff', textDecoration: 'none' }}>
                  LinkedIn →
                </a>
              </div>
            </div>
            <div style={{ width: '260px', height: '320px', borderRadius: '140px 140px 80px 80px', overflow: 'hidden', border: `4px solid ${c.border}`, flexShrink: 0 }}>
              <img src="uploads/photo-1777071268644.jpg" alt="Aishwarya" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>
        </div>
      )}

      {/* Quote band */}
      {visible && (
        <div style={{ background: c.bgAlt, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, transition: 'background 0.3s' }}>
          <div className="quote-band" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px 0 0', display: 'flex', alignItems: 'stretch' }}>
            <div style={{ flex: 1, padding: '44px 24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '64px', fontWeight: 900, color: c.green, lineHeight: 0.6, alignSelf: 'flex-start' }}>“</span>
              <blockquote style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.25, color: c.text, letterSpacing: '-0.3px' }}>
                In the Persistent Pursuit of the Next Giant Leap
              </blockquote>
            </div>
            <div className="stat-box" style={{ padding: '44px 40px', borderLeft: `1px solid ${c.border}`, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '180px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 900, color: c.green, lineHeight: 1 }}>{counters.years}+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '6px' }}>Years in Mobility</div>
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      {visible && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 48px 80px 0' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.green, marginBottom: '8px' }}>What I bring</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 900, color: c.text, margin: 0, letterSpacing: '-0.5px' }}>Skills & Expertise</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.green, marginBottom: '16px', paddingBottom: '8px', borderBottom: `2px solid ${c.green}` }}>{cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.map(s => (
                    <span key={s} className="skill-tag" style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 500,
                      background: c.tag, color: c.tagText,
                      padding: '5px 10px', borderRadius: '4px',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .quote-band { flex-direction: column !important; }
          .quote-band .stat-box { border-left: none !important; }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { Home });
