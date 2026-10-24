import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Python Developer / Fresher',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and trigger celebratory confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-transparent overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Send className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am actively interviewing for entry-level Software Developer, Python Developer, and Web Developer roles. Let's discuss how I can contribute to your engineering team.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                <span>Ready for Immediate Joining</span>
              </div>
              <h3 className="text-lg font-bold text-white">Direct Communication</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to reach out via email, phone, or LinkedIn. I am based in Chennai and open to on-site, hybrid, or remote opportunities.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Typical response time: Within a few hours</span>
              </div>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4 group hover:border-sky-500/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Email Address</div>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-[10px] text-slate-400 font-mono">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4 group hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Phone Number</div>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
              >
                <span className="text-[10px] font-mono text-slate-400">Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-slate-400">Location</div>
                <div className="text-sm font-bold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-sky-500/50 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 font-mono">LinkedIn</div>
                    <div className="text-xs text-white">prakash-b-015744322</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-3.5 rounded-xl border border-slate-800 flex items-center justify-between gap-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <FaGithub className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 font-mono">GitHub</div>
                    <div className="text-xs text-white">Prakashb-21</div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-2xl">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been recorded. You can also send a direct email to{' '}
                    <strong className="text-sky-300">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', role: 'Python Developer / Fresher', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    >
                      Send Another Note
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20for%20${encodeURIComponent(PERSONAL_INFO.name)}`}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                    >
                      Open Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3">
                    <MessageSquare className="w-4 h-4 text-sky-400" />
                    <h3 className="text-base font-bold text-white">Send a Direct Message</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hiring Manager / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Role / Opportunity</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="Python Developer / Fresher">Python Developer / Fresher</option>
                      <option value="Software Engineer (Entry-Level)">Software Engineer (Entry-Level)</option>
                      <option value="Backend Developer (Python/SQL)">Backend Developer (Python/SQL)</option>
                      <option value="Web Developer / Full Stack Fresher">Web Developer / Full Stack Fresher</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 uppercase">Your Message / Job Description</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Prakash, we would love to connect with you regarding our open developer role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20for%20${encodeURIComponent(PERSONAL_INFO.name)}`}
                      className="text-xs text-sky-400 hover:text-sky-300 underline font-mono"
                    >
                      Or click here to open directly in your favorite mail app
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
