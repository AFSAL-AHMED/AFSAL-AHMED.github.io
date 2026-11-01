import { ExternalLink, ArrowUpRight, ChevronRight, Lock, Globe } from 'lucide-react';

const ISSUE_02 = {
  pubId: 'TBP-2026-02',
  vol: 'Vol. 1',
  issue: 'Issue 02',
  date: 'August 2026',
  theme: 'Built. Broken. Learned.',
  subtitle: 'Forensic Autopsy of Clubhouse\'s $4B Collapse',
  category: 'Case Study',
  format: 'Open Access',
  accent: 'cyan',
  coverColor: 'from-cyan-950/40 to-obsidian-300',
  sections: [
    {
      tag: 'COVER STORY',
      title: 'Clubhouse\'s $4B Collapse',
      desc: 'A forensic post-mortem dissecting the viral rise and catastrophic fall of the audio-social giant — from peak valuation to near-irrelevance in 18 months.',
      link: '#',
    },
    {
      tag: 'OPEN SOURCE CORNER',
      title: 'Lightpanda Zig Browser',
      desc: 'Exploring the blazing-fast, Zig-native browser engine redefining headless automation benchmarks for AI scraping pipelines.',
      link: '#',
    },
    {
      tag: 'AGENT PICK',
      title: 'Manus AI — Dissected',
      desc: 'A technical breakdown of Manus, the autonomous multi-agent system, including its architecture, capabilities, and real-world deployment edge cases.',
      link: '#',
    },
    {
      tag: 'GROWTH STRATEGY',
      title: 'Generative Engine Optimization (GEO)',
      desc: 'The new SEO. How builders must rethink content distribution for LLM-era search engines — AIO, perplexity ranking, and structured knowledge injection.',
      link: '#',
    },
  ],
};

const ISSUE_01 = {
  pubId: 'TBP-2026-01',
  vol: 'Vol. 1',
  issue: 'Issue 01',
  date: 'April 2026',
  theme: 'The Founder File Preface',
  subtitle: 'Inaugural Edition — The Zero-to-One Builder Thesis',
  category: 'Developer Tooling',
  format: 'Open Access',
  accent: 'amethyst',
  coverColor: 'from-purple-950/40 to-obsidian-300',
  sections: [
    {
      tag: 'EDITORIAL',
      title: 'The Founder File Preface',
      desc: 'The inaugural manifesto defining the Builder Protocol thesis: why the next billion-dollar companies will be built by technical founders who move first.',
      link: '#',
    },
    {
      tag: 'OPEN SOURCE CORNER',
      title: 'React Ink CLI',
      desc: 'Building terminal UIs with React. A hands-on guide to React Ink for building rich, interactive CLI developer tools in the Node.js ecosystem.',
      link: '#',
    },
    {
      tag: 'WEEKEND SPEC',
      title: 'Academic OS Wedge',
      desc: 'A systems design spec for building an open-source academic operations platform targeting Indian universities — the architecture, data model, and GTM.',
      link: '#',
    },
    {
      tag: 'STRATEGY',
      title: 'Zero-to-One Playbook',
      desc: 'A distilled, technical framework for validating, building, and distributing a startup in the zero-budget constraint environment.',
      link: '#',
    },
  ],
};

function IssueCard({ issue, featured = false }) {
  const isCyan = issue.accent === 'cyan';

  return (
    <div className={`card-base overflow-hidden ${featured ? 'border-2' : 'border'}`}
      style={featured ? {
        borderColor: isCyan ? 'rgba(0,240,255,0.2)' : 'rgba(157,78,221,0.2)',
        boxShadow: isCyan
          ? '0 0 40px rgba(0,240,255,0.06), 0 8px 40px rgba(0,0,0,0.5)'
          : '0 0 40px rgba(157,78,221,0.06), 0 8px 40px rgba(0,0,0,0.5)',
      } : {}}>

      {/* Issue Header */}
      <div className={`relative px-6 pt-6 pb-8 bg-gradient-to-br ${issue.coverColor}`}>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="badge badge-cyan">LATEST ISSUE</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-3">
          <span className={`badge ${isCyan ? 'badge-cyan' : 'badge-amethyst'}`}>{issue.pubId}</span>
          <span className="badge badge-slate">{issue.category}</span>
          <span className="badge badge-green">
            <Globe size={8} className="mr-1" />
            {issue.format}
          </span>
        </div>

        <div className="font-mono text-xs text-muted mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {issue.vol} — {issue.issue} // {issue.date}
        </div>

        <h2 className={`display-md mb-1 ${isCyan ? 'text-cyan' : 'text-amethyst'}`}
          style={isCyan ? { color: '#00F0FF' } : { color: '#9D4EDD' }}>
          {issue.theme}
        </h2>
        <p className="text-sm text-white/60">{issue.subtitle}</p>

        {/* Decorative Grid Accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }} />
      </div>

      {/* Sections */}
      <div className="p-6 space-y-3">
        <div className="label-mono text-muted mb-4">EDITORIAL SEGMENTS</div>
        {issue.sections.map((section) => (
          <a
            key={section.tag}
            href={section.link}
            className="flex items-start gap-3 p-3.5 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/3 transition-all group cursor-pointer"
          >
            <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${isCyan ? 'text-cyan' : 'text-amethyst'}`}
              style={isCyan ? { color: 'var(--cyan-neon)' } : { color: 'var(--amethyst)' }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`tag-mono ${isCyan ? 'text-cyan' : 'text-amethyst'}`}
                  style={isCyan ? { color: 'var(--cyan-neon)' } : { color: 'var(--amethyst)' }}>
                  {section.tag}
                </span>
              </div>
              <div className="font-semibold text-sm text-white/90 mb-1">{section.title}</div>
              <div className="text-xs text-muted leading-relaxed">{section.desc}</div>
            </div>
            <ArrowUpRight size={13} className="flex-shrink-0 text-muted group-hover:text-white transition-colors mt-0.5" />
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex items-center gap-3">
        <button className={`btn-primary flex-1 justify-center text-sm py-3 ${!isCyan ? 'bg-amethyst text-white' : ''}`}
          style={!isCyan ? { background: 'var(--amethyst)', color: 'white', boxShadow: '0 0 20px rgba(157,78,221,0.3)' } : {}}>
          Read Full Issue
          <ExternalLink size={14} />
        </button>
        <button className="btn-secondary py-3 px-4 text-sm">
          <Lock size={13} />
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default function ArchivesPage() {
  return (
    <div className="min-h-screen grid-bg pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-amethyst">ARTIFACT ARCHIVES</span>
            <span className="badge badge-slate">SERIAL CATALOG</span>
          </div>
          <h1 className="display-lg text-white mb-4">
            The Issue{' '}
            <span style={{ color: '#00F0FF' }}>Catalog</span>
          </h1>
          <p className="text-muted max-w-2xl">
            Every published edition of The Builder Protocol — indexed, cataloged, and open for access.
            Each issue is a forensic deep-dive into the tools, strategies, and frameworks shaping next-gen builders.
          </p>
        </div>

        {/* Issue Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <IssueCard issue={ISSUE_02} featured />
          <IssueCard issue={ISSUE_01} />
        </div>

        {/* Coming Soon */}
        <div className="mt-8 p-6 rounded-xl border border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="badge badge-slate">TBP-2026-03</span>
              <span className="badge badge-slate">SEPTEMBER 2026</span>
            </div>
            <p className="text-sm text-muted">Issue 03 is in production. Subscribe to get notified on release.</p>
          </div>
          <button className="btn-secondary text-sm whitespace-nowrap">
            Notify Me on Launch
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
