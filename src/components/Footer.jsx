import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const FOOTER_COLUMNS = [
  {
    title: 'PUBLICATION',
    links: [
      { label: 'Journal',   view: 'home' },
      { label: 'Playbooks', view: 'archives' },
      { label: 'Systems',   view: 'ideathon' },
      { label: 'About',     view: 'contact' },
    ],
  },
  {
    title: 'ISSUES',
    links: [
      { label: 'Issue 02 — Aug 2026',       view: 'archives' },
      { label: 'Issue 01 — Apr 2026',       view: 'archives' },
      { label: 'Subscribe for Issue 03',    view: 'contact'  },
    ],
  },
  {
    title: 'RESEARCH SCOPE',
    links: [
      { label: 'AI Engineering Frameworks',      view: 'archives' },
      { label: 'Computer Vision Architectures',  view: 'archives' },
      { label: 'Zero-Budget Startup Strategy',   view: 'archives' },
      { label: 'Open Source Ecosystem',          view: 'archives' },
    ],
  },
  {
    title: 'LEGAL & COMPLIANCE',
    links: [
      { label: 'ISSN Registration (Pending)',  view: 'home' },
      { label: 'Open Access Policy',          view: 'home' },
      { label: 'Editorial Standards',         view: 'home' },
      { label: 'CSIR-NIScPR Compliance',      view: 'home' },
    ],
  },
];

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const handleNav = (view) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#000', color: '#F4F4F0', borderTop: '3px solid #000' }}>

      {/* ── MAIN FOOTER GRID ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          borderBottom: '2px solid rgba(255,255,255,0.15)',
        }}
        className="footer-main-grid"
      >
        {/* Brand block */}
        <div style={{ padding: '2.5rem 2rem', borderRight: '2px solid rgba(255,255,255,0.15)' }}>
          <button
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', marginBottom: '1rem' }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: '0.9375rem',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#F4F4F0',
                lineHeight: 1.3,
              }}
            >
              THE BUILDER<br />PROTOCOL
            </div>
          </button>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
            }}
          >
            An open-access monthly digital serial publication tracking advanced AI engineering frameworks,
            computer vision architectures, and zero-budget startup execution strategies.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F4F4F0', display: 'inline-block' }} />
            <span className="nb-label" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.5625rem' }}>
              PUBLISHED MONTHLY · CURATED WITH OBSESSION
            </span>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.625rem' }}>
            {[
              { href: 'https://github.com/AFSAL-AHMED',          icon: <Github size={15} />,   label: 'GitHub' },
              { href: 'https://linkedin.com/in/afsal-ahmed-s',   icon: <Linkedin size={15} />, label: 'LinkedIn' },
              { href: 'mailto:24cs@stjosephs.tech.sc.in',        icon: <Mail size={15} />,     label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                className="footer-social-icon"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Sitemap columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '2.5rem 2rem',
            gap: '1.5rem',
          }}
          className="footer-sitemap-grid"
        >
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="nb-label" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.5625rem', marginBottom: '1rem' }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.view)}
                      className="nb-footer-link"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          padding: '1rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          <span className="nb-label" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.5625rem' }}>
            © {year} THE BUILDER PROTOCOL
          </span>
          <span className="nb-label" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.5625rem' }}>
            PUBLISHER: AFSAL AHMED S
          </span>
          <span className="nb-label" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.5625rem' }}>
            24cs@stjosephs.tech.sc.in
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className="nb-tag" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)', fontSize: '0.5rem' }}>
            OPEN ACCESS
          </span>
          <span className="nb-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.4)', fontSize: '0.5rem' }}>
            v2.0.0
          </span>
        </div>
      </div>

      <style>{`
        .nb-footer-link:hover { color: #F4F4F0 !important; }
        .footer-social-icon:hover { border-color: rgba(255,255,255,0.6) !important; color: #F4F4F0 !important; }
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
          .footer-main-grid > div:first-child { border-right: none !important; border-bottom: 2px solid rgba(255,255,255,0.15); }
          .footer-sitemap-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-sitemap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
