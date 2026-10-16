import { useState } from 'react';
import { Menu, X, BookOpen, ShieldCheck } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Journal Index' },
  { id: 'archives', label: 'Serial Archives' },
  { id: 'ideathon', label: 'Ideathon Hub' },
  { id: 'contact', label: 'Editorial Submissions' },
];

export default function Navbar({ activeView, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#DCD6CD] transition-all">
      {/* Top Academic Meta Banner */}
      <div className="bg-[#F4F1EA] border-b border-[#DCD6CD] text-[11px] text-[#525252] font-mono py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">A DIGITAL SERIAL PUBLICATION FOR BUILDERS</span>
            <span className="hidden sm:inline text-[#DCD6CD]">|</span>
            <span className="hidden sm:inline">PEER-REVIEWED & OPEN-ACCESS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>OFFICIAL REGISTRY: CSIR-NIScPR COMPLIANT</span>
            <span className="text-[#DCD6CD]">|</span>
            <span className="text-black font-medium">VOL. 1 • 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Masthead Title & eISSN Badge */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button
              onClick={() => handleNav('home')}
              className="text-left group cursor-pointer focus:outline-none"
              aria-label="Return to Journal Home"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-black group-hover:text-[#525252] transition-colors">
                  THE BUILDER PROTOCOL
                </span>
                <span className="hidden md:inline font-sans text-xs uppercase tracking-widest text-[#525252] font-medium">
                  Journal
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#EFECE6] text-black border border-[#DCD6CD]">
                  eISSN: Pending
                </span>
                <span className="text-[11px] font-mono text-[#737373] hidden sm:inline">
                  Ref: CSIR-NIScPR Serial Review
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-sans tracking-wide uppercase font-medium transition-all duration-150 rounded ${
                    isActive
                      ? 'text-black font-bold bg-[#EFECE6] border-b-2 border-black'
                      : 'text-[#525252] hover:text-black hover:bg-[#F4F1EA]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-white hover:bg-[#F4F1EA] border border-black shadow-sm transition-all"
            >
              <BookOpen size={13} strokeWidth={2} />
              Submit Paper
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-black hover:bg-[#F4F1EA] border border-[#DCD6CD] rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#DCD6CD] bg-[#FAF9F6] py-3 px-2 flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-3 py-2 text-sm font-sans uppercase tracking-wider font-medium rounded ${
                  activeView === item.id
                    ? 'bg-black text-white'
                    : 'text-[#1A1A1A] hover:bg-[#F4F1EA]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full text-center px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white bg-black hover:bg-[#1A1A1A]"
              >
                Submit Paper for Review
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
