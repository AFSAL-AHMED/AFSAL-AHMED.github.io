import { ArrowRight } from 'lucide-react';

const BOARD_MEMBERS = [
  { role: 'Editor-in-Chief & Publisher', name: 'Afsal Ahmed S',   dept: 'Dept. of CSE, SJIT', tag: 'EIC',  filled: true  },
  { role: 'Lead Technical Reviewer',    name: '[Friend 1 Name]',  dept: 'Dept. of CSE, SJIT', tag: 'LTR',  filled: false },
  { role: 'Systems Architecture Editor', name: '[Friend 2 Name]', dept: 'Dept. of CSE, SJIT', tag: 'SAE',  filled: false },
  { role: 'Ecosystem Distribution Lead', name: '[Friend 3 Name]', dept: 'Dept. of CSE, SJIT', tag: 'EDL',  filled: false },
  { role: 'Operations Coordinator',     name: '[Friend 4 Name]',  dept: 'Dept. of CSE, SJIT', tag: 'OC',   filled: false },
];

const STATS = [
  { label: 'ISSUES PUBLISHED',   value: '02' },
  { label: 'OPEN ACCESS',        value: '100%' },
  { label: 'PUBLICATION FREQ.',  value: 'MONTHLY' },
  { label: 'RESEARCH TRACKS',    value: '04' },
];

const TRACKS = [
  {
    tag: 'AI_TRACK',
    title: 'AI Engineering\nFrameworks',
    desc: 'Deep-dives into production AI stacks, agent architectures, LLM orchestration, and emerging model deployment patterns.',
  },
  {
    tag: 'CV_TRACK',
    title: 'Computer Vision\nArchitectures',
    desc: 'Dissecting SOTA vision models, real-time inference pipelines, dataset engineering, and edge deployment strategies.',
  },
  {
    tag: 'STRAT_TRACK',
    title: 'Zero-Budget\nStartup Strategy',
    desc: 'Forensic autopsies of startup failures & successes, growth loops, distribution hacks, and builder execution playbooks.',
  },
];

export default function HomePage({ onNavigate }) {
  return (
    <div style={{ background: '#F4F4F0', minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════
          HERO — massive masthead
      ═══════════════════════════════════════════ */}
      <section style={{ borderBottom: '3px solid #000', padding: '0' }}>
        {/* Pre-header strip */}
        <div
          style={{
            borderBottom: '2px solid #000',
            padding: '0.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <span className="nb-tag nb-tag-filled">VOL. 1 — ISSUE 02 LIVE</span>
          <span className="nb-tag">OPEN ACCESS JOURNAL</span>
          <div style={{ flex: 1 }} />
          <span className="nb-label-sm nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5625rem' }}>
            EST. 2026 · CSIR-NIScPR AUDIT COMPLIANT
          </span>
        </div>

        {/* Two-column hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px' }} className="hero-grid">
          {/* Left: headline */}
          <div
            style={{
              padding: '3.5rem 2rem 3rem',
              borderRight: '2px solid #000',
            }}
          >
            <h1 className="nb-display-hero nb-fade-up" style={{ marginBottom: '1.5rem' }}>
              The Protocol<br />
              Is Open.
            </h1>
            <p className="nb-body nb-fade-up-1" style={{ maxWidth: 520, marginBottom: '2rem' }}>
              A monthly digital serial publication tracking advanced AI engineering frameworks,
              computer vision architectures, and zero-budget startup execution strategies
              for next-generation software builders.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="nb-fade-up-2">
              <button
                onClick={() => onNavigate('archives')}
                className="nb-btn nb-btn-filled"
                id="cta-explore-issue-02"
              >
                EXPLORE ISSUE 02 <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onNavigate('archives')}
                className="nb-btn"
                id="cta-access-archives"
              >
                ACCESS ARCHIVES
              </button>
            </div>
          </div>

          {/* Right: pub metadata column */}
          <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div className="nb-label" style={{ marginBottom: '0.5rem', color: 'rgba(0,0,0,0.5)' }}>
                PUBLICATION
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.875rem', letterSpacing: '-0.01em' }}>
                THE BUILDER PROTOCOL
              </div>
            </div>
            <hr className="nb-rule-thin" />
            {[
              ['Type',      'Open-Access Digital Serial'],
              ['Frequency', 'Monthly'],
              ['Language',  'English'],
              ['Format',    'Digital (Web)'],
              ['ISSN',      'Registration Pending'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="nb-label-sm nb-label" style={{ color: 'rgba(0,0,0,0.5)' }}>{k}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 600, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
            <hr className="nb-rule-thin" />
            <div>
              <div className="nb-label" style={{ marginBottom: '0.4rem', color: 'rgba(0,0,0,0.5)' }}>EDITOR-IN-CHIEF</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.875rem' }}>Afsal Ahmed S</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'rgba(0,0,0,0.6)' }}>Dept. of CSE, SJIT</div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="nb-stats-strip" style={{ borderTop: '2px solid #000', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
          {STATS.map((s) => (
            <div key={s.label} className="nb-stat-cell">
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: '2rem',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {s.value}
              </div>
              <div className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5625rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ASYMMETRIC CONTENT GRID
      ═══════════════════════════════════════════ */}
      <section style={{ borderBottom: '3px solid #000' }}>

        {/* Grid: 2/3 + 1/3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }} className="content-grid-main">

          {/* ── LEFT: CSIR-NIScPR Masthead ── */}
          <div style={{ borderRight: '2px solid #000', padding: '2.5rem 2rem' }}>
            <div className="nb-section-header">
              <span className="nb-label">CSIR-NIScPR AUDIT COMPLIANCE</span>
              <div className="nb-section-header-line" />
              <span className="nb-label" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>BIBLIOGRAPHIC REGISTRY</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Aims & Scope */}
              <div>
                <div className="nb-label" style={{ marginBottom: '0.75rem' }}>AIMS & SCOPE</div>
                <p className="nb-body-sm">
                  The Builder Protocol is an open-access, monthly digital serial publication tracking
                  advanced AI engineering frameworks, computer vision architectures, and zero-budget
                  startup execution strategies for next-generation software builders.
                </p>
              </div>

              {/* Editorial management */}
              <div>
                <div className="nb-label" style={{ marginBottom: '0.75rem' }}>EDITORIAL MANAGEMENT</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div>
                    <div className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5rem', marginBottom: '0.15rem' }}>PUBLISHER & EIC</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.875rem' }}>Afsal Ahmed S</div>
                  </div>
                  <div>
                    <div className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5rem', marginBottom: '0.15rem' }}>INSTITUTIONAL NODE</div>
                    <a href="mailto:24cs@stjosephs.tech.sc.in"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 500, color: '#000', textDecoration: 'underline' }}>
                      24cs@stjosephs.tech.sc.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="nb-rule" style={{ margin: '1.75rem 0' }} />

            {/* Publication HQ */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div className="nb-label" style={{ marginBottom: '0.75rem' }}>REGISTERED PUBLICATION HQ</div>
                <div
                  className="nb-block"
                  style={{ padding: '0.875rem', background: '#000', color: '#F4F4F0' }}
                >
                  <p className="nb-body-sm" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', lineHeight: 1.6 }}>
                    [Insert Physical Postal Address]<br />
                    St. Joseph's Institute of Technology<br />
                    Chennai, Tamil Nadu — India
                  </p>
                </div>
              </div>
              <div>
                <div className="nb-label" style={{ marginBottom: '0.75rem' }}>PUBLICATION METADATA</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {[
                    ['Type',      'Open-Access Digital Serial'],
                    ['Frequency', 'Monthly'],
                    ['Language',  'English'],
                    ['Format',    'Digital (Web)'],
                    ['ISSN',      'Registration Pending'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.12)', paddingBottom: '0.3rem' }}>
                      <span className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5rem' }}>{k}</span>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Research Tracks ── */}
          <div style={{ padding: '2.5rem 1.5rem' }}>
            <div className="nb-section-header">
              <span className="nb-label">RESEARCH COVERAGE MATRIX</span>
              <div className="nb-section-header-line" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {TRACKS.map((track, i) => (
                <div
                  key={track.tag}
                  className="nb-hover"
                  style={{
                    padding: '1.25rem',
                    border: '2px solid #000',
                    marginTop: i === 0 ? 0 : '-2px',
                    cursor: 'default',
                    background: '#F4F4F0',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span className="nb-tag">{track.tag}</span>
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.9375rem',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    marginBottom: '0.5rem',
                    whiteSpace: 'pre-line',
                  }}>
                    {track.title}
                  </div>
                  <p className="nb-body-sm">{track.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTENT REVIEW BOARD — full-width bento
      ═══════════════════════════════════════════ */}
      <section style={{ borderBottom: '3px solid #000', padding: '2.5rem 2rem' }}>
        <div className="nb-section-header">
          <span className="nb-label">ACTIVE 5-MEMBER CONTENT REVIEW BOARD</span>
          <div className="nb-section-header-line" />
          <span className="nb-label" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>STUDENT ADVISORY PANEL</span>
        </div>

        {/* 5-column board grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: '2px solid #000' }}>
          {BOARD_MEMBERS.map((member, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem',
                borderRight: i < 4 ? '2px solid #000' : 'none',
                background: member.filled ? '#000' : '#F4F4F0',
                color: member.filled ? '#F4F4F0' : '#000',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span
                  className="nb-label-sm nb-label"
                  style={{
                    padding: '0.15rem 0.4rem',
                    border: member.filled ? '1.5px solid #F4F4F0' : '1.5px solid #000',
                    fontSize: '0.5rem',
                    color: member.filled ? '#F4F4F0' : '#000',
                  }}
                >
                  {member.tag}
                </span>
                {i === 0 && (
                  <span
                    className="nb-label-sm nb-label"
                    style={{ padding: '0.15rem 0.4rem', border: '1.5px solid #F4F4F0', fontSize: '0.5rem', color: '#F4F4F0' }}
                  >
                    EIC
                  </span>
                )}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                {member.name}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.25rem', lineHeight: 1.4 }}>
                {member.role}
              </div>
              <div className="nb-label" style={{ fontSize: '0.5rem', opacity: 0.6, color: member.filled ? '#F4F4F0' : '#000' }}>
                {member.dept}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════════════ */}
      <section
        style={{
          padding: '3rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div>
          <div className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', marginBottom: '0.5rem' }}>LATEST ISSUE</div>
          <h2 className="nb-display-lg" style={{ marginBottom: '0.5rem' }}>
            Built. Broken.<br />Learned.
          </h2>
          <p className="nb-body-sm" style={{ maxWidth: 420 }}>
            Issue 02 — Forensic Autopsy of Clubhouse's \$4B Collapse. Open access, no login required.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate('archives')}
            className="nb-btn nb-btn-filled"
          >
            READ ISSUE 02 →
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="nb-btn"
          >
            SUBMIT MANUSCRIPT
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:first-child { border-right: none !important; border-bottom: 2px solid #000; }
          .content-grid-main { grid-template-columns: 1fr !important; }
          .content-grid-main > div:first-child { border-right: none !important; border-bottom: 2px solid #000; }
        }
        @media (max-width: 700px) {
          .nb-display-hero { font-size: clamp(2.5rem, 12vw, 4rem) !important; }
          div[style*="repeat(5, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="repeat(5, 1fr)"] > div { border-right: 2px solid #000 !important; border-bottom: 2px solid #000 !important; }
          div[style*="repeat(5, 1fr)"] > div:nth-child(2n) { border-right: none !important; }
          div[style*="repeat(5, 1fr)"] > div:nth-last-child(1) { border-bottom: none !important; }
        }
      `}</style>
    </div>
  );
}
