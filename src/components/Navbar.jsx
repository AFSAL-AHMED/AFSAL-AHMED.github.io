import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',       label: 'CORE_INDEX' },
  { id: 'archives',  label: 'ARTIFACT_ARCHIVES' },
  { id: 'ideathon',  label: 'IDEATHON_HUB' },
  { id: 'contact',   label: 'COMMS_GATEWAY' },
];

export default function Navbar({ activeView, onNavigate }) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">

          {/* ── STATUS INDICATOR ── */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="relative flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot block" />
              <span className="label-mono text-green-400 hidden sm:block">SYS_NODE: ACTIVE</span>
            </div>
          </div>

          {/* ── MASTER TITLE ── */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group cursor-pointer"
            aria-label="Go to homepage"
          >
            <div className="w-7 h-7 rounded border border-cyan-500/30 flex items-center justify-center bg-cyan-neon/5 group-hover:border-cyan-neon/50 transition-colors">
              <span className="font-mono text-xs font-bold text-cyan">TB</span>
            </div>
            <span
              className="font-mono font-bold text-sm sm:text-base tracking-wider text-white/90 group-hover:text-cyan transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              THE_BUILDER_PROTOCOL<span className="text-cyan">.ME</span>
            </span>
          </button>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`nav-link ${activeView === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ── CTA BUTTON + MOBILE TOGGLE ── */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('ideathon')}
              className="btn-amethyst hidden sm:inline-flex text-xs"
            >
              <Zap size={13} strokeWidth={2.5} />
              IDEATHON
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md border border-white/8 hover:border-white/15 transition-colors text-white/60 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/5 flex flex-col gap-1 pb-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-3 py-2.5 rounded-md label-mono transition-colors ${
                  activeView === item.id
                    ? 'text-cyan bg-cyan-neon/5'
                    : 'text-muted hover:text-white/80 hover:bg-white/3'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('ideathon')}
              className="mt-2 btn-amethyst text-xs"
            >
              <Zap size={13} strokeWidth={2.5} />
              ACCESS IDEATHON PORTAL
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
