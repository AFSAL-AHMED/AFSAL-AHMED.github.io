import { Mail, Globe, ExternalLink, ShieldCheck, BookOpen, GitBranch } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F1EA] border-t-2 border-black text-[#1A1A1A] mt-24">
      {/* Top Academic Banner */}
      <div className="border-b border-[#DCD6CD] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-serif text-2xl font-bold tracking-tight text-black">
              THE BUILDER PROTOCOL
            </div>
            <p className="text-xs font-mono text-[#525252] mt-0.5">
              An Open-Access, Peer-Reviewed Digital Serial Publication • Serial Identification Code: eISSN Pending
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#DCD6CD] rounded text-xs font-mono text-black">
              <ShieldCheck size={14} className="text-black" />
              CSIR-NIScPR Compliance Frame
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Institutional Node & Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-black pb-2 mb-3 border-b border-[#DCD6CD]">
              Central Publication Node
            </h4>
            <div className="text-xs text-[#525252] space-y-2 font-mono">
              <p>
                <span className="text-black font-semibold block">Editorial Office:</span>
                <a 
                  href="mailto:editorial@thebuilderprotocol.me" 
                  className="text-black underline hover:text-[#525252]"
                >
                  editorial@thebuilderprotocol.me
                </a>
              </p>
              <p>
                <span className="text-black font-semibold block">Publisher & EIC:</span>
                Afsal Ahmed S (Dept of CSE, SJIT)
              </p>
              <p>
                <span className="text-black font-semibold block">Institutional Node:</span>
                <a 
                  href="mailto:24cs@stjosephs.tech.sc.in" 
                  className="text-black underline hover:text-[#525252]"
                >
                  24cs@stjosephs.tech.sc.in
                </a>
              </p>
              <p className="pt-2 text-[11px] text-[#737373]">
                St. Joseph’s Institute of Technology, Chennai, India
              </p>
            </div>
          </div>

          {/* Editorial & Scope */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-black pb-2 mb-3 border-b border-[#DCD6CD]">
              Editorial Scope
            </h4>
            <ul className="text-xs text-[#525252] space-y-2">
              <li>
                <button 
                  onClick={() => { onNavigate('archives'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left"
                >
                  Advanced AI Engineering Frameworks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('archives'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left"
                >
                  Computer Vision & Edge Architectures
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('archives'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left"
                >
                  Zero-to-One Technical Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('archives'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left"
                >
                  Open-Source Systems Infrastructure
                </button>
              </li>
            </ul>
          </div>

          {/* Catalog & Archives */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-black pb-2 mb-3 border-b border-[#DCD6CD]">
              Serial Repository
            </h4>
            <ul className="text-xs font-mono text-[#525252] space-y-2">
              <li>
                <button 
                  onClick={() => { onNavigate('archives'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left block"
                >
                  Volume 1, Issue 02 (August 2026)
                  <span className="text-[10px] text-[#737373] block">PUB ID: TBP•2026•02</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('archives'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left block"
                >
                  Volume 1, Issue 01 (April 2026)
                  <span className="text-[10px] text-[#737373] block">PUB ID: TBP•2026•01</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('ideathon'); window.scrollTo(0, 0); }} 
                  className="hover:text-black underline text-left block text-[#1A1A1A] font-medium"
                >
                  Ideathon 2026 Portal & Submissions
                </button>
              </li>
            </ul>
          </div>

          {/* Open Access & Legal */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-black pb-2 mb-3 border-b border-[#DCD6CD]">
              Academic Governance
            </h4>
            <div className="text-xs text-[#525252] space-y-2 font-mono">
              <p>
                <span className="text-black font-semibold block">Open Access Statement:</span>
                Published under Creative Commons Attribution 4.0 International (CC BY 4.0).
              </p>
              <p>
                <span className="text-black font-semibold block">Archival Policy:</span>
                Permanent digital preservation via GitHub Pages repository and institutional storage nodes.
              </p>
              <p>
                <span className="text-black font-semibold block">Peer Review:</span>
                Double-blind and open editorial board technical review.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#DCD6CD] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#737373] gap-4">
          <div>
            © {currentYear} The Builder Protocol. All published works remain open access.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/AFSAL-AHMED/AFSAL-AHMED.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black flex items-center gap-1"
            >
              <GitBranch size={13} />
              Repository Source
            </a>
            <a 
              href="mailto:editorial@thebuilderprotocol.me" 
              className="hover:text-black"
            >
              editorial@thebuilderprotocol.me
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
