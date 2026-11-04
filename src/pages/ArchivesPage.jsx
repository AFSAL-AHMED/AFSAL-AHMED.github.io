import { ExternalLink, ArrowUpRight, ChevronRight } from 'lucide-react';

const ISSUE_02 = {
  pubId: 'TBP-2026-02',
  vol: 'Vol. 1',
  issue: 'Issue 02',
  date: 'August 2026',
  theme: 'Built. Broken. Learned.',
  subtitle: "Forensic Autopsy of Clubhouse's $4B Collapse",
  category: 'Case Study',
  sections: [
    {
      tag: 'COVER STORY',
      title: "Clubhouse's $4B Collapse",
      desc: 'A forensic post-mortem dissecting the viral rise and catastrophic fall of the audio-social giant — from peak valuation to near-irrelevance in 18 months.',
    },
    {
      tag: 'OPEN SOURCE CORNER',
      title: 'Lightpanda Zig Browser',
      desc: 'Exploring the blazing-fast, Zig-native browser engine redefining headless automation benchmarks for AI scraping pipelines.',
    },
    {
      tag: 'AGENT PICK',
      title: 'Manus AI — Dissected',
      desc: 'A technical breakdown of Manus, the autonomous multi-agent system, including its architecture, capabilities, and real-world deployment edge cases.',
    },
    {
      tag: 'GROWTH STRATEGY',
      title: 'Generative Engine Optimization (GEO)',
      desc: 'The new SEO. How builders must rethink content distribution for LLM-era search engines — AIO, perplexity ranking, and structured knowledge injection.',
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
  sections: [
    {
      tag: 'EDITORIAL',
      title: 'The Founder File Preface',
      desc: 'The inaugural manifesto defining the Builder Protocol thesis: why the next billion-dollar companies will be built by technical founders who move first.',
    },
    {
      tag: 'OPEN SOURCE CORNER',
      title: 'React Ink CLI',
      desc: 'Building terminal UIs with React. A hands-on guide to React Ink for building rich, interactive CLI developer tools in the Node.js ecosystem.',
    },
    {
      tag: 'WEEKEND SPEC',
      title: 'Academic OS Wedge',
      desc: 'A systems design spec for building an open-source academic operations platform targeting Indian universities — the architecture, data model, and GTM.',
    },
    {
      tag: 'STRATEGY',
      title: 'Zero-to-One Playbook',
      desc: 'A distilled, technical framework for validating, building, and distributing a startup in the zero-budget constraint environment.',
    },
  ],
};

function IssueCard({ issue, featured = false }) {
  return (
    <div
      className={`nb-block${featured ? '-thick' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#F4F4F0',
        ...(featured ? { borderWidth: '3px' } : {}),
      }}
    >
      {/* Issue header */}
      <div
        style={{
          background: featured ? '#000' : '#F4F4F0',
          color: featured ? '#F4F4F0' : '#000',
          padding: '1.75rem 1.75rem 1.5rem',
          borderBottom: '2px solid #000',
          position: 'relative',
        }}
      >
        {featured && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <span
              className="nb-tag"
              style={{ borderColor: '#F4F4F0', color: '#F4F4F0' }}
            >
              LATEST ISSUE
            </span>
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span
            className="nb-tag"
            style={featured
              ? { borderColor: '#F4F4F0', color: '#F4F4F0' }
              : { borderColor: '#000', color: '#000' }
            }
          >
            {issue.pubId}
          </span>
          <span
            className="nb-tag"
            style={featured
              ? { borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.7)' }
              : { borderColor: 'rgba(0,0,0,0.4)', color: 'rgba(0,0,0,0.6)' }
            }
          >
            {issue.category}
          </span>
          <span
            className="nb-tag"
            style={featured
              ? { borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.7)' }
              : { borderColor: 'rgba(0,0,0,0.4)', color: 'rgba(0,0,0,0.6)' }
            }
          >
            OPEN ACCESS
          </span>
        </div>

        <div
          className="nb-label"
          style={{
            color: featured ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
            marginBottom: '0.5rem',
          }}
        >
          {issue.vol} — {issue.issue} // {issue.date}
        </div>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}
        >
          {issue.theme}
        </div>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.8125rem',
            color: featured ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)',
          }}
        >
          {issue.subtitle}
        </p>
      </div>

      {/* Sections list */}
      <div style={{ padding: '1.25rem 1.75rem', flex: 1 }}>
        <div className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', marginBottom: '0.875rem' }}>
          EDITORIAL SEGMENTS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {issue.sections.map((section, i) => (
            <a
              key={section.tag}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.875rem 0',
                borderBottom: i < issue.sections.length - 1 ? '1px solid rgba(0,0,0,0.15)' : 'none',
                textDecoration: 'none',
                color: '#000',
                cursor: 'pointer',
              }}
              className="archive-row"
            >
              <ChevronRight size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div className="nb-label" style={{ fontSize: '0.5rem', color: 'rgba(0,0,0,0.5)', marginBottom: '0.2rem' }}>
                  {section.tag}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.2rem' }}>
                  {section.title}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'rgba(0,0,0,0.6)', lineHeight: 1.5 }}>
                  {section.desc}
                </div>
              </div>
              <ArrowUpRight size={13} style={{ flexShrink: 0, marginTop: '2px', opacity: 0.4 }} />
            </a>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div
        style={{
          padding: '1.25rem 1.75rem',
          borderTop: '2px solid #000',
          display: 'flex',
          gap: '0.75rem',
        }}
      >
        <button className="nb-btn nb-btn-filled" style={{ flex: 1, justifyContent: 'center' }}>
          READ FULL ISSUE <ExternalLink size={13} />
        </button>
        <button className="nb-btn" style={{ padding: '0.75rem 1rem' }}>
          PDF
        </button>
      </div>
    </div>
  );
}

export default function ArchivesPage() {
  return (
    <div style={{ background: '#F4F4F0', minHeight: '100vh' }}>

      {/* Page header strip */}
      <div style={{ borderBottom: '3px solid #000', padding: '0' }}>
        <div style={{ borderBottom: '2px solid #000', padding: '0.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="nb-tag nb-tag-filled">PLAYBOOKS</span>
          <span className="nb-tag">SERIAL CATALOG</span>
        </div>
        <div style={{ padding: '2.5rem 2rem 2rem' }}>
          <h1 className="nb-display-xl" style={{ marginBottom: '0.75rem' }}>
            The Issue<br />Catalog
          </h1>
          <p className="nb-body" style={{ maxWidth: 560 }}>
            Every published edition of The Builder Protocol — indexed, cataloged, and open for access.
            Each issue is a forensic deep-dive into the tools, strategies, and frameworks shaping next-gen builders.
          </p>
        </div>
      </div>

      {/* Issue grid — asymmetric: featured wider */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          borderBottom: '3px solid #000',
          padding: '2rem',
          gap: '1.5rem',
        }}
        className="archives-grid"
      >
        <IssueCard issue={ISSUE_02} featured />
        <IssueCard issue={ISSUE_01} />
      </div>

      {/* Coming Soon banner */}
      <div
        style={{
          margin: '2rem',
          border: '2px dashed #000',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="nb-tag">TBP-2026-03</span>
            <span className="nb-tag">SEPTEMBER 2026</span>
          </div>
          <p className="nb-body-sm">Issue 03 is in production. Subscribe to get notified on release.</p>
        </div>
        <button className="nb-btn">
          NOTIFY ME ON LAUNCH <ArrowUpRight size={14} />
        </button>
      </div>

      <style>{`
        .archive-row:hover { background: rgba(0,0,0,0.04); }
        @media (max-width: 800px) {
          .archives-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
