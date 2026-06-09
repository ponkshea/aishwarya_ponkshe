
const Nav = ({ active, setActive, dark, setDark, accent }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };

  const links = [
    { id: 'home',       label: 'Home',       icon: 'home' },
    { id: 'blog',       label: 'Writings',   icon: 'pen' },
    { id: 'experiments', label: 'AI Experiments', icon: 'cpu' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'teaching',   label: 'Teaching',   icon: 'teach' },
    { id: 'contact',    label: 'Say Hello',  icon: 'message' },
  ];

  const bg     = dark ? '#0E0E12' : '#FAFAF7';
  const border = dark ? '#2A2A33' : '#E4E2DB';
  const muted  = dark ? '#76767E' : '#888892';
  const text   = dark ? '#E8EAE0' : '#1A1A14';

  return (
    <>
      <style>{`
        .nav-item-btn { background: transparent; border: none; width: 100%; text-align: left; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 8px; transition: background 0.18s; position: relative; font-family: 'DM Sans', sans-serif; font-size: 14px; }
        .nav-item-btn:hover { background: ${dark ? 'rgba(51,64,140,0.13)' : 'rgba(51,64,140,0.07)'}; }
        .resume-btn-nav { font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: ${a.green}; border: 1.5px solid ${a.green}; border-radius: 6px; padding: 10px 14px; cursor: pointer; background: transparent; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; transition: background 0.18s; }
        .resume-btn-nav:hover { background: ${dark ? 'rgba(51,64,140,0.16)' : 'rgba(51,64,140,0.09)'}; }
        .mobile-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 98; }
        .mobile-drawer { position: fixed; top: 0; right: 0; bottom: 0; width: 260px; background: ${bg}; border-left: 1px solid ${border}; z-index: 99; padding: 24px 20px; display: flex; flex-direction: column; gap: 6px; animation: slideInRight 0.25s ease; }
        @keyframes slideInRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
        @media (max-width: 900px) {
          .sidebar-nav { display: none !important; }
          .mobile-topbar { display: flex !important; }
          .main-content { margin-left: 0 !important; padding-top: 64px !important; }
        }
      `}</style>

      {/* Desktop Sidebar */}
      <nav className="sidebar-nav" style={{
        position: 'fixed', top: 0, left: 0, width: '220px', height: '100vh',
        display: 'flex', flexDirection: 'column', padding: '40px 20px',
        background: bg, borderRight: `1px solid ${border}`, zIndex: 100,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, letterSpacing: '-1px', color: a.green, marginBottom: '6px', cursor: 'pointer' }} onClick={() => setActive('home')}>A.</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: '40px' }}>Aishwarya Ponkshe</div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {links.map(l => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <button className="nav-item-btn"
                  style={{ color: isActive ? a.green : muted, fontWeight: isActive ? 600 : 400, background: isActive ? (dark ? 'rgba(51,64,140,0.16)' : 'rgba(51,64,140,0.08)') : 'transparent' }}
                  onClick={() => setActive(l.id)}>
                  {isActive && <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: '3px', height: '60%', background: a.green, borderRadius: '0 2px 2px 0' }}></span>}
                  <Icon name={l.icon} size={15} color={isActive ? a.green : muted} />
                  {l.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }} onClick={() => setDark(!dark)}>
            <div style={{ width: '36px', height: '20px', background: dark ? a.green : '#D2CFC4', borderRadius: '10px', position: 'relative', transition: 'background 0.3s', flexShrink: 0 }}>
              <div style={{ position: 'absolute', top: '3px', left: dark ? '19px' : '3px', width: '14px', height: '14px', background: '#fff', borderRadius: '50%', transition: 'left 0.3s' }}></div>
            </div>
            <Icon name={dark ? 'sun' : 'moon'} size={13} color={muted} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: muted }}>{dark ? 'Light' : 'Dark'}</span>
          </button>
          <a className="resume-btn-nav" href="assets/Aishwarya_V_Ponkshe_PM.pdf" download="Aishwarya_V_Ponkshe_PM.pdf" style={{ textDecoration: 'none' }}>
            <Icon name="download" size={13} color={a.green} />
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="mobile-topbar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: bg, borderBottom: `1px solid ${border}`,
        padding: '14px 20px', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.3s',
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, color: a.green, cursor: 'pointer' }} onClick={() => setActive('home')}>A.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => setDark(!dark)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Icon name={dark ? 'sun' : 'moon'} size={18} color={muted} />
          </button>
          <button onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Icon name="menu" size={22} color={text} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
          <div className="mobile-drawer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, color: a.green }}>A.</div>
              <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <Icon name="close" size={20} color={muted} />
              </button>
            </div>
            {links.map(l => {
              const isActive = active === l.id;
              return (
                <button key={l.id} className="nav-item-btn"
                  style={{ color: isActive ? a.green : muted, fontWeight: isActive ? 600 : 400, background: isActive ? (dark ? 'rgba(51,64,140,0.16)' : 'rgba(51,64,140,0.08)') : 'transparent', fontSize: '15px' }}
                  onClick={() => { setActive(l.id); setMenuOpen(false); }}>
                  <Icon name={l.icon} size={16} color={isActive ? a.green : muted} />
                  {l.label}
                </button>
              );
            })}
            <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
              <a className="resume-btn-nav" href="assets/Aishwarya_V_Ponkshe_PM.pdf" download="Aishwarya_V_Ponkshe_PM.pdf" style={{ textDecoration: 'none' }}>
                <Icon name="download" size={13} color={a.green} />
                Resume
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Object.assign(window, { Nav });
