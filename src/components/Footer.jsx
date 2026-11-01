import { Github, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';

const FOOTER_COLUMNS = [
  {
    title: 'PUBLICATION',
    links: [
      { label: 'Core Index', view: 'home' },
      { label: 'Artifact Archives', view: 'archives' },
      { label: 'Ideathon Hub', view: 'ideathon' },
      { label: 'Comms Gateway', view: 'contact' },
    ],
  },
  {
    title: 'ISSUES',
    links: [
      { label: 'Issue 02 — Aug 2026', view: 'archives' },
      { label: 'Issue 01 — Apr 2026', view: 'archives' },
      { label: 'Subscribe for Issue 03', view: 'contact' },
    ],
  },
  {
    title: 'RESEARCH SCOPE',
    links: [
      { label: 'AI Engineering Frameworks', view: 'archives' },
      { label: 'Computer Vision Architectures', view: 'archives' },
      { label: 'Zero-Budget Startup Strategy', view: 'archives' },
      { label: 'Open Source Ecosystem', view: 'archives' },
    ],
  },
  {
    title: 'LEGAL & COMPLIANCE',
    links: [
      { label: 'ISSN Registration (Pending)', view: 'home' },
      { label: 'Open Access Policy', view: 'home' },
      { label: 'Editorial Standards', view: 'home' },
      { label: 'CSIR-NIScPR Compliance', view: 'home' },
    ],
  },
];

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-obsidian relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── BRAND BLOCK ── */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="lg:w-80 flex-shrink-0">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded border border-cyan-500/30 flex items-center justify-center bg-cyan-neon/5">
                <span className="font-mono text-xs font-bold text-cyan">TB</span>
              </div>
              <span className="font-mono font-bold text-sm text-white/90" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                THE_BUILDER_PROTOCOL<span className="text-cyan">.ME</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              An open-access monthly digital serial publication tracking advanced AI engineering frameworks,
              computer vision architectures, and zero-budget startup execution strategies.
            </p>
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
              <span className="label-mono text-green-400">PUBLISHED MONTHLY</span>
              <span className="text-white/20 mx-2">•</span>
              <span className="label-mono text-muted">CURATED WITH OBSESSION</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AFSAL-AHMED"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/8 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/afsal-ahmed-s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-white/8 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:24cs@stjosephs.tech.sc.in"
                className="w-9 h-9 rounded-md border border-white/8 flex items-center justify-center text-muted hover:text-cyan hover:border-cyan-500/30 transition-all"
                aria-label="Email"
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* ── SITEMAP COLUMNS ── */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h5 className="tag-mono text-cyan mb-4">{col.title}</h5>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => {
                          onNavigate(link.view);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="footer-link text-left hover:text-white group flex items-center gap-1"
                      >
                        <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 text-cyan transition-opacity flex-shrink-0" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="divider mb-6" />

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span className="tag-mono text-muted">
              © {year} THE BUILDER PROTOCOL
            </span>
            <span className="hidden sm:block text-white/10">|</span>
            <span className="tag-mono text-muted">
              PUBLISHER: AFSAL AHMED S
            </span>
            <span className="hidden sm:block text-white/10">|</span>
            <span className="tag-mono text-muted">
              INST. NODE: 24cs@stjosephs.tech.sc.in
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge badge-cyan">OPEN ACCESS</span>
            <span className="badge badge-slate">v2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
