import { ArrowRight, BookOpen, FileText, CheckCircle2, ShieldCheck, Mail, Users, ExternalLink, Calendar, BookmarkCheck } from 'lucide-react';

const BOARD_MEMBERS = [
  {
    role: 'Publisher & Editor-in-Chief',
    name: 'Afsal Ahmed S',
    dept: 'Dept of CSE, St. Joseph’s Institute of Technology',
    email: 'editorial@thebuilderprotocol.me',
    institutionalEmail: '24cs@stjosephs.tech.sc.in',
    badge: 'PUBLISHER / EIC',
    isPrimary: true,
  },
  {
    role: 'Lead Technical Reviewer',
    name: '[Friend 1 Name]',
    dept: 'Dept of CSE, SJIT',
    email: '[id1]@stjosephs.tech.sc.in',
    institutionalEmail: '[id1]@stjosephs.tech.sc.in',
    badge: 'PEER REVIEW',
    isPrimary: false,
  },
  {
    role: 'Systems Architecture Editor',
    name: '[Friend 2 Name]',
    dept: 'Dept of CSE, SJIT',
    email: '[id2]@stjosephs.tech.sc.in',
    institutionalEmail: '[id2]@stjosephs.tech.sc.in',
    badge: 'ARCHITECTURE',
    isPrimary: false,
  },
  {
    role: 'Ecosystem Distribution Lead',
    name: '[Friend 3 Name]',
    dept: 'Dept of CSE, SJIT',
    email: '[id3]@stjosephs.tech.sc.in',
    institutionalEmail: '[id3]@stjosephs.tech.sc.in',
    badge: 'DISTRIBUTION',
    isPrimary: false,
  },
  {
    role: 'Operations Coordinator',
    name: '[Friend 4 Name]',
    dept: 'Dept of CSE, SJIT',
    email: '[id4]@stjosephs.tech.sc.in',
    institutionalEmail: '[id4]@stjosephs.tech.sc.in',
    badge: 'OPERATIONS',
    isPrimary: false,
  },
];

const RESEARCH_TRACKS = [
  {
    code: 'TRACK-01',
    title: 'Advanced AI Engineering Frameworks',
    scope: 'Production LLM inference optimization, autonomous multi-agent state machines, context retrieval architectures, and real-time inference latency minimization.',
  },
  {
    code: 'TRACK-02',
    title: 'Computer Vision & Edge Pipelines',
    scope: 'SOTA edge vision deployment, real-time object detection models, embedded sensor integration, and sparse model parameter quantization.',
  },
  {
    code: 'TRACK-03',
    title: 'Zero-Budget Startup Execution & Optimization',
    scope: 'Forensic architecture case studies, infrastructure cost curves, rapid validation loops, and engineering strategies for lean software builders.',
  },
  {
    code: 'TRACK-04',
    title: 'Open-Source Systems Infrastructure',
    scope: 'Native compiler runtimes, CLI tooling architecture, decentralized node networks, and developer infrastructure benchmarking.',
  },
];

export default function HomePage({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      
      {/* ──────────────────────────────────────────────────────────── */}
      {/* AUDIT COMPLIANCE BANNER — CSIR-NIScPR REVIEW FRAMEWORK      */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="bg-[#F4F1EA] border border-[#DCD6CD] p-4 sm:p-5 mb-10 rounded-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-black inline-block rounded-full"></span>
            <span className="font-bold text-black uppercase tracking-wider">
              National Science Library (CSIR-NIScPR) Compliance Frame
            </span>
            <span className="text-[#DCD6CD] hidden sm:inline">|</span>
            <span className="text-[#525252]">Digital Serial Audit Protocol</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[#525252]">
            <span>eISSN: <strong className="text-black">Pending</strong></span>
            <span>Frequency: <strong className="text-black">Monthly</strong></span>
            <span>Access: <strong className="text-black">Open (CC BY 4.0)</strong></span>
            <span>Format: <strong className="text-black">Online / Digital</strong></span>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. MANDATORY SECTION: AIMS & SCOPE                          */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="mb-14 border border-[#DCD6CD] bg-white p-6 sm:p-10 shadow-sm relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
        <div className="flex items-center justify-between border-b border-[#DCD6CD] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-black" />
            <h2 className="font-sans text-xs uppercase tracking-widest font-bold text-black">
              Section 1.0 • Publication Mandate & Scope
            </h2>
          </div>
          <span className="text-xs font-mono text-[#525252]">STATUTORY AUDIT LOG #2026-TBP</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight mb-4">
              Aims & Scope
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-sans mb-6 bg-[#FAF9F6] p-5 border-l-4 border-black border-y border-r border-[#DCD6CD]">
              "The Builder Protocol is an open-access, peer-reviewed digital serial publication engineered explicitly for next-generation software engineers, student builders, and early-stage technology founders. Our editorial mission focuses on tracking advanced AI engineering frameworks, computer vision architectures, and open-source infrastructure models. The journal mandates a strict focus on rapid, empirical execution rules over abstract theory, providing independent creators with citable software optimization playbooks on a recurring monthly cycle."
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <span className="bg-[#F4F1EA] border border-[#DCD6CD] px-2.5 py-1 text-black">
                Target Audience: Computer Science Researchers, Builders & Technical Founders
              </span>
              <span className="bg-[#F4F1EA] border border-[#DCD6CD] px-2.5 py-1 text-black">
                Peer Review: Double-Blind Technical Review
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F4F1EA] p-5 border border-[#DCD6CD] space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-black border-b border-[#DCD6CD] pb-2">
              Publication Metadata
            </h3>
            <div className="text-xs font-mono space-y-2 text-[#525252]">
              <div className="flex justify-between">
                <span>Journal Title:</span>
                <span className="text-black font-semibold text-right">The Builder Protocol</span>
              </div>
              <div className="flex justify-between">
                <span>Medium:</span>
                <span className="text-black font-semibold">Digital / Serial Online</span>
              </div>
              <div className="flex justify-between">
                <span>Publisher:</span>
                <span className="text-black font-semibold">Afsal Ahmed S</span>
              </div>
              <div className="flex justify-between">
                <span>Country of Origin:</span>
                <span className="text-black font-semibold">India (Tamil Nadu)</span>
              </div>
              <div className="flex justify-between">
                <span>Language:</span>
                <span className="text-black font-semibold">English</span>
              </div>
              <div className="flex justify-between">
                <span>First Published:</span>
                <span className="text-black font-semibold">April 2026</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#DCD6CD]">
                <span>Contact Node:</span>
                <a href="mailto:editorial@thebuilderprotocol.me" className="text-black underline font-semibold">
                  editorial@thebuilderprotocol.me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. CORPORATE MASTHEAD & 5-MEMBER STUDENT BOARD             */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="mb-14">
        <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-6">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-black" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-black">
              Corporate Masthead & Editorial Board
            </h2>
          </div>
          <span className="text-xs font-mono text-[#525252] hidden sm:inline">
            5-MEMBER STUDENT ADVISORY BOARD
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#525252] mb-6 font-sans">
          In compliance with statutory editorial governance criteria, The Builder Protocol is governed by an active editorial and review board consisting of student researchers and systems architects from the Department of Computer Science & Engineering at St. Joseph’s Institute of Technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOARD_MEMBERS.map((member, idx) => (
            <div 
              key={idx} 
              className={`border border-[#DCD6CD] p-5 bg-[#F4F1EA] relative flex flex-col justify-between ${
                member.isPrimary ? 'border-black bg-white ring-1 ring-black/10' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-white uppercase">
                    {member.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#737373]">
                    SEAT #{idx + 1}
                  </span>
                </div>

                <div className="mb-3">
                  <h3 className="font-serif text-lg font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#1A1A1A] mt-0.5 font-sans">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#525252] mt-1 font-mono">
                    {member.dept}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#DCD6CD] space-y-1 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-black">
                  <Mail size={12} className="text-[#525252]" />
                  <a href={`mailto:${member.email}`} className="hover:underline truncate">
                    {member.email}
                  </a>
                </div>
                {member.isPrimary && (
                  <div className="text-[11px] text-[#525252]">
                    Central Contact: <strong className="text-black">editorial@thebuilderprotocol.me</strong>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Institutional Contact Slot */}
          <div className="border border-dashed border-[#DCD6CD] p-5 bg-[#FAF9F6] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#E5E0D8] text-black uppercase">
                INSTITUTIONAL HQ
              </span>
              <h3 className="font-serif text-base font-bold text-black mt-3">
                Department of Computer Science & Engineering
              </h3>
              <p className="text-xs text-[#525252] mt-1">
                St. Joseph’s Institute of Technology, OMR, Chennai, Tamil Nadu — 600119, India.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#DCD6CD] text-xs font-mono">
              <span className="text-black font-semibold block">Editorial Correspondence:</span>
              <a href="mailto:editorial@thebuilderprotocol.me" className="text-black underline block truncate">
                editorial@thebuilderprotocol.me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3. CURRENT ISSUE SPOTLIGHT & ARCHIVES QUICK LINK            */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="mb-14 border border-[#DCD6CD] bg-[#F4F1EA] p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DCD6CD]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#525252] mb-1">
              <span className="text-black font-bold">LATEST SERIAL RELEASE</span>
              <span>•</span>
              <span>VOLUME 1, ISSUE 02 (AUGUST 2026)</span>
              <span>•</span>
              <span className="px-1.5 py-0.5 bg-black text-white text-[10px]">OPEN ACCESS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
              Forensic Teardown: The Structural Disintegration of Clubhouse Architecture
            </h2>
            <p className="text-sm text-[#525252] mt-2 max-w-3xl font-sans">
              A comprehensive technical post-mortem tracking the socio-technical collapse of a $4B audio platform: audio streaming infra bottlenecks, data layer leaks, and retention curve decay.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('archives')}
              className="px-5 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-2"
            >
              <span>Examine Issue 02</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => onNavigate('archives')}
              className="px-5 py-2.5 bg-white text-black border border-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#FAF9F6] transition-all"
            >
              View Repository Catalog
            </button>
          </div>
        </div>

        {/* Catalog Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-xs font-mono">
          <div>
            <span className="text-[#737373] block text-[10px] uppercase">Catalog ID</span>
            <span className="text-black font-bold">PUB ID: TBP•2026•02</span>
          </div>
          <div>
            <span className="text-[#737373] block text-[10px] uppercase">Inaugural Issue</span>
            <span className="text-black font-bold">PUB ID: TBP•2026•01</span>
          </div>
          <div>
            <span className="text-[#737373] block text-[10px] uppercase">Peer Review Protocol</span>
            <span className="text-black font-bold">Double-Blind Validated</span>
          </div>
          <div>
            <span className="text-[#737373] block text-[10px] uppercase">Editorial Oversight</span>
            <span className="text-black font-bold">5-Member Student Board</span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 4. RESEARCH COVERAGE MATRIX                                 */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="mb-14">
        <div className="border-b border-[#DCD6CD] pb-3 mb-6 flex items-center justify-between">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-black">
            Classified Research Coverage Tracks
          </h2>
          <span className="text-xs font-mono text-[#525252]">MONTHLY PUBLICATION MATRICES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {RESEARCH_TRACKS.map((track) => (
            <div key={track.code} className="border border-[#DCD6CD] bg-white p-6 hover:border-black transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-black bg-[#EFECE6] px-2 py-0.5 border border-[#DCD6CD]">
                  {track.code}
                </span>
                <span className="text-xs font-mono text-[#737373]">PEER-REVIEWED DOMAIN</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-black mb-2">
                {track.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed font-sans">
                {track.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 5. EDITORIAL SUBMISSION GUIDELINES CALLOUT                  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="border-2 border-black bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#F4F1EA] px-2 py-0.5 border border-[#DCD6CD] inline-block mb-2">
            Call for Manuscripts & Empirical Studies
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-black">
            Submit Your Technical Research for Issue 03
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] mt-1 max-w-2xl font-sans">
            We welcome technical manuscripts, architecture post-mortems, and open-source system benchmarks from student builders and independent software engineers. Submissions undergo rigorous peer review by our student review board.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="flex-shrink-0 px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#1A1A1A] transition-all"
        >
          Access Submission Gateway
        </button>
      </section>

    </div>
  );
}
