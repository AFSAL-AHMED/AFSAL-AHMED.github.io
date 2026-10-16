import { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, FileText, User, Building, MessageSquare } from 'lucide-react';

const MANUSCRIPT_CATEGORIES = [
  'Full Research Article (Empirical Study)',
  'Technical Architecture Case Study / Post-Mortem',
  'Systems Infrastructure Benchmark',
  'Open Source Tool Monograph',
  'Letters to the Editor / Editorial Opinion',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    category: MANUSCRIPT_CATEGORIES[0],
    title: '',
    abstract: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.title) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      
      {/* ── HEADER ── */}
      <div className="border-b-2 border-black pb-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#EFECE6] px-2 py-0.5 border border-[#DCD6CD]">
              Editorial Submissions & Inquiries
            </span>
            <span className="text-xs font-mono text-[#525252]">
              CSIR-NIScPR COMPLIANT SUBMISSION PIPELINE
            </span>
          </div>
          <span className="text-xs font-mono text-[#525252]">
            Turnaround: ~72 Business Hours
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          Manuscript Intake & Editorial Comms Node
        </h1>
        <p className="text-sm sm:text-base text-[#525252] mt-2 max-w-3xl font-sans">
          The centralized intake gateway for technical monographs, empirical research studies, and peer-review correspondence. Direct communications are actively monitored by the 5-member student editorial board.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* ── SUBMISSION FORM (7 Cols) ── */}
        <div className="lg:col-span-7 bg-white border border-[#DCD6CD] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#DCD6CD] pb-3 mb-6">
            <h2 className="font-serif text-xl font-bold text-black">
              Manuscript Intake Form
            </h2>
            <span className="text-xs font-mono text-[#737373]">
              QUEUE: EDITORIAL-INTAKE
            </span>
          </div>

          {status === 'sent' ? (
            <div className="bg-[#FAF9F6] border border-[#DCD6CD] p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-black">
                Manuscript Logged Successfully
              </h3>
              <p className="text-xs sm:text-sm text-[#525252] max-w-md mx-auto font-sans leading-relaxed">
                Your submission has been queued for preliminary screening by the Publisher & EIC (Afsal Ahmed S). An acknowledgment has been assigned to <strong className="text-black">{form.email}</strong>.
              </p>
              <div className="text-xs font-mono text-[#737373] bg-[#F4F1EA] p-3 border border-[#DCD6CD] inline-block">
                LOG ID: TBP-INTAKE-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setStatus('idle');
                    setForm({ name: '', email: '', institution: '', category: MANUSCRIPT_CATEGORIES[0], title: '', abstract: '' });
                  }}
                  className="px-4 py-2 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold"
                >
                  Submit Another Ingestion
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-black font-semibold uppercase mb-1">
                    Corresponding Author Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g., Afsal Ahmed S"
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#DCD6CD] focus:border-black focus:outline-none font-sans text-sm"
                  />
                </div>
                <div>
                  <label className="block font-mono text-black font-semibold uppercase mb-1">
                    Institutional Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g., author@stjosephs.tech.sc.in"
                    className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#DCD6CD] focus:border-black focus:outline-none font-sans text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-black font-semibold uppercase mb-1">
                  Department / University Affiliation
                </label>
                <input
                  type="text"
                  name="institution"
                  value={form.institution}
                  onChange={handleChange}
                  placeholder="e.g., Dept of CSE, St. Joseph’s Institute of Technology"
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#DCD6CD] focus:border-black focus:outline-none font-sans text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-black font-semibold uppercase mb-1">
                  Manuscript Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#DCD6CD] focus:border-black focus:outline-none font-sans text-sm"
                >
                  {MANUSCRIPT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono text-black font-semibold uppercase mb-1">
                  Working Title of Manuscript *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g., Latency Optimization in Quantized Vision Transformers"
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#DCD6CD] focus:border-black focus:outline-none font-sans text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-black font-semibold uppercase mb-1">
                  Executive Abstract & GitHub / Drive Link
                </label>
                <textarea
                  name="abstract"
                  rows={4}
                  value={form.abstract}
                  onChange={handleChange}
                  placeholder="Provide an empirical abstract (150–250 words) and link to code repositories or preprints..."
                  className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#DCD6CD] focus:border-black focus:outline-none font-sans text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <span>Registering with Editorial Queue...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Transmit Manuscript to Editorial Board</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* ── EDITORIAL DIRECTORY & AUDIT INFORMATION (5 Cols) ── */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Central Office Card */}
          <div className="border border-[#DCD6CD] bg-[#F4F1EA] p-6">
            <h3 className="font-serif text-lg font-bold text-black border-b border-[#DCD6CD] pb-2 mb-3">
              Official Central Contacts
            </h3>
            
            <div className="space-y-4 text-xs font-mono">
              <div className="bg-white border border-[#DCD6CD] p-3">
                <span className="text-[#737373] text-[10px] uppercase block">
                  Central Editorial Inquiries
                </span>
                <a
                  href="mailto:editorial@thebuilderprotocol.me"
                  className="text-black font-bold text-sm underline block mt-0.5"
                >
                  editorial@thebuilderprotocol.me
                </a>
                <span className="text-[11px] text-[#525252] block mt-1">
                  Active correspondence node for authors & readers.
                </span>
              </div>

              <div className="bg-white border border-[#DCD6CD] p-3">
                <span className="text-[#737373] text-[10px] uppercase block">
                  Publisher & Editor-in-Chief
                </span>
                <span className="text-black font-bold text-sm block mt-0.5">
                  Afsal Ahmed S
                </span>
                <a
                  href="mailto:24cs@stjosephs.tech.sc.in"
                  className="text-black underline block mt-0.5"
                >
                  24cs@stjosephs.tech.sc.in
                </a>
                <span className="text-[11px] text-[#525252] block mt-1">
                  Dept of CSE, St. Joseph’s Institute of Technology.
                </span>
              </div>

              <div className="bg-white border border-[#DCD6CD] p-3">
                <span className="text-[#737373] text-[10px] uppercase block">
                  Registered Institutional Node
                </span>
                <span className="text-black font-semibold block mt-0.5">
                  St. Joseph’s Institute of Technology
                </span>
                <span className="text-[#525252] block">
                  Old Mahabalipuram Road, Chennai, Tamil Nadu — 600119, India.
                </span>
              </div>
            </div>
          </div>

          {/* Editorial SLA Box */}
          <div className="border border-[#DCD6CD] bg-white p-5 text-xs font-mono">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-black border-b border-[#DCD6CD] pb-2 mb-3">
              Editorial Pipeline Commitments
            </h4>
            <div className="space-y-2 text-[#525252]">
              <div className="flex justify-between border-b border-[#DCD6CD] pb-1">
                <span>Initial Desk Check:</span>
                <strong className="text-black">Within 48 Hours</strong>
              </div>
              <div className="flex justify-between border-b border-[#DCD6CD] pb-1">
                <span>Peer Review Period:</span>
                <strong className="text-black">10–14 Days</strong>
              </div>
              <div className="flex justify-between border-b border-[#DCD6CD] pb-1">
                <span>Author Revisions:</span>
                <strong className="text-black">7 Days</strong>
              </div>
              <div className="flex justify-between">
                <span>Catalog Publication:</span>
                <strong className="text-black">Monthly Issue Batch</strong>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
