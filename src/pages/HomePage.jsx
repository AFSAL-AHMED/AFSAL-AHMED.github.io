import { ArrowRight, BookOpen, Archive, Terminal, Users, Globe, Mail } from 'lucide-react';

const BOARD_MEMBERS = [
  {
    role: 'Editor-in-Chief & Publisher',
    name: 'Afsal Ahmed S',
    dept: 'Dept. of CSE, SJIT',
    tag: 'EIC',
    accent: 'cyan',
  },
  {
    role: 'Lead Technical Reviewer',
    name: '[Friend 1 Name]',
    dept: 'Dept. of CSE, SJIT',
    tag: 'LTR',
    accent: 'amethyst',
  },
  {
    role: 'Systems Architecture Editor',
    name: '[Friend 2 Name]',
    dept: 'Dept. of CSE, SJIT',
    tag: 'SAE',
    accent: 'amethyst',
  },
  {
    role: 'Ecosystem Distribution Lead',
    name: '[Friend 3 Name]',
    dept: 'Dept. of CSE, SJIT',
    tag: 'EDL',
    accent: 'amethyst',
  },
  {
    role: 'Operations Coordinator',
    name: '[Friend 4 Name]',
    dept: 'Dept. of CSE, SJIT',
    tag: 'OC',
    accent: 'amethyst',
  },
];

const STATS = [
  { label: 'ISSUES PUBLISHED', value: '02', mono: true },
  { label: 'OPEN ACCESS', value: '100%', mono: false },
  { label: 'PUBLICATION FREQ.', value: 'MONTHLY', mono: true },
  { label: 'RESEARCH TRACKS', value: '04', mono: true },
];

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen grid-bg">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="hero-gradient-overlay absolute inset-0 pointer-events-none" />
        <div className="scan-line" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            {/* Pre-label */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <span className="badge badge-cyan">VOL. 1 — ISSUE 02 LIVE</span>
              <span className="badge badge-amethyst">OPEN ACCESS JOURNAL</span>
            </div>

            {/* Mission Statement */}
            <h1 className="display-xl text-white mb-6 animate-fade-in-up-delay-1">
              The Protocol is Open.{' '}
              <br className="hidden sm:block" />
              <span className="text-cyan glow-text-cyan">Build Faster</span>{' '}
              Than You Think.
            </h1>

            <p className="text-lg text-muted leading-relaxed max-w-2xl mb-10 animate-fade-in-up-delay-2">
              A monthly digital serial publication tracking advanced AI engineering frameworks,
              computer vision architectures, and zero-budget startup execution strategies
              for next-generation software builders.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <button
                onClick={() => onNavigate('archives')}
                className="btn-primary"
                id="cta-explore-issue-02"
              >
                Explore Issue 02
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => onNavigate('archives')}
                className="btn-secondary"
                id="cta-access-archives"
              >
                <Archive size={15} />
                Access Archives
              </button>
            </div>
          </div>

          {/* STATS ROW */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5 animate-fade-in-up-delay-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-obsidian-50 px-6 py-5 hover:bg-obsidian-100 transition-colors">
                <div className={`text-2xl font-bold mb-1 ${stat.mono ? 'font-mono text-cyan' : 'text-white'}`}
                  style={stat.mono ? { fontFamily: "'JetBrains Mono', monospace" } : {}}>
                  {stat.value}
                </div>
                <div className="tag-mono text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE MASTHEAD ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="section-header">
            <span className="label-mono text-cyan">CSIR-NIScPR AUDIT COMPLIANCE</span>
            <div className="section-header-line" />
            <span className="label-mono text-muted">BIBLIOGRAPHIC REGISTRY</span>
          </div>

          <div className="masthead-section p-6 md:p-8 mb-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Aims & Scope */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={14} className="text-cyan" />
                  <span className="label-mono text-cyan">AIMS & SCOPE</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed">
                  The Builder Protocol is an open-access, monthly digital serial publication tracking
                  advanced AI engineering frameworks, computer vision architectures, and zero-budget
                  startup execution strategies for next-generation software builders.
                </p>
              </div>

              {/* Editorial Management */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Terminal size={14} className="text-cyan" />
                  <span className="label-mono text-cyan">EDITORIAL MANAGEMENT</span>
                </div>
                <div className="space-y-2 text-sm text-white/75">
                  <div className="flex gap-2">
                    <span className="text-muted flex-shrink-0">Publisher & Editor-in-Chief:</span>
                    <span className="text-white font-semibold">Afsal Ahmed S</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-muted flex-shrink-0">Institutional Node:</span>
                    <a href="mailto:24cs@stjosephs.tech.sc.in" className="text-cyan hover:underline font-mono text-xs">
                      24cs@stjosephs.tech.sc.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider my-6" />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Publication HQ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={14} className="text-cyan" />
                  <span className="label-mono text-cyan">REGISTERED PUBLICATION HEADQUARTERS</span>
                </div>
                <div className="text-sm text-white/75 font-mono leading-relaxed bg-white/3 rounded-lg p-3 border border-white/5">
                  <p className="text-muted">[Insert Physical Postal Address matching Aadhaar]</p>
                  <p className="text-muted mt-1">St. Joseph's Institute of Technology</p>
                  <p className="text-muted">Chennai, Tamil Nadu — India</p>
                </div>
              </div>

              {/* Pub Metadata */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={14} className="text-cyan" />
                  <span className="label-mono text-cyan">PUBLICATION METADATA</span>
                </div>
                <div className="space-y-2">
                  {[
                    ['Publication Type', 'Open-Access Digital Serial'],
                    ['Frequency', 'Monthly'],
                    ['Language', 'English'],
                    ['Format', 'Digital (Web)'],
                    ['ISSN', 'Registration Pending'],
                  ].map(([key, val]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-muted">{key}</span>
                      <span className="text-white/80 font-mono">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT REVIEW BOARD ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-header">
            <span className="label-mono text-amethyst">ACTIVE 5-MEMBER CONTENT REVIEW BOARD</span>
            <div className="section-header-line" />
            <div className="flex items-center gap-2">
              <Users size={12} className="text-muted" />
              <span className="label-mono text-muted">STUDENT ADVISORY PANEL</span>
            </div>
          </div>

          <div className="bento-grid">
            {BOARD_MEMBERS.map((member, i) => (
              <div
                key={i}
                className={`board-card ${i === 0 ? 'border-t-2 border-t-cyan-500/60' : 'border-t-2 border-t-amethyst-500/40'}`}
                style={i > 0 ? { borderTopColor: 'rgba(157,78,221,0.4)' } : {}}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`badge ${i === 0 ? 'badge-cyan' : 'badge-amethyst'}`}>{member.tag}</span>
                  {i === 0 && <span className="badge badge-green">EIC</span>}
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{member.name}</h4>
                <p className="text-xs text-muted leading-tight mb-2">{member.role}</p>
                <p className="tag-mono text-muted/70">{member.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE COVER ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="section-header">
            <span className="label-mono text-cyan">RESEARCH COVERAGE MATRIX</span>
            <div className="section-header-line" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '⚡',
                title: 'AI Engineering Frameworks',
                desc: 'Deep-dives into production AI stacks, agent architectures, LLM orchestration, and emerging model deployment patterns.',
                tag: 'AI_TRACK',
              },
              {
                icon: '👁️',
                title: 'Computer Vision Architectures',
                desc: 'Dissecting SOTA vision models, real-time inference pipelines, dataset engineering, and edge deployment strategies.',
                tag: 'CV_TRACK',
              },
              {
                icon: '🚀',
                title: 'Zero-Budget Startup Strategy',
                desc: 'Forensic autopsies of startup failures & successes, growth loops, distribution hacks, and builder execution playbooks.',
                tag: 'STRAT_TRACK',
              },
            ].map((item) => (
              <div key={item.tag} className="card-base p-6 group cursor-default">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="badge badge-slate mb-3">{item.tag}</div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
