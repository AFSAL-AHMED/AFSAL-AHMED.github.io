import { Zap, ArrowUpRight, Clock, Users, Trophy, ExternalLink } from 'lucide-react';

const TRACKS = [
  {
    id: '01',
    title: 'AI Content Masterstroke',
    icon: '🤖',
    accent: 'cyan',
    tagline: 'Build the Machine That Writes The Machine',
    desc: 'Design and prototype an AI-powered content engine — a system that researches, structures, and generates publication-grade technical articles with minimal human input. Judges will evaluate originality, pipeline architecture, and content quality output.',
    deliverable: 'Working prototype + Architecture doc',
    prize: 'Feature in Issue 03',
    difficulty: 'ADVANCED',
  },
  {
    id: '02',
    title: 'LinkedIn Growth Hack',
    icon: '📈',
    accent: 'amethyst',
    tagline: 'Engineer Virality. Not Luck.',
    desc: 'Devise and execute a data-driven LinkedIn growth strategy for The Builder Protocol. Submit a full playbook: content calendar, hook formula library, engagement loop design, and a 30-day execution report with real metrics.',
    deliverable: 'Strategy playbook + 30-day report',
    prize: 'Distribution Partnership',
    difficulty: 'INTERMEDIATE',
  },
  {
    id: '03',
    title: 'The Ultimate Magazine Feature',
    icon: '✍️',
    accent: 'cyan',
    tagline: 'Write Something Worth Remembering',
    desc: 'Submit a full-length, publication-grade editorial feature (2500–4000 words) on any theme within our research scope: AI engineering, startup forensics, or open-source ecosystems. The winning piece gets published in Issue 03 with full attribution.',
    deliverable: 'Full editorial feature (2500-4000 words)',
    prize: 'Published in Issue 03',
    difficulty: 'OPEN',
  },
];

const TIMELINE = [
  { label: 'Registration Closes', date: 'Nov 1, 2026', status: 'active' },
  { label: 'Submissions Due', date: 'Nov 20, 2026', status: 'upcoming' },
  { label: 'Judging Period', date: 'Nov 21–28, 2026', status: 'upcoming' },
  { label: 'Winners Announced', date: 'Dec 1, 2026', status: 'upcoming' },
];

export default function IdeathonPage() {
  return (
    <div className="min-h-screen grid-bg pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── HERO ── */}
        <div className="relative mb-16">
          <div className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(157,78,221,0.12) 0%, transparent 70%)',
            }} />

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge badge-amethyst">
                  <Zap size={9} className="mr-1" />
                  STRATEGY INITIATIVE
                </span>
                <span className="badge badge-green">REGISTRATIONS OPEN</span>
              </div>

              <h1 className="display-lg text-white mb-4">
                The Next-Gen{' '}
                <br className="hidden sm:block" />
                <span style={{ color: '#9D4EDD' }}>Media Blueprint</span>{' '}
                Ideathon
              </h1>

              <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
                A builder-first strategy challenge hosted by The Builder Protocol. Three focused tracks.
                Real deliverables. Your work could ship in Issue 03 or power our distribution layer.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  id="ideathon-register-btn"
                  style={{ background: '#9D4EDD', color: '#fff', boxShadow: '0 0 24px rgba(157,78,221,0.4)' }}
                >
                  <Zap size={15} strokeWidth={2.5} />
                  Register Now — Free
                  <ExternalLink size={13} />
                </a>
                <button className="btn-secondary">
                  Download Brief
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="card-base p-5 space-y-4">
                <div className="tag-mono text-amethyst mb-2">EVENT PARAMETERS</div>
                {[
                  ['Format', 'Online / Async'],
                  ['Tracks', '3 Open Tracks'],
                  ['Entry Fee', 'Zero-Budget (Free)'],
                  ['Team Size', 'Solo or Duo'],
                  ['Host', 'The Builder Protocol'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                    <span className="text-muted">{k}</span>
                    <span className="text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TRACKS ── */}
        <div className="section-header">
          <span className="label-mono text-amethyst">CHALLENGE TRACKS</span>
          <div className="section-header-line" />
          <span className="label-mono text-muted">3 OPEN TRACKS</span>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {TRACKS.map((track) => {
            const isCyan = track.accent === 'cyan';
            return (
              <div
                key={track.id}
                className="card-base p-6 flex flex-col"
                style={{
                  borderTop: `2px solid ${isCyan ? 'rgba(0,240,255,0.4)' : 'rgba(157,78,221,0.4)'}`,
                }}
              >
                {/* Track ID + Icon */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{track.icon}</span>
                  <div className="flex gap-2">
                    <span className={`badge ${isCyan ? 'badge-cyan' : 'badge-amethyst'}`}>
                      TRACK_{track.id}
                    </span>
                    <span className="badge badge-slate">{track.difficulty}</span>
                  </div>
                </div>

                <h3 className="font-bold text-white text-lg mb-1">{track.title}</h3>
                <p className={`text-xs font-mono mb-4 ${isCyan ? 'text-cyan' : 'text-amethyst'}`}
                  style={{ color: isCyan ? 'var(--cyan-neon)' : 'var(--amethyst)', fontFamily: "'JetBrains Mono', monospace" }}>
                  // {track.tagline}
                </p>

                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{track.desc}</p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="text-muted">Deliverable:</span>
                    <span className="text-white/80">{track.deliverable}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Trophy size={11} className="text-yellow-400" />
                    <span className="text-muted">Prize:</span>
                    <span className="text-yellow-400 font-medium">{track.prize}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── TIMELINE ── */}
        <div className="section-header">
          <span className="label-mono text-cyan">EVENT TIMELINE</span>
          <div className="section-header-line" />
        </div>

        <div className="grid sm:grid-cols-4 gap-4 mb-16">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative">
              <div className={`card-base p-4 ${item.status === 'active' ? 'border-cyan-500/30' : ''}`}
                style={item.status === 'active' ? { borderColor: 'rgba(0,240,255,0.3)', background: 'rgba(0,240,255,0.03)' } : {}}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: item.status === 'active' ? '#00F0FF' : 'rgba(255,255,255,0.2)' }} />
                  <span className={`tag-mono ${item.status === 'active' ? 'text-cyan' : 'text-muted'}`}
                    style={item.status === 'active' ? { color: 'var(--cyan-neon)' } : {}}>
                    PHASE {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="font-mono text-xs text-white/80 mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.date}</div>
                <div className="text-sm text-muted">{item.label}</div>
              </div>
              {i < TIMELINE.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2 w-4 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>

        {/* ── REGISTRATION CTA ── */}
        <div className="masthead-section p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users size={16} className="text-amethyst" style={{ color: 'var(--amethyst)' }} />
            <span className="label-mono text-amethyst" style={{ color: 'var(--amethyst)' }}>
              REGISTRATION IS FREE & OPEN TO ALL
            </span>
          </div>
          <h3 className="display-md text-white mb-3">
            Ready to Build Something{' '}
            <span style={{ color: '#9D4EDD' }}>Worth Publishing?</span>
          </h3>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Click below to access the Google Form registration. Takes 2 minutes.
            No prerequisites — just a builder's mindset.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            id="ideathon-register-form-link"
            className="btn-primary inline-flex"
            style={{ background: '#9D4EDD', color: '#fff', boxShadow: '0 0 30px rgba(157,78,221,0.4)', padding: '1rem 2.5rem', fontSize: '0.9375rem' }}
          >
            <Zap size={17} strokeWidth={2.5} />
            Open Registration Form
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
