import { ExternalLink, Trophy, Calendar, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

const TRACKS = [
  {
    code: 'TRACK 01',
    title: 'AI Content Engine Architecture',
    subtitle: 'System Design for Publication-Grade Technical Article Synthesis',
    description: 'Design and prototype an automated, multi-agent pipeline capable of executing autonomous technical research, source cross-referencing, benchmark synthesis, and markdown formatting suitable for peer-reviewed technical journals.',
    deliverable: 'Reproducible GitHub Repository + Systems Architecture Monograph (PDF)',
    evaluation: 'Novelty of agent orchestration, citation verification accuracy, pipeline throughput, and reproducible code.',
    award: 'Publication in Volume 1, Issue 03 + Central Contributor Byline',
  },
  {
    code: 'TRACK 02',
    title: 'Algorithmic Distribution & Technical Reach',
    subtitle: 'Data-Driven Engineering for Developer Community Knowledge Dissemination',
    description: 'Engineer a scalable, data-backed technical growth architecture for The Builder Protocol. Formulate quantitative content testing loops, technical visual assets, and developer community syndication pipelines.',
    deliverable: 'Comprehensive Empirical Strategy Monograph + 30-Day Execution Log',
    evaluation: 'Quantitative metrics, clarity of execution hypothesis, and compliance with high-prestige academic standards.',
    award: 'Ecosystem Distribution Partnership & Co-Author Byline',
  },
  {
    code: 'TRACK 03',
    title: 'Full-Length Empirical Feature Monograph',
    subtitle: 'Original Systems Research (2,500 – 4,000 Words)',
    description: 'Submit an original, peer-review-ready technical manuscript on AI engineering frameworks, computer vision pipelines, or forensic teardowns of distributed systems architectures.',
    deliverable: 'Publication-Ready Manuscript (LaTeX / Markdown / PDF)',
    evaluation: 'Technical depth, empirical verification of claims, citable references, and stylistic alignment with Harvard Business Review / MIT Tech Review standards.',
    award: 'Lead Feature Article in Volume 1, Issue 03 with Academic DOI Indexing',
  },
];

const SCHEDULE = [
  { event: 'Registration Portal Opens', date: 'October 2026', status: 'ACTIVE' },
  { event: 'Draft Submission Deadline', date: 'November 20, 2026', status: 'UPCOMING' },
  { event: 'Peer Review & Evaluation Period', date: 'November 21–28, 2026', status: 'UPCOMING' },
  { event: 'Final Publication & Award Announcements', date: 'December 01, 2026', status: 'UPCOMING' },
];

export default function IdeathonPage() {
  const formUrl = 'https://forms.gle/uSRCoR9fyRMqsFr59';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      
      {/* ── IDEATHON HEADER ── */}
      <div className="border-b-2 border-black pb-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#EFECE6] px-2 py-0.5 border border-[#DCD6CD]">
              Special Academic Initiative
            </span>
            <span className="text-xs font-mono text-[#525252]">
              ANNUAL BUILDER CHALLENGE 2026
            </span>
          </div>
          <span className="text-xs font-mono text-black font-semibold bg-[#E5E0D8] px-2 py-0.5 border border-[#DCD6CD]">
            REGISTRATION OPEN
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          The Next-Generation Media Blueprint Ideathon
        </h1>
        <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-3xl font-sans">
          A competitive technical challenge hosted by The Builder Protocol to identify and publish high-impact empirical research, AI content architectures, and developer media frameworks. Winning contributions will be published in Volume 1, Issue 03.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#1A1A1A] transition-all flex items-center gap-2"
          >
            <span>Register via Official Google Form</span>
            <ExternalLink size={14} />
          </a>
          <a
            href="mailto:editorial@thebuilderprotocol.me?subject=Ideathon Inquiry"
            className="px-5 py-3 bg-white text-black border border-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#FAF9F6] transition-all"
          >
            Contact Ideathon Committee
          </a>
        </div>
      </div>

      {/* ── TIMELINE BAR ── */}
      <div className="border border-[#DCD6CD] bg-[#F4F1EA] p-5 mb-12">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-3">
          Statutory Schedule & Key Milestones
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SCHEDULE.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#DCD6CD] p-3 text-xs">
              <span className="text-[10px] font-mono text-[#737373] uppercase block">
                {item.status}
              </span>
              <span className="font-semibold text-black block mt-0.5 font-sans">
                {item.event}
              </span>
              <span className="text-[#525252] font-mono block mt-1">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── COMPETITIVE TRACKS ── */}
      <div className="mb-14">
        <h2 className="font-serif text-2xl font-bold text-black border-b border-[#DCD6CD] pb-2 mb-6">
          Research & Submission Tracks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRACKS.map((track) => (
            <div key={track.code} className="border border-[#DCD6CD] bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#F4F1EA] text-black border border-[#DCD6CD]">
                    {track.code}
                  </span>
                  <Trophy size={14} className="text-[#525252]" />
                </div>

                <h3 className="font-serif text-xl font-bold text-black mb-1">
                  {track.title}
                </h3>
                <p className="text-xs font-semibold text-[#525252] font-sans mb-3">
                  {track.subtitle}
                </p>
                <p className="text-xs text-[#1A1A1A] leading-relaxed font-sans mb-4">
                  {track.description}
                </p>

                <div className="space-y-2 text-xs font-mono border-t border-[#DCD6CD] pt-3">
                  <div>
                    <span className="text-[#737373] block text-[10px] uppercase">Deliverable:</span>
                    <span className="text-black font-semibold">{track.deliverable}</span>
                  </div>
                  <div>
                    <span className="text-[#737373] block text-[10px] uppercase">Publication Award:</span>
                    <span className="text-black">{track.award}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DCD6CD]">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-[#F4F1EA] text-black border border-[#DCD6CD] hover:border-black text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  Apply for {track.code}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUBMISSION INSTRUCTIONS ── */}
      <div className="border border-black bg-[#F4F1EA] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-black bg-white px-2 py-0.5 border border-[#DCD6CD] inline-block mb-2">
            Central Registration Protocol
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-black">
            Ready to Submit Your Candidate Architecture?
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] mt-1 max-w-2xl font-sans">
            Use the centralized Google Form portal to register your team, declare your candidate research track, and upload your deliverable URLs for review by the 5-member student board.
          </p>
        </div>
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#1A1A1A] transition-all flex items-center gap-2"
        >
          <span>Complete Online Registration</span>
          <ExternalLink size={14} />
        </a>
      </div>

    </div>
  );
}
