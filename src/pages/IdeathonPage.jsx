import { Zap, ArrowUpRight, ExternalLink } from 'lucide-react';

const TRACKS = [
  {
    id: '01',
    title: 'AI Content Masterstroke',
    tagline: 'Build the Machine That Writes The Machine',
    desc: 'Design and prototype an AI-powered content engine — a system that researches, structures, and generates publication-grade technical articles with minimal human input. Judges will evaluate originality, pipeline architecture, and content quality output.',
    deliverable: 'Working prototype + Architecture doc',
    prize: 'Feature in Issue 03',
    difficulty: 'ADVANCED',
  },
  {
    id: '02',
    title: 'LinkedIn Growth Hack',
    tagline: 'Engineer Virality. Not Luck.',
    desc: 'Devise and execute a data-driven LinkedIn growth strategy for The Builder Protocol. Submit a full playbook: content calendar, hook formula library, engagement loop design, and a 30-day execution report with real metrics.',
    deliverable: 'Strategy playbook + 30-day report',
    prize: 'Distribution Partnership',
    difficulty: 'INTERMEDIATE',
  },
  {
    id: '03',
    title: 'The Ultimate Magazine Feature',
    tagline: 'Write Something Worth Remembering',
    desc: 'Submit a full-length, publication-grade editorial feature (2500–4000 words) on any theme within our research scope: AI engineering, startup forensics, or open-source ecosystems. The winning piece gets published in Issue 03 with full attribution.',
    deliverable: 'Full editorial feature (2500–4000 words)',
    prize: 'Published in Issue 03',
    difficulty: 'OPEN',
  },
];

const TIMELINE = [
  { label: 'Registration Closes', date: 'Nov 1, 2026',    phase: '01', active: true  },
  { label: 'Submissions Due',     date: 'Nov 20, 2026',   phase: '02', active: false },
  { label: 'Judging Period',      date: 'Nov 21–28, 2026',phase: '03', active: false },
  { label: 'Winners Announced',   date: 'Dec 1, 2026',    phase: '04', active: false },
];

const PARAMS = [
  ['Format',    'Online / Async'],
  ['Tracks',    '3 Open Tracks'],
  ['Entry Fee', 'Zero-Budget (Free)'],
  ['Team Size', 'Solo or Duo'],
  ['Host',      'The Builder Protocol'],
];

export default function IdeathonPage() {
  return (
    <div style={{ background: '#F4F4F0', minHeight: '100vh' }}>

      {/* ── PAGE HEADER STRIP ── */}
      <div style={{ borderBottom: '3px solid #000' }}>
        <div style={{ borderBottom: '2px solid #000', padding: '0.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="nb-tag nb-tag-filled">SYSTEMS</span>
          <span className="nb-tag">STRATEGY INITIATIVE</span>
          <span className="nb-tag">REGISTRATIONS OPEN</span>
        </div>

        {/* Two-column hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px' }} className="ideathon-hero-grid">
          <div style={{ padding: '2.5rem 2rem', borderRight: '2px solid #000' }}>
            <h1 className="nb-display-xl" style={{ marginBottom: '1rem' }}>
              The Next-Gen<br />
              Media Blueprint<br />
              Ideathon
            </h1>
            <p className="nb-body" style={{ maxWidth: 520, marginBottom: '2rem' }}>
              A builder-first strategy challenge hosted by The Builder Protocol.
              Three focused tracks. Real deliverables. Your work could ship in Issue 03
              or power our distribution layer.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-filled"
                id="ideathon-register-btn"
              >
                <Zap size={14} />
                REGISTER NOW — FREE
                <ExternalLink size={12} />
              </a>
              <button className="nb-btn">
                DOWNLOAD BRIEF <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Event params */}
          <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div className="nb-label" style={{ marginBottom: '1rem', color: 'rgba(0,0,0,0.5)' }}>
              EVENT PARAMETERS
            </div>
            {PARAMS.map(([k, v], i) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 0',
                  borderBottom: i < PARAMS.length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none',
                }}
              >
                <span className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5625rem' }}>{k}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.8125rem' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CHALLENGE TRACKS ── */}
      <section style={{ borderBottom: '3px solid #000', padding: '2.5rem 2rem' }}>
        <div className="nb-section-header">
          <span className="nb-label">CHALLENGE TRACKS</span>
          <div className="nb-section-header-line" />
          <span className="nb-label" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>3 OPEN TRACKS</span>
        </div>

        {/* 3-col grid with thick outer border */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '3px solid #000',
          }}
          className="tracks-grid"
        >
          {TRACKS.map((track, i) => (
            <div
              key={track.id}
              style={{
                padding: '1.75rem',
                borderRight: i < 2 ? '2px solid #000' : 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Track header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span
                  className="nb-label"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ display: 'flex', gap: '0.4rem', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span className="nb-tag nb-tag-filled" style={{ fontSize: '0.5rem' }}>TRACK_{track.id}</span>
                  <span className="nb-tag" style={{ fontSize: '0.5rem' }}>{track.difficulty}</span>
                </div>
              </div>

              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.0625rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '0.4rem',
                }}
              >
                {track.title}
              </div>

              <div
                className="nb-label"
                style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5625rem', marginBottom: '0.875rem' }}
              >
                // {track.tagline}
              </div>

              <p className="nb-body-sm" style={{ flex: 1, marginBottom: '1.25rem' }}>{track.desc}</p>

              <div style={{ borderTop: '1px solid rgba(0,0,0,0.2)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem' }}>
                  <span style={{ color: 'rgba(0,0,0,0.5)', fontFamily: "'Space Grotesk', sans-serif" }}>Deliverable:</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>{track.deliverable}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(0,0,0,0.5)', fontFamily: "'Space Grotesk', sans-serif" }}>Prize:</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{track.prize}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ borderBottom: '3px solid #000', padding: '2.5rem 2rem' }}>
        <div className="nb-section-header">
          <span className="nb-label">EVENT TIMELINE</span>
          <div className="nb-section-header-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            border: '2px solid #000',
          }}
          className="timeline-grid"
        >
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem',
                borderRight: i < 3 ? '2px solid #000' : 'none',
                background: item.active ? '#000' : '#F4F4F0',
                color: item.active ? '#F4F4F0' : '#000',
              }}
            >
              <div
                className="nb-label"
                style={{
                  fontSize: '0.5rem',
                  color: item.active ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
                  marginBottom: '0.6rem',
                }}
              >
                PHASE {item.phase}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  marginBottom: '0.3rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.date}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8125rem',
                  color: item.active ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.6)',
                }}
              >
                {item.label}
              </div>
              {item.active && (
                <div style={{ marginTop: '0.75rem' }}>
                  <span
                    className="nb-tag"
                    style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.8)', fontSize: '0.5rem' }}
                  >
                    NOW OPEN
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── REGISTRATION CTA ── */}
      <section
        style={{
          margin: '2.5rem 2rem',
          border: '3px solid #000',
          padding: '3rem 2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          background: '#000',
          color: '#F4F4F0',
        }}
      >
        <div>
          <div className="nb-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>
            REGISTRATION IS FREE & OPEN TO ALL
          </div>
          <h3 className="nb-display-lg" style={{ color: '#F4F4F0', marginBottom: '0.6rem' }}>
            Ready to Build<br />Something Worth<br />Publishing?
          </h3>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', maxWidth: 380 }}>
            Click below to access the Google Form registration.
            Takes 2 minutes. No prerequisites — just a builder's mindset.
          </p>
        </div>
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          id="ideathon-register-form-link"
          className="nb-btn"
          style={{
            background: '#F4F4F0',
            color: '#000',
            borderColor: '#F4F4F0',
            padding: '1rem 2rem',
            fontSize: '0.75rem',
            flexShrink: 0,
            boxShadow: '4px 4px 0 0 rgba(255,255,255,0.3)',
          }}
        >
          <Zap size={15} />
          OPEN REGISTRATION FORM
          <ExternalLink size={13} />
        </a>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ideathon-hero-grid { grid-template-columns: 1fr !important; }
          .ideathon-hero-grid > div:first-child { border-right: none !important; border-bottom: 2px solid #000; }
          .tracks-grid { grid-template-columns: 1fr !important; }
          .tracks-grid > div { border-right: none !important; border-bottom: 2px solid #000; }
          .tracks-grid > div:last-child { border-bottom: none !important; }
          .timeline-grid { grid-template-columns: 1fr 1fr !important; }
          .timeline-grid > div:nth-child(2) { border-right: none !important; }
          .timeline-grid > div:nth-child(3) { border-top: 2px solid #000; border-right: 2px solid #000; }
          .timeline-grid > div:nth-child(4) { border-top: 2px solid #000; border-right: none !important; }
        }
      `}</style>
    </div>
  );
}
