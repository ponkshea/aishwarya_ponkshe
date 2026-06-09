
const Blog = ({ dark, accent }) => {
  const a = accent || { green: '#33408C', greenLight: '#9CA0DC' };

  const c = {
    bg:     dark ? '#0E0E12' : '#FAFAF7',
    bgAlt:  dark ? '#17171D' : '#F0EFEA',
    text:   dark ? '#E8EAE0' : '#1A1A14',
    muted:  dark ? '#888892' : '#74746C',
    green:  a.green,
    border: dark ? '#2A2A33' : '#E4E2DB',
    card:   dark ? '#15151B' : '#fff',
    tag:    dark ? '#20202A' : '#ECEAE2',
    tagTxt: dark ? '#9CA0DC' : '#54524B',
  };

  const PlaceholderImg = ({ label, height = 160, featured = false }) => (
    <div style={{
      width: '100%', height: `${height}px`, flexShrink: 0,
      background: featured ? 'rgba(255,255,255,0.1)' : (dark ? '#1C1C24' : '#ECEAE2'),
      borderRadius: featured ? '8px' : '0',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', position: 'relative',
      marginBottom: featured ? '20px' : '0',
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id={`bp-${label.replace(/\s/g,'').slice(0,6)}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="10" height="20" fill={featured ? 'rgba(255,255,255,0.06)' : (dark ? 'rgba(140,148,220,0.08)' : 'rgba(51,64,140,0.05)')} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#bp-${label.replace(/\s/g,'').slice(0,6)})`} />
      </svg>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 16px' }}>
        <Icon name="pen" size={20} color={featured ? 'rgba(255,255,255,0.3)' : (dark ? '#4A5A38' : '#B8C8A8')} />
        <div style={{ fontFamily: "'DM Sans', monospace", fontSize: '10px', color: featured ? 'rgba(255,255,255,0.35)' : (dark ? '#5A6A48' : '#A8B898'), marginTop: '6px', letterSpacing: '0.04em' }}>{label}</div>
      </div>
    </div>
  );

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Fallback posts in case RSS fails
  const fallbackPosts = [
    {
      title: 'Death of the Small Car in North America',
      summary: 'Why the compact car vanished from American roads — an engineering, economics, and culture story.',
      tag: 'Automotive · Business',
      date: 'Feb 2026',
      readTime: '4 min',
      url: 'https://medium.com/@aish0027/death-of-the-small-car-fcf3d7b1e92f',
      img: 'uploads/1_meIbFBBy4SMxGYKcX1O3Yg.webp',
    },
    {
      title: 'Is Southwest Having a Mid-Life Crisis?',
      summary: 'Southwest\'s competitive edge and the modern challenges threatening its core identity — from the Kelleher era to assigned seating.',
      tag: 'Business Strategy · Aviation',
      date: 'Mar 2026',
      readTime: '6 min',
      url: 'https://medium.com/write-your-world/is-southwest-having-a-mid-life-crisis-1d52f93fa5d2',
      img: 'uploads/1_bbVdqabXtCtdS_lySSGXZA.webp',
    },
    {
      title: 'The Halo and the Ceiling: The Dreams You Will Never Buy',
      summary: 'On ambition, aspiration, and the psychological ceiling that keeps us from the lives we envision.',
      tag: 'Personal Essay',
      date: '2025',
      readTime: '5 min',
      url: 'https://medium.com/write-your-world/the-halo-and-the-ceiling-the-dreams-you-will-never-buy-97faea0d9ff0',
      img: 'uploads/1_vv-WH-_T4gr-vdDuSrxgKA.webp',
    },
  ];

  React.useEffect(() => {
    const decode = (s) => { const d = document.createElement('textarea'); d.innerHTML = s || ''; return d.value; };
    const RSS_URL = encodeURIComponent('https://medium.com/feed/@aish0027');
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const parsed = data.items.map(item => {
            // Extract first image from content
            const imgMatch = item.content && item.content.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = (item.thumbnail && item.thumbnail.startsWith('http')) ? item.thumbnail : (imgMatch && imgMatch[1]) || null;
            // Strip HTML for summary
            const div = document.createElement('div');
            div.innerHTML = item.description || item.content || '';
            const text = (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
            const summary = text.slice(0, 165).trim() + (text.length > 165 ? '…' : '');
            const words = text.split(' ').filter(Boolean).length;
            const readTime = Math.max(1, Math.round(words / 200)) + ' min';
            const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const tag = (item.categories && item.categories.length > 0) ? item.categories.slice(0, 2).map(decode).join(' · ') : 'Essay';
            return { title: decode(item.title), summary, tag, date, readTime, url: item.link, img: thumbnail };
          });
          setPosts(parsed);
        } else {
          setPosts(fallbackPosts);
        }
        setLoading(false);
      })
      .catch(() => { setPosts(fallbackPosts); setLoading(false); });
  }, []);

  return (
    <div className="rpad" style={{ minHeight: '100vh', background: c.bg, padding: '72px 48px 80px 0', maxWidth: '1100px', margin: '0 auto', transition: 'background 0.3s' }}>
      <style>{`
        .blog-card-link { text-decoration: none; display: block; }
        .blog-hover-card { transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
        .blog-hover-card:hover { transform: translateY(-5px) !important; box-shadow: 0 16px 48px rgba(0,0,0,0.1) !important; border-color: ${a.green} !important; }
        .read-arrow { display: inline-block; transition: transform 0.18s; }
        .blog-card-link:hover .read-arrow { transform: translateX(4px); }
        @media (max-width: 700px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.green, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Icon name="pen" size={13} color={c.green} />
          Words & Ideas
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px,5vw,52px)', fontWeight: 900, color: c.text, margin: '0 0 12px', letterSpacing: '-1.5px' }}>Writings</h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '17px', color: c.muted, maxWidth: '480px', lineHeight: 1.6, margin: 0 }}>
          Thoughts on mobility, business strategy, and the spaces in between. Published on Medium.
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: c.muted, marginBottom: '32px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px' }}>
          <div style={{ width: '18px', height: '18px', border: `2px solid ${c.border}`, borderTopColor: c.green, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          Loading latest posts from Medium…
        </div>
      )}

      {/* Grid — all posts */}
      {!loading && <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {posts.map((post, i) => (
          <a key={i} href={post.url} target="_blank" rel="noopener noreferrer" className="blog-card-link">
            <div className="blog-hover-card" style={{
              background: c.card, border: `1.5px solid ${c.border}`,
              borderRadius: '14px', overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              height: '100%', display: 'flex', flexDirection: 'column',
            }}>
              {post.img
                ? <div style={{ width: '100%', background: dark ? '#1C1C24' : '#F0F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', maxHeight: '200px' }}>
                    <img src={post.img} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </div>
                : <PlaceholderImg label={post.imgLabel || 'cover image'} height={140} />
              }
              <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 600, background: c.tag, color: c.tagTxt, padding: '3px 8px', borderRadius: '3px' }}>{post.tag}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: c.muted }}>{post.date} · {post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 800, color: c.text, margin: '0 0 10px', lineHeight: 1.3, flex: 1 }}>{post.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted, lineHeight: 1.6, margin: '0 0 16px' }}>{post.summary}</p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, color: c.green, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Read <span className="read-arrow">→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>}

      {/* CTA */}
      <div style={{ background: c.bgAlt, border: `1px solid ${c.border}`, borderRadius: '12px', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 600, color: c.text, marginBottom: '4px' }}>More on the way</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: c.muted }}>Follow me on Medium for new articles on mobility, strategy, and engineering.</div>
        </div>
        <a href="https://medium.com/@aish0027" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: c.green, border: `1.5px solid ${c.green}`, padding: '10px 18px', borderRadius: '6px', textDecoration: 'none', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
          onMouseOver={e => e.currentTarget.style.background = dark ? 'rgba(51,64,140,0.13)' : 'rgba(51,64,140,0.07)'}
          onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
          <Icon name="pen" size={13} color={c.green} />
          Follow on Medium
        </a>
      </div>
    </div>
  );
};

Object.assign(window, { Blog });
