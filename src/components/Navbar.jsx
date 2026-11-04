import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',      label: 'JOURNAL' },
  { id: 'archives',  label: 'PLAYBOOKS' },
  { id: 'ideathon',  label: 'SYSTEMS' },
  { id: 'contact',   label: 'ABOUT' },
];

export default function Navbar({ activeView, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="nb-nav-wrapper">
      {/* ── TOP BAR: logo + status ── */}
      <div className="nb-nav-topbar">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="cursor-pointer"
          aria-label="Go to homepage"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#000',
              lineHeight: 1,
            }}
          >
            THE BUILDER PROTOCOL
          </span>
        </button>

        {/* Right side — status + mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#000',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span className="nb-label-sm nb-label" style={{ color: '#000', display: 'none' }}
              id="status-label">
              PUBLISHING MONTHLY
            </span>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNav('ideathon')}
            className="nb-btn nb-btn-filled"
            style={{ padding: '0.45rem 1rem', fontSize: '0.6rem', display: 'none' }}
            id="ideathon-cta-nav"
          >
            IDEATHON OPEN →
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: '2px solid #000',
              padding: '0.3rem 0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? <X size={18} color="#000" /> : <Menu size={18} color="#000" />}
          </button>
        </div>
      </div>

      {/* ── LINK BAR: nav items — heavy horizontal bar ── */}
      <nav className="nb-nav-linkbar hidden lg:flex">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className={`nb-nav-link ${activeView === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
        {/* Filler */}
        <div style={{ flex: 1, borderLeft: '0px solid #000' }} />
        {/* Right-side CTA in link bar */}
        <button
          onClick={() => handleNav('ideathon')}
          style={{
            padding: '0 1.5rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#F4F4F0',
            background: '#000',
            border: 'none',
            borderLeft: '2px solid #000',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            whiteSpace: 'nowrap',
          }}
        >
          IDEATHON OPEN →
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="nb-mobile-menu lg:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`nb-mobile-link ${activeView === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('ideathon')}
            className="nb-mobile-link"
            style={{ background: '#000', color: '#F4F4F0' }}
          >
            IDEATHON OPEN →
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          #status-label { display: inline !important; }
        }
      `}</style>
    </header>
  );
}
