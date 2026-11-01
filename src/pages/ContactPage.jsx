import { useState } from 'react';
import { Send, CheckCircle, Terminal, Mail, User, FileText, AlertCircle } from 'lucide-react';

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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    affiliation: '',
    type: '',
    scope: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.scope) return;
    setStatus('sending');
    // Simulate submission (replace with actual endpoint)
    setTimeout(() => setStatus('sent'), 1800);
  };

  const isValid = form.name && form.email && form.scope;

  return (
    <div className="min-h-screen grid-bg pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-cyan">COMMUNICATIONS GATEWAY</span>
            <span className="badge badge-slate">SUBMISSION PROTOCOL</span>
          </div>
          <h1 className="display-lg text-white mb-4">
            Initiate a{' '}
            <span style={{ color: '#00F0FF' }}>Transmission</span>
          </h1>
          <p className="text-muted max-w-2xl">
            Structured intake portal for research manuscripts, editorial inquiries, and
            collaboration requests. All submissions are reviewed by the editorial board
            within 72 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── FORM PANEL (3/5 width) ── */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="card-base p-10 text-center flex flex-col items-center gap-5"
                style={{ borderColor: 'rgba(0,240,255,0.2)', background: 'rgba(0,240,255,0.02)' }}>
                <div className="w-16 h-16 rounded-full bg-cyan-neon/10 border border-cyan-500/30 flex items-center justify-center"
                  style={{ boxShadow: '0 0 30px rgba(0,240,255,0.2)' }}>
                  <CheckCircle size={32} style={{ color: '#00F0FF' }} />
                </div>
                <h3 className="font-bold text-xl text-white">Transmission Received</h3>
                <p className="text-muted max-w-sm text-sm">
                  Your submission has been logged in our editorial queue. Expect a response to{' '}
                  <span style={{ color: '#00F0FF' }}>{form.email}</span>{' '}
                  within 72 business hours.
                </p>
                <div className="font-mono text-xs text-muted border border-white/5 rounded px-4 py-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  TICKET_REF: TBP-{Date.now().toString(36).toUpperCase().slice(-6)}
                </div>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', affiliation: '', type: '', scope: '' }); }}
                  className="btn-secondary text-sm"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Researcher Identity */}
                <div>
                  <label className="block label-mono text-muted mb-2" htmlFor="name">
                    <User size={11} className="inline mr-1.5 mb-0.5" />
                    RESEARCHER IDENTITY *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name / Preferred handle"
                    className="input-field"
                    required
                  />
                </div>

                {/* Return Institutional Node */}
                <div>
                  <label className="block label-mono text-muted mb-2" htmlFor="email">
                    <Mail size={11} className="inline mr-1.5 mb-0.5" />
                    RETURN INSTITUTIONAL NODE (EMAIL) *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@institution.edu"
                    className="input-field"
                    required
                  />
                </div>

                {/* Affiliation */}
                <div>
                  <label className="block label-mono text-muted mb-2" htmlFor="affiliation">
                    <Terminal size={11} className="inline mr-1.5 mb-0.5" />
                    INSTITUTIONAL AFFILIATION
                  </label>
                  <input
                    id="affiliation"
                    name="affiliation"
                    type="text"
                    value={form.affiliation}
                    onChange={handleChange}
                    placeholder="University / Company / Independent"
                    className="input-field"
                  />
                </div>

                {/* Submission Type */}
                <div>
                  <label className="block label-mono text-muted mb-2" htmlFor="type">
                    <FileText size={11} className="inline mr-1.5 mb-0.5" />
                    TRANSMISSION TYPE
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="input-field"
                    style={{ appearance: 'none' }}
                  >
                    <option value="">Select submission category...</option>
                    {SUBMISSION_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Manuscript Scope */}
                <div>
                  <label className="block label-mono text-muted mb-2" htmlFor="scope">
                    <FileText size={11} className="inline mr-1.5 mb-0.5" />
                    TECHNICAL MANUSCRIPT SCOPE *
                  </label>
                  <textarea
                    id="scope"
                    name="scope"
                    value={form.scope}
                    onChange={handleChange}
                    placeholder="Describe your manuscript, research topic, question, or collaboration request. Be specific about scope, methodology, and what you're looking to achieve..."
                    className="input-field"
                    rows={6}
                    required
                  />
                </div>

                {/* Editorial Guidelines note */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white/3 border border-white/5">
                  <AlertCircle size={14} className="text-muted flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted leading-relaxed">
                    Submissions must fall within our editorial scope: AI engineering, computer vision,
                    or startup strategy. We do not accept promotional or marketing-only content.
                    Read our{' '}
                    <span className="text-cyan cursor-pointer hover:underline" style={{ color: '#00F0FF' }}>
                      Editorial Standards
                    </span>{' '}
                    before submitting.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-transmission-btn"
                  disabled={!isValid || status === 'sending'}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={2.5} />
                      Send Transmission
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── INFO SIDEBAR (2/5 width) ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Direct Contact */}
            <div className="card-base p-5">
              <div className="label-mono text-cyan mb-4" style={{ color: 'var(--cyan-neon)' }}>
                DIRECT CONTACT NODES
              </div>
              <div className="space-y-4">
                {[
                  {
                    role: 'Editor-in-Chief',
                    name: 'Afsal Ahmed S',
                    email: '24cs@stjosephs.tech.sc.in',
                    tag: 'PRIMARY',
                  },
                  {
                    role: 'Editorial Inquiries',
                    name: 'The Builder Protocol',
                    email: 'editorial@thebuilderprotocol.me',
                    tag: 'EDITORIAL',
                  },
                ].map((contact) => (
                  <div key={contact.tag} className="p-3.5 rounded-lg bg-white/3 border border-white/5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-white">{contact.name}</span>
                      <span className="badge badge-slate">{contact.tag}</span>
                    </div>
                    <div className="text-xs text-muted mb-1.5">{contact.role}</div>
                    <a href={`mailto:${contact.email}`} className="text-xs font-mono hover:underline"
                      style={{ color: '#00F0FF', fontFamily: "'JetBrains Mono', monospace" }}>
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Review SLA */}
            <div className="card-base p-5">
              <div className="label-mono text-cyan mb-4" style={{ color: 'var(--cyan-neon)' }}>
                REVIEW PIPELINE SLA
              </div>
              <div className="space-y-3">
                {[
                  ['Initial Acknowledgement', '< 24 hours'],
                  ['Editorial Review', '72 business hours'],
                  ['Revision Feedback', '5-7 business days'],
                  ['Publication Decision', '2-3 weeks'],
                ].map(([stage, time]) => (
                  <div key={stage} className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <span className="text-muted">{stage}</span>
                    <span className="font-mono text-white/80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We're Looking For */}
            <div className="card-base p-5">
              <div className="label-mono text-amethyst mb-4" style={{ color: 'var(--amethyst)' }}>
                EDITORIAL PRIORITY QUEUE
              </div>
              <ul className="space-y-2.5">
                {[
                  'AI agent architecture deep-dives',
                  'Startup post-mortems with data',
                  'Open source tool engineering breakdowns',
                  'Computer vision pipeline case studies',
                  'Zero-budget growth strategy playbooks',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted">
                    <span className="text-cyan mt-0.5 flex-shrink-0" style={{ color: 'var(--cyan-neon)' }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
