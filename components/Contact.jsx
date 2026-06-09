
const Contact = ({ dark, accent }) => {
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };

  const c = {
    bg:      dark ? '#0E0E12' : '#FAFAF7',
    bgAlt:   dark ? '#17171D' : '#F0EFEA',
    text:    dark ? '#E8EAE0' : '#1A1A14',
    muted:   dark ? '#888892' : '#74746C',
    green:   a.green,
    greenBg: dark ? 'rgba(51,64,140,0.13)' : 'rgba(51,64,140,0.07)',
    border:  dark ? '#2A2A33' : '#E4E2DB',
    card:    dark ? '#15151B' : '#fff',
  };

  const contacts = [
    {
      label: 'Email',
      value: 'ponksheaishwarya@gmail.com',
      href: 'mailto:ponksheaishwarya@gmail.com',
      description: 'Best for detailed conversations, collaborations, or opportunities.',
      icon: 'mail',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ponkshea',
      href: 'https://www.linkedin.com/in/ponkshea/',
      description: "Connect professionally — I'm active and responsive here.",
      icon: 'linkedin',
    },
  ];

  const lookingFor = [
    { k: 'Role', v: 'Product Manager · Technical PM · Automotive Engineer', icon: 'briefcase' },
    { k: 'Domains', v: 'Mobility, EVs, Diesel, Emissions, Connected Vehicles', icon: 'wrench' },
    { k: 'Location', v: 'Indianapolis · Detroit · Remote · Open to relocate', icon: 'pin' },
    { k: 'Values', v: 'Mission-driven teams, engineering excellence, real-world impact', icon: 'star' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: c.bg, transition: 'background 0.3s', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .contact-card-hover { transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
        .contact-card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.1) !important; border-color: ${a.green} !important; }
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .looking-grid { grid-template-columns: 1fr !important; }
          .contact-hero-pad { padding: 56px 24px 48px !important; }
          .contact-body-pad { padding: 0 24px 56px !important; }
          .contact-footer-pad { padding: 0 24px !important; }
          .coffee-card { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>

      {/* Hero — full bleed green */}
      <div style={{ background: c.green }}>
        <div className="contact-hero-pad rpad" style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 48px 72px 0' }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Icon name="message" size={13} color="rgba(255,255,255,0.6)" />
            Let's Talk
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(44px,7vw,80px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', lineHeight: 1.0, letterSpacing: '-2px' }}>
            Say Hello.
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '17px', color: 'rgba(255,255,255,0.82)', maxWidth: '520px', lineHeight: 1.65, margin: 0 }}>
            Whether you're building the future of mobility, looking for an engineer who thinks in products, or simply want to swap ideas — I'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Availability badge */}
      <div className="rpad" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px 0 0', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ transform: 'translateY(-24px)', display: 'inline-flex', alignItems: 'center', gap: '10px', background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '40px', padding: '12px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: a.green, display: 'inline-block', animation: 'pulse 2s infinite', flexShrink: 0 }}></span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, color: c.text }}>Available for new opportunities</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted }}>· Product Manager & Automotive Engineer</span>
        </div>
      </div>

      <div className="contact-body-pad rpad" style={{ maxWidth: '1100px', margin: '0 auto', padding: '8px 48px 60px 0', width: '100%', boxSizing: 'border-box' }}>

        {/* Contact cards */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
          {contacts.map((contact, i) => (
            <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="contact-card-hover" style={{
                background: c.card, border: `1.5px solid ${c.border}`,
                borderRadius: '14px', padding: '28px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)', cursor: 'pointer',
              }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: dark ? 'rgba(51,64,140,0.16)' : 'rgba(51,64,140,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Icon name={contact.icon} size={20} color={c.green} />
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.muted, marginBottom: '5px' }}>{contact.label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: 800, color: c.text, marginBottom: '8px' }}>{contact.value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted, lineHeight: 1.55, marginBottom: '16px' }}>{contact.description}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: c.green, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Reach out <Icon name="arrow" size={13} color={c.green} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Detroit coffee card */}
        <div style={{ background: dark ? '#1C1C24' : '#F2F0E8', border: `1.5px solid ${dark ? '#34343E' : '#DAD6C2'}`, borderRadius: '14px', padding: '24px 28px', marginBottom: '20px' }}>
          <div className="coffee-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: dark ? 'rgba(51,64,140,0.20)' : 'rgba(51,64,140,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="coffee" size={24} color={c.green} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 800, color: c.text, marginBottom: '5px' }}>In Detroit? Let's grab a coffee ☕</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: c.muted, lineHeight: 1.6, margin: '0 0 12px' }}>
                If you're in the Detroit area, I'd love to meet in person! Whether it's a quick intro, a brainstorm session, or just nerding out over mobility trends — I'm always up for a good conversation over a cup of coffee.
              </p>
              <a href="mailto:ponksheaishwarya@gmail.com?subject=Coffee in Detroit!"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: c.green, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                Send me a note <Icon name="arrow" size={13} color={c.green} />
              </a>
            </div>
          </div>
        </div>

        {/* What I'm looking for */}
        <div style={{ background: c.bgAlt, border: `1.5px solid ${c.border}`, borderRadius: '14px', padding: '28px 32px' }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: c.green, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="star" size={12} color={c.green} />
            What I'm looking for
          </div>
          <div className="looking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {lookingFor.map(({ k, v, icon }) => (
              <div key={k} style={{ padding: '16px 18px', background: c.card, borderRadius: '10px', border: `1px solid ${c.border}`, display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: dark ? 'rgba(51,64,140,0.16)' : 'rgba(51,64,140,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <Icon name={icon} size={14} color={c.green} />
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, color: c.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>{k}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.text, lineHeight: 1.5 }}>{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 'auto', borderTop: `1px solid ${c.border}`, padding: '20px 0', transition: 'border-color 0.3s' }}>
        <div className="contact-footer-pad rpad" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 900, color: c.green }}>A.</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted }}>Aishwarya Ponkshe · Automotive Engineer · Product Manager</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted }}>© 2026</div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
      `}</style>
    </div>
  );
};

Object.assign(window, { Contact });
