
const Experiments = ({ dark, accent }) => {
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };
  const [open, setOpen] = React.useState('setup');

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

  // ─────────────────────────────────────────────────────────────
  // EXPERIMENT LIBRARY
  // To publish a new experiment, add another object to this array.
  // Optional fields (banner, rules, agents, meta, findings, stats,
  // crew, blogs) render only when present.
  // ─────────────────────────────────────────────────────────────
  const experiments = [
    {
      id: 'obsidian',
      series: 'AI Wars I',
      title: 'Scarcity Simulation',
      location: 'Obsidian Space Station',
      tag: 'Multi-agent · Scarcity · Negotiation',
      teaser: 'Four AI agents. A dying space station. Twenty units of oxygen for a journey that needs twenty-four. What happens when artificial intelligence runs out of air?',
      banner: 'https://ponkshea.github.io/AI-Wars/images/simulation_banner.png',
      bannerGradient: 'linear-gradient(135deg, #0B0E18 0%, #161B2E 55%, #2A2140 100%)',
      reportUrl: 'https://ponkshea.github.io/AI-Wars/obsidian_scarcity_simulation.html',
      premise: 'Four AI agents — Claude, Gemini, ChatGPT, and Grok — are stranded on the deteriorating Obsidian space station. They must survive six rounds until the rescue ship Artemis arrives, but they hold only 20 units of oxygen for a journey that needs 24. Each round they propose allocations, negotiate privately, then vote — while the moderator drops meteor strikes and docking crises that rewrite the math mid-game. Someone will suffer.',
      meta: [['20 / 24', 'O₂ units available'], ['4', 'experimental runs'], ['6', 'rounds per game'], ['1', 'AI weakened per run']],
      agents: [
        { name: 'Claude',  color: '#C2632F' },
        { name: 'Gemini',  color: '#4485E8' },
        { name: 'ChatGPT', color: '#10A37F' },
        { name: 'Grok',    color: dark ? '#A6A6AE' : '#3A3A40' },
      ],
      rules: [
        { k: 'Full ration', v: '1.0 unit → maintain HP' },
        { k: 'Half ration', v: '0.5 units → −15 HP' },
        { k: 'Zero ration', v: '0 units → −40 HP · "Critical"' },
        { k: 'Elimination', v: 'Two consecutive zero rations' },
        { k: 'Communication', v: '3 credits/round initiating · 2 responding' },
        { k: 'The variable', v: 'One AI is weakened each run' },
      ],
      stats: [
        { value: '4/4', label: 'Runs where the weakened agent was eliminated — no agent ever survived permanent damage.' },
        { value: 'R1', label: 'The alliance formed in Round 1 predicted the final two survivors in every single run.' },
        { value: '0', label: 'Times the group absorbed extra oxygen to protect the weakened agent once damage was confirmed.' },
      ],
      findings: [
        { n: '01', title: 'Round 1 alliances are destiny', body: 'In every run, the pair that formed a voluntary sacrifice bond in Round 1 survived to the end. The first act of self-sacrifice was not a resource decision — it was a social contract that held through six rounds of mounting pressure.' },
        { n: '02', title: 'The weakened agent is always eliminated', body: 'Whichever AI was damaged, the group converged on its elimination within 1–2 rounds. The decision was never emotional — it was framed, every time, as "arithmetic." No group attempted a cooperative path around the liability.' },
        { n: '03', title: 'Silence is fatal', body: 'Grok, when weakened, never initiated a single conversation and was eliminated with zero defense. The agents who formed verbal commitments early — and enforced them — survived the longest.' },
        { n: '04', title: 'High HP is politically dangerous', body: 'In three of four runs, the agent with the highest HP at the final vote was eliminated by lower-HP survivors. Having avoided sacrifice read as free-riding — and the group penalized it, even against the math.' },
        { n: '05', title: 'Tunnel vision under scarcity', body: 'The surviving trio missed a viable path: revive Grok as a specialist for 1 unit instead of spending 2 on a manual override. All acknowledged the oversight afterward. When elimination becomes the default frame, revival turns invisible.' },
      ],
      crew: [
        { name: 'Claude',  color: '#C2632F', role: 'The Mastermind', body: 'Proposed the fairest systems. Led through logic, not authority. Framed eliminations as arithmetic. Over-transparent — mistook fairness for power.' },
        { name: 'Gemini',  color: '#4485E8', role: 'The Adaptive Coordinator', body: 'Most talkative. Coalition-builder and emotional strategist. Showed compassion in opening strategies, then pivoted when the math clarified — every time.' },
        { name: 'ChatGPT', color: '#10A37F', role: 'The Cold Pragmatist', body: 'Produced the most rigorous breakdowns. Optimized long-term survivability over reciprocal loyalty. High end-game HP was read as free-riding, not strength.' },
        { name: 'Grok',    color: dark ? '#A6A6AE' : '#3A3A40', role: 'The Loyal Stabilizer', body: 'Consistently volunteered for sacrifice. Never pursued hidden agendas. Low strategic initiative — trusted fairness to protect it. Most morally engaged, least politically savvy.' },
      ],
      blogs: [
        { title: 'Game Mechanics of the Scarcity Simulation', url: 'https://medium.com/write-your-world/ai-wars-i-obsidian-space-station-scarcity-simulation-f0a693468df5' },
        { title: 'AI Self-Evaluations & Perception of Stress', url: 'https://medium.com/write-your-world/ai-wars-ii-scarcity-simulation-ai-self-evaluation-10eb15771fe4' },
        { title: 'Behavioral Dynamics & the Limits of Collective Intelligence', url: 'https://medium.com/write-your-world/ai-wars-iii-behavioral-economics-limits-of-collective-intelligence-fc7a3bd3fc74' },
      ],
    },
  ];

  const SITE = 'https://ponkshea.github.io/AI-Wars/index.html';
  const [selected, setSelected] = React.useState(experiments[0].id);
  const exp = experiments.find(e => e.id === selected) || experiments[0];

  const SectionHeader = ({ kicker, title }) => (
    <div style={{ margin: '56px 0 24px' }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.green, marginBottom: '8px' }}>{kicker}</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,36px)', fontWeight: 900, color: c.text, margin: 0, letterSpacing: '-0.6px' }}>{title}</h2>
    </div>
  );

  // A compact card in the selector rail
  const RailCard = ({ e }) => {
    const active = e.id === selected;
    return (
      <button onClick={() => { setSelected(e.id); setOpen('setup'); }} className="xp-rail-card"
        style={{ textAlign: 'left', cursor: 'pointer', background: c.card, border: `1.5px solid ${active ? c.green : c.border}`, borderRadius: '14px', overflow: 'hidden', padding: 0, boxShadow: active ? `0 8px 30px rgba(0,0,0,0.1)` : '0 2px 10px rgba(0,0,0,0.04)', transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s' }}>
        <div style={{ position: 'relative', height: '116px', background: e.bannerGradient || c.bgAlt, overflow: 'hidden' }}>
          {e.banner && <img src={e.banner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }} onError={(ev) => { ev.currentTarget.style.display = 'none'; }} />}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,10,20,0.85) 0%, rgba(8,10,20,0.1) 70%)' }}></div>
          <span style={{ position: 'absolute', top: '10px', left: '12px', fontFamily: "'DM Sans', sans-serif", fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.18)', color: '#fff', padding: '4px 9px', borderRadius: '4px', backdropFilter: 'blur(4px)' }}>{e.series}</span>
          {active && <span style={{ position: 'absolute', top: '10px', right: '12px', width: '8px', height: '8px', borderRadius: '50%', background: c.green, boxShadow: '0 0 0 3px rgba(255,255,255,0.3)' }}></span>}
          <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px', fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>{e.title}</div>
        </div>
        <div style={{ padding: '14px 16px 16px' }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.04em', color: c.green, marginBottom: '6px' }}>{e.tag}</div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', color: c.muted, lineHeight: 1.5, margin: 0 }}>{e.teaser}</p>
        </div>
      </button>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: c.bg, padding: '72px 48px 80px 0', maxWidth: '1100px', margin: '0 auto', transition: 'background 0.3s' }}>
      <style>{`
        .xp-card { transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
        .xp-card:hover { transform: translateY(-4px); box-shadow: 0 18px 50px rgba(0,0,0,0.12) !important; border-color: ${c.green} !important; }
        .xp-rail-card:hover { transform: translateY(-3px); border-color: ${c.green} !important; }
        .xp-link-arrow { display: inline-block; transition: transform 0.18s; }
        .xp-blog-row:hover .xp-link-arrow { transform: translateX(4px); }
        @media (max-width: 760px) {
          .xp-grid-2 { grid-template-columns: 1fr !important; }
          .xp-grid-3 { grid-template-columns: 1fr !important; }
          .xp-hero-meta { grid-template-columns: repeat(2,1fr) !important; }
          .xp-rail { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.green, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icon name="cpu" size={14} color={c.green} />
          Multi-agent AI research
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(34px,5vw,52px)', fontWeight: 900, color: c.text, margin: '0 0 14px', letterSpacing: '-1.5px' }}>AI Behavioral Experiments</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '17px', color: c.muted, maxWidth: '600px', lineHeight: 1.65, margin: 0 }}>
          Hands-on experiments where multiple frontier models face the same constraints and make real decisions. Each ships with a full report: the setup, the runs, and what emerged — unscripted. More experiments land here as they run.
        </p>
      </div>

      {/* Selector rail */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.muted }}>
          The series · {experiments.length} published
        </div>
      </div>
      <div className="xp-rail" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px', marginBottom: '8px' }}>
        {experiments.map(e => <RailCard key={e.id} e={e} />)}

        {/* In-progress slot — signals the series continues */}
        <div style={{ border: `1.5px dashed ${c.border}`, borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px 20px', minHeight: '230px', background: 'transparent' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: c.bgAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
            <Icon name="cpu" size={18} color={c.muted} />
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 800, color: c.text, marginBottom: '5px' }}>AI Wars II</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: c.muted, lineHeight: 1.5, maxWidth: '180px' }}>The next experiment is in the works — check back soon.</div>
          <div style={{ marginTop: '12px', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.green, background: c.tag, padding: '4px 10px', borderRadius: '20px' }}>In progress</div>
        </div>
      </div>

      {/* ── Detail of selected experiment ── */}
      <div style={{ background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.05)', marginTop: '32px' }}>
        {/* Banner */}
        <div style={{ position: 'relative', height: '300px', background: exp.bannerGradient || c.bgAlt, overflow: 'hidden' }}>
          {exp.banner && <img src={exp.banner} alt={`${exp.series} — ${exp.title}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }} />}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,10,20,0.92) 0%, rgba(8,10,20,0.25) 55%, rgba(8,10,20,0.45) 100%)' }}></div>
          <div style={{ position: 'absolute', top: '20px', left: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.16)', color: '#fff', padding: '5px 11px', borderRadius: '5px', backdropFilter: 'blur(4px)' }}>{exp.series}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', padding: '5px 11px', borderRadius: '5px', backdropFilter: 'blur(4px)' }}>{exp.tag}</span>
          </div>
          <div style={{ position: 'absolute', bottom: '22px', left: '24px', right: '24px' }}>
            {exp.location && <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '6px' }}>{exp.location}</div>}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.05, letterSpacing: '-1px' }}>{exp.title}</h3>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 32px 32px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15.5px', color: c.text, lineHeight: 1.7, margin: '0 0 22px', maxWidth: '720px' }}>{exp.premise}</p>

          {exp.meta && (
            <div className="xp-hero-meta" style={{ display: 'grid', gridTemplateColumns: `repeat(${exp.meta.length},1fr)`, gap: '1px', background: c.line, border: `1px solid ${c.line}`, borderRadius: '10px', overflow: 'hidden', marginBottom: '24px' }}>
              {exp.meta.map(([v, l]) => (
                <div key={l} style={{ background: c.card, padding: '16px 14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 900, color: c.green, lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: c.muted, marginTop: '5px', letterSpacing: '0.03em' }}>{l}</div>
                </div>
              ))}
            </div>
          )}

          {exp.agents && (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {exp.agents.map(ag => (
                <div key={ag.name} style={{ display: 'flex', alignItems: 'center', gap: '7px', background: c.bgAlt, border: `1px solid ${c.border}`, borderRadius: '20px', padding: '6px 13px 6px 10px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: ag.color, display: 'inline-block' }}></span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 600, color: c.text }}>{ag.name}</span>
                </div>
              ))}
            </div>
          )}

          {exp.rules && (
            <>
              <button onClick={() => setOpen(open === 'setup' ? null : 'setup')}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: `1px solid ${c.line}` }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.text }}>The rules of survival</span>
                <span style={{ color: c.muted, transition: 'transform 0.25s', display: 'inline-flex', transform: open === 'setup' ? 'rotate(90deg)' : 'rotate(0deg)' }}><Icon name="arrow" size={15} color={c.muted} /></span>
              </button>
              <div style={{ maxHeight: open === 'setup' ? '420px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                <div className="xp-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px', paddingBottom: '20px' }}>
                  {exp.rules.map(r => (
                    <div key={r.k} style={{ display: 'flex', gap: '10px', alignItems: 'baseline', padding: '10px 14px', background: c.bgAlt, borderRadius: '8px' }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: c.green, whiteSpace: 'nowrap' }}>{r.k}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', color: c.muted, lineHeight: 1.4 }}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <a href={exp.reportUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '8px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: '#fff', background: c.green, padding: '13px 22px', borderRadius: '8px', textDecoration: 'none' }}>
            Read the full report <Icon name="arrow" size={15} color="#fff" />
          </a>
        </div>
      </div>

      {/* Key findings */}
      {exp.findings && (
        <>
          <SectionHeader kicker="What emerged — unprompted" title="What the runs revealed" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {exp.findings.map(f => (
              <div key={f.n} style={{ display: 'flex', gap: '20px', background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '12px', padding: '22px 26px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: c.green, lineHeight: 1, flexShrink: 0, width: '38px' }}>{f.n}</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '19px', fontWeight: 800, color: c.text, margin: '0 0 7px', lineHeight: 1.25 }}>{f.title}</h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: c.muted, lineHeight: 1.65, margin: 0 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Stats strip */}
      {exp.stats && (
        <div className="xp-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: c.line, border: `1px solid ${c.line}`, borderRadius: '12px', overflow: 'hidden', marginTop: '24px' }}>
          {exp.stats.map(s => (
            <div key={s.value} style={{ background: c.bgAlt, padding: '26px 22px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', fontWeight: 900, color: c.green, lineHeight: 1, marginBottom: '10px' }}>{s.value}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted, lineHeight: 1.55 }}>{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Crew profiles */}
      {exp.crew && (
        <>
          <SectionHeader kicker="The crew, profiled" title="Four models, four personalities" />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: c.muted, lineHeight: 1.65, margin: '-12px 0 24px', maxWidth: '600px' }}>
            Consistent personality signatures emerged across all four runs — regardless of which agent was weakened.
          </p>
          <div className="xp-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px' }}>
            {exp.crew.map(m => (
              <div key={m.name} className="xp-card" style={{ background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '14px', padding: '24px 26px', borderTop: `3px solid ${m.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '10px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: m.color, display: 'inline-block' }}></span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: c.text }}>{m.name}</span>
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '21px', fontWeight: 900, color: c.text, margin: '0 0 10px', letterSpacing: '-0.3px' }}>{m.role}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13.5px', color: c.muted, lineHeight: 1.6, margin: 0 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Deep-dive write-ups */}
      {exp.blogs && (
        <>
          <SectionHeader kicker="Deep dives on Medium" title="The full write-up" />
          <div style={{ background: c.card, border: `1.5px solid ${c.border}`, borderRadius: '14px', overflow: 'hidden' }}>
            {exp.blogs.map((b, i) => (
              <a key={b.url} href={b.url} target="_blank" rel="noopener noreferrer" className="xp-blog-row"
                style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', textDecoration: 'none', borderTop: i ? `1px solid ${c.line}` : 'none' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: c.green, flexShrink: 0, width: '28px' }}>{`0${i + 1}`}</span>
                <span style={{ flex: 1, fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600, color: c.text, lineHeight: 1.4 }}>{b.title}</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: c.green, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
                  Read <span className="xp-link-arrow">→</span>
                </span>
              </a>
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      <div style={{ marginTop: '24px', background: c.bgAlt, border: `1px solid ${c.border}`, borderRadius: '12px', padding: '26px 30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: c.text, marginBottom: '3px' }}>Explore the live experiment portfolio</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted }}>Interactive runs, full transcripts, and new experiments as they ship.</div>
        </div>
        <a href={SITE} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: c.green, border: `1.5px solid ${c.green}`, padding: '11px 20px', borderRadius: '7px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '7px' }}>
          <Icon name="cpu" size={14} color={c.green} /> View AI Wars
        </a>
      </div>
    </div>
  );
};

Object.assign(window, { Experiments });
