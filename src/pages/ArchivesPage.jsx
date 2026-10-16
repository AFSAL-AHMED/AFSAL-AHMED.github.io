import { ExternalLink, BookOpen, Download, FileText, ArrowUpRight, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

const SERIAL_ISSUES = [
  {
    pubId: 'PUB ID: TBP•2026•02',
    catalogCode: 'TBP-VOL1-ISSUE02',
    volume: 'Volume 1',
    issue: 'Issue 02',
    date: 'August 2026',
    title: 'Forensic Teardown: The Structural Disintegration of Clubhouse Architecture',
    subtitle: 'A Post-Mortem on Low-Latency Audio Infrastructure, Scalability Roadblocks, and Rapid Social Growth Evaporation.',
    category: 'EMPIRICAL CASE STUDY & SYSTEMS INFRASTRUCTURE',
    openAccess: true,
    featured: true,
    doi: '10.5281/zenodo.builderprotocol.2026.02',
    leadAuthor: 'Editorial Systems Board • The Builder Protocol',
    abstract: 'This empirical study analyzes the technical architecture and ultimate infrastructure collapse of Clubhouse. We investigate the Agora.io audio streaming pipeline, real-time message fan-out bottlenecks, mobile background daemon limits, and how architectural design choices led to irreversible retention decay.',
    articles: [
      {
        type: 'LEAD INVESTIGATION',
        title: 'Clubhouse\'s $4B Collapse: An Engineering Autopsy',
        author: 'Afsal Ahmed S & Review Board',
        pages: 'pp. 01–14',
      },
      {
        type: 'SYSTEMS BENCHMARK',
        title: 'Lightpanda Zig Browser: Headless Automation at Scale',
        author: 'Systems Architecture Group',
        pages: 'pp. 15–24',
      },
      {
        type: 'AGENT INFRASTRUCTURE',
        title: 'Manus AI: Architecture Dissection & Real-World Latency Limits',
        author: 'AI Engineering Lab',
        pages: 'pp. 25–36',
      },
      {
        type: 'DISTRIBUTION ALGORITHM',
        title: 'Generative Engine Optimization (GEO): The Next Generation of Developer SEO',
        author: 'Ecosystem Distribution Node',
        pages: 'pp. 37–48',
      },
    ],
  },
  {
    pubId: 'PUB ID: TBP•2026•01',
    catalogCode: 'TBP-VOL1-ISSUE01',
    volume: 'Volume 1',
    issue: 'Issue 01',
    date: 'April 2026',
    title: 'The First Issue Preface: Zero-to-One Technical Optimization Playbooks',
    subtitle: 'The Inaugural Publication Manifesto, Terminal Developer Interfaces, and Zero-Budget Execution Frameworks.',
    category: 'INAUGURAL EDITORIAL & DEVELOPER TOOLING',
    openAccess: true,
    featured: false,
    doi: '10.5281/zenodo.builderprotocol.2026.01',
    leadAuthor: 'Afsal Ahmed S (Publisher & Editor-in-Chief)',
    abstract: 'The inaugural preface of The Builder Protocol introduces the empirical doctrine for independent builders. Contains actionable engineering frameworks for shipping high-throughput CLI tooling using React Ink, building local-first data layers, and validating software architectures on zero initial capitalization.',
    articles: [
      {
        type: 'EDITORIAL MANIFESTO',
        title: 'The Founder File Preface: The Velocity of the Modern Builder',
        author: 'Afsal Ahmed S',
        pages: 'pp. 01–08',
      },
      {
        type: 'TOOLING BLUEPRINT',
        title: 'React Ink CLI: Enterprise Terminal User Interfaces with React Components',
        author: 'Developer Tooling Working Group',
        pages: 'pp. 09–18',
      },
      {
        type: 'SYSTEMS SPECIFICATION',
        title: 'Academic OS Wedge: Systems Design for Indian University Operations',
        author: 'St. Joseph’s Student Architecture Group',
        pages: 'pp. 19–30',
      },
      {
        type: 'OPTIMIZATION PLAYBOOK',
        title: 'Zero-to-One Technical Optimization: Bootstrapping Production Codebases',
        author: 'Technical Review Board',
        pages: 'pp. 31–42',
      },
    ],
  },
];

export default function ArchivesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      
      {/* ── ARCHIVE MASTHEAD ── */}
      <div className="border-b-2 border-black pb-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#EFECE6] px-2 py-0.5 border border-[#DCD6CD]">
              Serial Issue Repository
            </span>
            <span className="text-xs font-mono text-[#525252]">
              PERMANENT BIBLIOGRAPHIC RECORD
            </span>
          </div>
          <div className="text-xs font-mono text-[#525252]">
            ISSN Pending • CC BY 4.0 Open Access
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          Serial Issue Archives
        </h1>
        <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-3xl font-sans">
          The permanent catalog of peer-reviewed digital serial editions published by The Builder Protocol. All issues are fully open-access, citable, and archived for ongoing research and builder reference.
        </p>
      </div>

      {/* ── ISSUES LIST ── */}
      <div className="space-y-12">
        {SERIAL_ISSUES.map((issue) => (
          <article 
            key={issue.pubId}
            className="border border-[#DCD6CD] bg-white shadow-sm overflow-hidden"
          >
            {/* Academic Header Band */}
            <div className="bg-[#F4F1EA] border-b border-[#DCD6CD] p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-bold text-black bg-white px-2 py-0.5 border border-[#DCD6CD]">
                  {issue.pubId}
                </span>
                <span className="text-black font-semibold">
                  {issue.volume}, {issue.issue}
                </span>
                <span className="text-[#DCD6CD]">|</span>
                <span className="text-[#525252]">
                  {issue.date}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-black uppercase bg-[#E5E0D8] px-2 py-0.5 border border-[#DCD6CD]">
                  <CheckCircle2 size={12} />
                  Open Access Marked
                </span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-6 sm:p-8">
              <div className="max-w-4xl">
                <div className="text-xs font-mono text-[#737373] uppercase tracking-wider mb-2">
                  {issue.category}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black leading-tight mb-3">
                  {issue.title}
                </h2>

                <p className="text-sm sm:text-base text-[#1A1A1A] font-sans leading-relaxed mb-5">
                  {issue.subtitle}
                </p>

                <div className="bg-[#FAF9F6] border border-[#DCD6CD] p-4 sm:p-5 mb-6 text-xs sm:text-sm text-[#525252] leading-relaxed font-sans">
                  <span className="text-black font-bold font-mono uppercase text-xs block mb-1">
                    EXECUTIVE ABSTRACT:
                  </span>
                  {issue.abstract}
                </div>

                {/* Table of Contents / Articles in Issue */}
                <div className="mb-6">
                  <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-black border-b border-[#DCD6CD] pb-2 mb-3">
                    Monographs & Technical Articles in this Issue
                  </h3>
                  <div className="divide-y divide-[#DCD6CD] border border-[#DCD6CD] bg-[#FAF9F6]">
                    {issue.articles.map((art, aIdx) => (
                      <div key={aIdx} className="p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider block sm:inline sm:mr-3">
                            [{art.type}]
                          </span>
                          <span className="font-semibold text-black hover:underline cursor-pointer">
                            {art.title}
                          </span>
                          <span className="text-[#525252] block sm:inline sm:ml-2">
                            — {art.author}
                          </span>
                        </div>
                        <span className="font-mono text-[#737373] flex-shrink-0">
                          {art.pages}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions & Attribution */}
                <div className="pt-4 border-t border-[#DCD6CD] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#525252]">
                    Lead Author: <strong className="text-black">{issue.leadAuthor}</strong>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:editorial@thebuilderprotocol.me?subject=Citation Request for Issue"
                      className="px-3 py-1.5 bg-[#F4F1EA] text-black border border-[#DCD6CD] hover:border-black text-xs font-mono transition-all flex items-center gap-1.5"
                    >
                      <BookOpen size={13} />
                      Cite Issue (BibTeX)
                    </a>
                    <a
                      href="mailto:editorial@thebuilderprotocol.me?subject=Full Issue PDF Request"
                      className="px-4 py-1.5 bg-black text-white hover:bg-[#1A1A1A] text-xs font-mono transition-all flex items-center gap-1.5"
                    >
                      <Download size={13} />
                      Download Monograph PDF
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── FORTHCOMING ISSUE SLAT ── */}
      <div className="mt-12 border-2 border-dashed border-[#DCD6CD] bg-[#F4F1EA] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-black uppercase bg-white border border-[#DCD6CD] px-2 py-0.5 inline-block mb-1">
            FORTHCOMING EDITION • ISSUE 03
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-black">
            Volume 1, Issue 03 (September/October 2026)
          </h3>
          <p className="text-xs sm:text-sm text-[#525252] mt-1 font-sans">
            Currently undergoing double-blind peer review. Covering autonomous multi-agent pipelines, localized Indian developer infrastructure, and next-gen hardware accelerators.
          </p>
        </div>
        <a
          href="mailto:editorial@thebuilderprotocol.me?subject=Early Access Inquiry - Issue 03"
          className="flex-shrink-0 px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold bg-white text-black border border-black hover:bg-black hover:text-white transition-all"
        >
          Request Early Notification
        </a>
      </div>

    </div>
  );
}
