import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const SUBMISSION_TYPES = [
  'Technical Manuscript (Research Article)',
  'Case Study Submission',
  'Open Source Project Feature',
  'Guest Editorial / Opinion',
  'Interview Request',
  'Partnership Inquiry',
  'Press & Media Contact',
  'Other',
];

const CONTACTS = [
  { role: 'Editor-in-Chief',    name: 'Afsal Ahmed S',          email: '24cs@stjosephs.tech.sc.in',          tag: 'PRIMARY'  },
  { role: 'Editorial Inquiries', name: 'The Builder Protocol',  email: 'editorial@thebuilderprotocol.me',     tag: 'EDITORIAL' },
];

const SLA = [
  ['Initial Acknowledgement', '< 24 hours'],
  ['Editorial Review',         '72 business hours'],
  ['Revision Feedback',        '5–7 business days'],
  ['Publication Decision',     '2–3 weeks'],
];

const PRIORITIES = [
  'AI agent architecture deep-dives',
  'Startup post-mortems with data',
  'Open source tool engineering breakdowns',
  'Computer vision pipeline case studies',
  'Zero-budget growth strategy playbooks',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', affiliation: '', type: '', scope: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.scope) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  const isValid = form.name && form.email && form.scope;

  return (
    <div style={{ background: '#F4F4F0', minHeight: '100vh' }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ borderBottom: '3px solid #000' }}>
        <div style={{ borderBottom: '2px solid #000', padding: '0.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="nb-tag nb-tag-filled">ABOUT</span>
          <span className="nb-tag">SUBMISSION PROTOCOL</span>
        </div>
        <div style={{ padding: '2.5rem 2rem 2rem' }}>
          <h1 className="nb-display-xl" style={{ marginBottom: '0.75rem' }}>
            Initiate a<br />Transmission
          </h1>
          <p className="nb-body" style={{ maxWidth: 540 }}>
            Structured intake portal for research manuscripts, editorial inquiries, and
            collaboration requests. All submissions are reviewed by the editorial board
            within 72 business hours.
          </p>
        </div>
      </div>

      {/* ── MAIN GRID: form (3/5) + sidebar (2/5) ── */}
      <div
        style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', borderBottom: '3px solid #000' }}
        className="contact-grid"
      >

        {/* ── FORM PANEL ── */}
        <div style={{ padding: '2.5rem 2rem', borderRight: '2px solid #000' }}>

          {status === 'sent' ? (
            /* Success state */
            <div
              className="nb-block"
              style={{ padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: '2px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle size={28} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p className="nb-body-sm" style={{ maxWidth: 360 }}>
                  Your submission has been logged in our editorial queue.
                  Expect a response to <strong>{form.email}</strong> within 72 business hours.
                </p>
              </div>
              <div
                className="nb-block"
                style={{ padding: '0.5rem 1rem', background: '#000', color: '#F4F4F0' }}
              >
                <span className="nb-label" style={{ color: '#F4F4F0', fontSize: '0.6rem' }}>
                  TICKET_REF: TBP-{Date.now().toString(36).toUpperCase().slice(-6)}
                </span>
              </div>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', affiliation: '', type: '', scope: '' }); }}
                className="nb-btn"
              >
                SUBMIT ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} noValidate>

              {/* Name */}
              <div>
                <label className="nb-label" style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="name">
                  RESEARCHER IDENTITY *
                </label>
                <input
                  id="name" name="name" type="text"
                  value={form.name} onChange={handleChange}
                  placeholder="Full name / Preferred handle"
                  className="nb-input" required
                />
              </div>

              {/* Email */}
              <div>
                <label className="nb-label" style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="email">
                  RETURN INSTITUTIONAL NODE (EMAIL) *
                </label>
                <input
                  id="email" name="email" type="email"
                  value={form.email} onChange={handleChange}
                  placeholder="you@institution.edu"
                  className="nb-input" required
                />
              </div>

              {/* Affiliation */}
              <div>
                <label className="nb-label" style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="affiliation">
                  INSTITUTIONAL AFFILIATION
                </label>
                <input
                  id="affiliation" name="affiliation" type="text"
                  value={form.affiliation} onChange={handleChange}
                  placeholder="University / Company / Independent"
                  className="nb-input"
                />
              </div>

              {/* Type */}
              <div>
                <label className="nb-label" style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="type">
                  TRANSMISSION TYPE
                </label>
                <select
                  id="type" name="type"
                  value={form.type} onChange={handleChange}
                  className="nb-input"
                >
                  <option value="">Select submission category...</option>
                  {SUBMISSION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Scope */}
              <div>
                <label className="nb-label" style={{ display: 'block', marginBottom: '0.5rem' }} htmlFor="scope">
                  TECHNICAL MANUSCRIPT SCOPE *
                </label>
                <textarea
                  id="scope" name="scope"
                  value={form.scope} onChange={handleChange}
                  placeholder="Describe your manuscript, research topic, question, or collaboration request. Be specific about scope, methodology, and what you're looking to achieve..."
                  className="nb-input"
                  rows={6} required
                />
              </div>

              {/* Guidelines note */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  border: '1.5px solid rgba(0,0,0,0.3)',
                  background: 'rgba(0,0,0,0.03)',
                }}
              >
                <AlertCircle size={14} style={{ flexShrink: 0, marginTop: '1px' }} />
                <p className="nb-body-sm">
                  Submissions must fall within our editorial scope: AI engineering, computer vision,
                  or startup strategy. We do not accept promotional or marketing-only content.
                  Read our{' '}
                  <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Editorial Standards</span>
                  {' '}before submitting.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="submit-transmission-btn"
                disabled={!isValid || status === 'sending'}
                className="nb-btn nb-btn-filled"
                style={{
                  justifyContent: 'center',
                  padding: '1rem',
                  fontSize: '0.75rem',
                  opacity: (!isValid || status === 'sending') ? 0.4 : 1,
                  cursor: (!isValid || status === 'sending') ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <span style={{ width: 14, height: 14, border: '2px solid #F4F4F0', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                    TRANSMITTING...
                  </>
                ) : (
                  <><Send size={14} /> SEND TRANSMISSION</>
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ padding: '2.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* Direct contacts */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="nb-label" style={{ marginBottom: '1rem' }}>DIRECT CONTACT NODES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {CONTACTS.map((c, i) => (
                <div
                  key={c.tag}
                  style={{
                    padding: '1rem',
                    border: '2px solid #000',
                    marginTop: i === 0 ? 0 : '-2px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.875rem' }}>{c.name}</span>
                    <span className="nb-tag" style={{ fontSize: '0.5rem' }}>{c.tag}</span>
                  </div>
                  <div className="nb-label" style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.5rem', marginBottom: '0.3rem' }}>{c.role}</div>
                  <a
                    href={`mailto:${c.email}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: '#000', textDecoration: 'underline' }}
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <hr className="nb-rule" style={{ marginBottom: '2rem' }} />

          {/* SLA */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="nb-label" style={{ marginBottom: '1rem' }}>REVIEW PIPELINE SLA</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {SLA.map(([stage, time], i) => (
                <div
                  key={stage}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 0',
                    borderBottom: i < SLA.length - 1 ? '1px solid rgba(0,0,0,0.12)' : 'none',
                  }}
                >
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'rgba(0,0,0,0.6)' }}>{stage}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.75rem' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="nb-rule" style={{ marginBottom: '2rem' }} />

          {/* Priority queue */}
          <div>
            <div className="nb-label" style={{ marginBottom: '1rem' }}>EDITORIAL PRIORITY QUEUE</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {PRIORITIES.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.8125rem',
                    color: 'rgba(0,0,0,0.75)',
                  }}
                >
                  <span style={{ fontWeight: 700, flexShrink: 0 }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid > div:first-child { border-right: none !important; border-bottom: 2px solid #000; }
        }
      `}</style>
    </div>
  );
}
