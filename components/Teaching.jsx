
const Teaching = ({ dark, accent }) => {
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };
  const [expanded, setExpanded] = React.useState(null);

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

  const girlsIncModules = [
    {
      id: 'gi1',
      icon: 'tool',
      label: 'ASEE Publication · Apr 2025',
      title: '3D Printing & Design Thinking',
      subtitle: 'Evolving a 3D Printing Module to a Semester-long Curriculum on Design & Additive Manufacturing for K-4th Grade',
      url: 'https://www.rose-hulman.edu/asee-conference/_assets/ASEE%20Papers/Work%20in%20Progress%20Evolving%20a%203D%20Printing%20Module%20developed%20for%20a%203-week%20STEM%20Summer%20Camp%20to%20a%20Semester-long%20Curriculum%20on%20Design%20and%20Additive.pdf',
      body: [
        { type: 'p', text: "I've had the privilege of helping design and deliver a hands-on STEM curriculum for girls in K-4th grade — and we just wrapped up the spring semester. I'm proud of what our team accomplished and deeply grateful for the learning along the way. We introduced the students to the concepts of engineering design thinking, additive manufacturing and TinkerCAD — and yes, they modeled and printed their own Christmas ornaments!" },
        { type: 'heading', text: "Here's what I learned (and loved)" },
        { type: 'bullet', text: "Kids reminded me of the power of imagination — I saw a circle and they saw an ecosystem." },
        { type: 'bullet', text: "Breaking down engineering made me sharper, a better communicator and more importantly, humbled." },
        { type: 'bullet', text: "You grow by planning, not just by doing — being in the curriculum design phase stretched my thinking far beyond delivery. I learned to design learning, not just content." },
        { type: 'bullet', text: "Meeting young minds where they are teaches patience, kindness and listening — skills that go far beyond the classroom." },
        { type: 'bullet', text: "Designing a curriculum is like Systems Engineering — but with glitter and glue sticks." },
      ],
    },
    {
      id: 'gi2',
      icon: 'wrench',
      label: 'ASEE Publication · Mar 2026',
      title: 'RC Car: Engineering Concepts for K-12',
      subtitle: 'Work-in-Progress: Integrating Sustainability in a K-12 STEM Outreach Module on Examining and Testing a Model Radio-Control (RC) Car',
      url: 'https://peer.asee.org/58113',
      body: [
        { type: 'p', text: 'Created a 10-week curriculum to teach K-12 students "How to build cars?" We started by asking them which was their favorite car — we expected Lightning McQueen, but got Bugatti instead. So we knew we were dealing with a tough audience.' },
        { type: 'p', text: "We slowly built on engineering concepts: prime movers, batteries, voltages, materials — then had them build batteries with lemons before racing the cars they built along an obstacle course." },
        { type: 'highlight', emoji: '🎖️', text: "One of our most rewarding moments? Every single week, without prompting, at least one student would bring up 'Trade-offs' during our pop quizzes. That told us the concept had truly landed." },
        { type: 'highlight', emoji: '🧩', text: 'One of our challenging moments? Recalibrating ourselves constantly to ensure that the curriculum didn\'t feel like a crash course on "How to make a car?", but to get students engaged in key concepts in a fun way.' },
      ],
    },
  ];

  const me440 = {
    title: 'ME 440: Automotive Prime Movers',
    org: 'Purdue University · Mechanical Engineering',
    period: 'Aug 2021 – Aug 2023',
    url: 'https://purdueme.com/wp-content/uploads/2021/09/ME44000_InternalCombustionEngines_20190318.pdf',
    description: 'Coached 70+ mechanical engineering students on internal combustion engines and hybrid vehicle systems. Developed curriculum and mentored undergraduates on engine simulation research.',
    highlights: [
      'Coached 70+ students on ICE fundamentals, hybrid vehicle architecture, and powertrain integration',
      'Developed supplementary curriculum materials aligned with simulation-based research',
      'Mentored undergraduates on engine simulation research projects',
      'Course spans thermodynamic cycles, fuel systems, emissions, and vehicle dynamics',
    ],
  };

  const BodyBlock = ({ block }) => {
    if (block.type === 'p') return (
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: c.muted, lineHeight: 1.7, margin: '0 0 12px' }}>{block.text}</p>
    );
    if (block.type === 'heading') return (
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: c.text, margin: '16px 0 8px' }}>{block.text}</p>
    );
    if (block.type === 'bullet') return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', margin: '0 0 8px' }}>
        <span style={{ color: c.green, flexShrink: 0, marginTop: '3px', fontSize: '16px' }}>✨</span>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: c.muted, lineHeight: 1.65, margin: 0 }}>{block.text}</p>
      </div>
    );
    if (block.type === 'highlight') return (
      <div style={{ background: dark ? 'rgba(51,64,140,0.10)' : 'rgba(51,64,140,0.06)', border: `1px solid ${c.line}`, borderRadius: '8px', padding: '14px 16px', margin: '12px 0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '18px', flexShrink: 0 }}>{block.emoji}</span>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.text, lineHeight: 1.65, margin: 0 }}>{block.text}</p>
      </div>
    );
    return null;
  };

  return (
    <div className="rpad" style={{ minHeight: '100vh', background: c.bg, padding: '72px 48px 80px 0', maxWidth: '1100px', margin: '0 auto', transition: 'background 0.3s' }}>
      <style>{`
        .teach-card { transition: border-color 0.2s, box-shadow 0.2s; }
        .teach-card:hover { border-color: ${c.green} !important; box-shadow: 0 6px 28px rgba(0,0,0,0.08) !important; }
        @media (max-width: 900px) { .page-pad { padding: 40px 20px 60px !important; } }
      `}</style>

      {/* Page header */}
      <div style={{ marginBottom: '52px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.green, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon name="teach" size={13} color={c.green} /> Education & Outreach
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(34px,5vw,52px)', fontWeight: 900, color: c.text, margin: '0 0 12px', letterSpacing: '-1.5px' }}>Teaching</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: c.muted, maxWidth: '520px', lineHeight: 1.6, margin: 0 }}>
          From Purdue lecture halls to elementary classrooms — engineering education as a practice of empathy, patience, and systems thinking.
        </p>
      </div>

      {/* ── Girls Inc Section ── */}
      <div style={{ marginBottom: '56px' }}>
        {/* Cover image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', maxHeight: '380px', position: 'relative' }}>
          <img src="uploads/pasted-1777080956387-0.png" alt="Girls Inc STEM Outreach" style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}></div>
          <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px' }}>
            <div style={{ display: 'inline-block', background: '#E05A8A', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px', marginBottom: '8px' }}>Girls Inc · STEM Outreach</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.2, letterSpacing: '-0.5px' }}>Inspiring the Next Generation of Engineers</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: '6px 0 0', lineHeight: 1.5 }}>Franklin, IN · Aug 2024 – Present · 40+ students inspired</p>
          </div>
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: c.muted, lineHeight: 1.7, maxWidth: '680px', marginBottom: '28px' }}>
          Designed and delivered hands-on STEM modules on 3D Printing, Emotional Intelligence, and Radio Controlled Cars for K-12 students — building curriculum from scratch, facilitating sessions, and publishing research on outcomes through ASEE.
        </p>

        {/* Module cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {girlsIncModules.map(mod => {
            const isOpen = expanded === mod.id;
            return (
              <div key={mod.id} className="teach-card" style={{ background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '14px', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setExpanded(isOpen ? null : mod.id)}>
                {/* Card header */}
                <div style={{ padding: '20px 24px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: dark ? 'rgba(224,90,138,0.15)' : 'rgba(224,90,138,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={mod.icon} size={17} color="#E05A8A" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.muted, marginBottom: '4px' }}>{mod.label}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 800, color: c.text, margin: '0 0 4px', lineHeight: 1.25 }}>{mod.title}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted, margin: 0, lineHeight: 1.4 }}>{mod.subtitle}</p>
                  </div>
                  <span style={{ color: c.muted, transition: 'transform 0.25s', display: 'inline-flex', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0, marginTop: '6px' }}>
                    <Icon name="arrow" size={15} color={c.muted} />
                  </span>
                </div>

                {/* Expanded body */}
                <div style={{ maxHeight: isOpen ? '900px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <div style={{ padding: '4px 24px 24px 78px', borderTop: `1px solid ${c.line}` }}>
                    <div style={{ height: '16px' }}></div>
                    {mod.body.map((b, i) => <BodyBlock key={i} block={b} />)}
                    <a href={mod.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '12px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: '#E05A8A', textDecoration: 'none' }}>
                      View ASEE Publication <Icon name="arrow" size={12} color="#E05A8A" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ME 440 Section ── */}
      <div style={{ borderTop: `1.5px solid ${c.line}`, paddingTop: '44px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ flex: 1, height: '1.5px', background: 'transparent' }}></div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.green }}>Purdue University</span>
          <div style={{ flex: 1, height: '1.5px', background: c.line }}></div>
        </div>

        <div className="teach-card" style={{ background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '14px', padding: '24px 28px', display: 'flex', gap: '20px', alignItems: 'flex-start', cursor: 'pointer' }}
          onClick={() => setExpanded(expanded === 'me440' ? null : 'me440')}>
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: dark ? 'rgba(207,185,145,0.15)' : 'rgba(207,185,145,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="grad" size={18} color="#A08040" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.muted, marginBottom: '4px' }}>Teaching Assistant · {me440.period}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 900, color: c.text, margin: '0 0 4px', lineHeight: 1.2 }}>{me440.title}</h3>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, color: c.green, marginBottom: '6px' }}>{me440.org}</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted, lineHeight: 1.6, margin: 0 }}>{me440.description}</p>

            <div style={{ maxHeight: expanded === 'me440' ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
              <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {me440.highlights.map(h => (
                  <li key={h} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <Icon name="arrow" size={12} color={c.green} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.text, lineHeight: 1.5 }}>{h}</span>
                  </li>
                ))}
              </ul>
              <a href={me440.url} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '14px', fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: c.green, textDecoration: 'none' }}>
                View course details <Icon name="arrow" size={12} color={c.green} />
              </a>
            </div>
          </div>
          <span style={{ color: c.muted, transition: 'transform 0.25s', display: 'inline-flex', transform: expanded === 'me440' ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0, marginTop: '4px' }}>
            <Icon name="arrow" size={15} color={c.muted} />
          </span>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Teaching });
