import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram, ArrowUp, Send, Mail, Shield } from 'lucide-react';

const socialColors = [
  'linear-gradient(135deg,#1d9bf0,#0ea5e9)',
  'linear-gradient(135deg,#0a66c2,#38bdf8)',
  'linear-gradient(135deg,#333,#6b7280)',
  'linear-gradient(135deg,#e1306c,#f97316)',
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-12 pb-6 overflow-hidden bg-white"
    >


      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          <div className="relative rounded-2xl p-6 sm:p-10 md:p-14 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #5b21f5 0%, #7c3aed 40%, #a855f7 70%, #ec4899 100%)',
              boxShadow: '0 30px 80px rgba(91,33,245,0.3)',
            }}
          >
            <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full blur-[80px] pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.1)' }} />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 leading-[1.15]">
                  Ready to <br />
                  <span style={{ color: '#fde68a' }}>Join The Lab.</span>
                </h2>
                <p className="text-white/75 max-w-lg text-sm sm:text-base font-medium leading-relaxed">
                  Architecting the next generation of decentralized finance and immersive digital ecosystems.
                </p>
              </div>
              <div className="flex flex-col gap-6 lg:items-end flex-shrink-0">
                <div className="flex flex-col xs:flex-row sm:flex-row gap-3">
                  <button className="py-3 px-7 sm:py-4 sm:px-10 text-sm sm:text-base rounded-full font-bold text-purple-700 transition-all hover:scale-105"
                    style={{ background: 'white', boxShadow: '0 6px 20px rgba(0,0,0,0.18)' }}>
                    Start Project
                  </button>
                  <button className="py-3 px-7 sm:py-4 sm:px-10 text-sm sm:text-base rounded-full font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all">
                    The Archive
                  </button>
                </div>
                <div className="flex items-center gap-6 opacity-80">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg sm:text-xl tracking-tighter">99.9%</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/60 mt-0.5">Uptime</p>
                  </div>
                  <div className="w-[1px] h-6 bg-white/20" />
                  <div className="text-center">
                    <p className="text-white font-bold text-lg sm:text-xl tracking-tighter">$850M+</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/60 mt-0.5">TVL Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-5 cursor-pointer group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                style={{ background: 'linear-gradient(135deg,#5b21f5,#a855f7,#ec4899)', boxShadow: '0 0 20px rgba(91,33,245,0.45)' }}>
                <Shield size={20} className="text-white fill-current" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tighter leading-none text-slate-900">
                zarweb<span style={{
                  background: 'linear-gradient(135deg,#5b21f5,#a855f7,#ec4899)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>coders</span>
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-600 italic mb-6 leading-relaxed max-w-sm">
              "We don't build software. We architect digital legacies that stand the test of mainnet time."
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.12 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                  style={{ background: socialColors[i] }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black mb-5 uppercase tracking-[0.3em] text-slate-800 pl-3 pt-0.5"
              style={{ borderLeft: '3px solid transparent', borderImage: 'linear-gradient(180deg,#5b21f5,#ec4899) 1' }}>
              Ecosystem
            </h4>
            <ul className="space-y-3">
              <li><FooterLink href="#home">Home</FooterLink></li>
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#portfolio">Showcase</FooterLink></li>
              <li><FooterLink href="#about">The Lab</FooterLink></li>
              <li><FooterLink href="#careers">Careers</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(91,33,245,0.06), rgba(168,85,247,0.04), rgba(236,72,153,0.06))',
                boxShadow: '0 0 0 1.5px rgba(91,33,245,0.15), 0 12px 40px rgba(91,33,245,0.08)',
              }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
                  <Mail size={18} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold tracking-tighter text-slate-800">Lab Reports</h4>
              </div>
              <p className="text-slate-600 mb-5 font-medium text-sm leading-relaxed">
                Deep-dive insights into the future of decentralized tech and high-fidelity engineering.
              </p>
              <form className="relative flex gap-2" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@nexus.com"
                  className="flex-1 min-w-0 px-4 py-3 rounded-full border border-purple-200 text-slate-800 font-semibold outline-none transition-all text-sm placeholder:text-slate-400"
                  style={{ background: 'white', boxShadow: '0 2px 10px rgba(91,33,245,0.07)' }}
                  onFocus={e => e.target.style.borderColor = '#7c3aed'}
                  onBlur={e => e.target.style.borderColor = ''}
                />
                <button
                  className="w-12 h-12 flex-shrink-0 text-white rounded-full flex items-center justify-center shadow-xl active:scale-95 group/send"
                  style={{ background: 'linear-gradient(135deg, #5b21f5, #ec4899)' }}>
                  <Send size={16} className="group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(91,33,245,0.15)' }}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} ZarWebCoders Lab.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy', 'Security', 'Terms'].map((item) => (
                <a key={item} href="#"
                  className="text-[9px] font-bold text-slate-500 hover:text-purple-600 transition-all tracking-widest uppercase">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-black text-slate-500 hover:text-purple-600 transition-all tracking-[0.4em] uppercase"
          >
            <span>Top</span>
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                border: '2px solid rgba(91,33,245,0.2)',
                background: 'linear-gradient(135deg, rgba(91,33,245,0.06), rgba(236,72,153,0.06))',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(135deg, #5b21f5, #a855f7)'}
              onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(91,33,245,0.06), rgba(236,72,153,0.06))'}
            >
              <ArrowUp size={18} className="text-slate-600 group-hover:text-white transition-colors" />
            </div>
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-slate-500 font-bold flex items-center gap-3 group opacity-85 hover:opacity-100 uppercase text-[11px] tracking-widest"
    onMouseEnter={e => e.currentTarget.style.color = '#7c3aed'}
    onMouseLeave={e => e.currentTarget.style.color = ''}
    style={{ transition: 'color 0.25s' }}
  >
    <div className="w-0 h-[2px] rounded-full group-hover:w-6 transition-all duration-500"
      style={{ background: 'linear-gradient(90deg, #5b21f5, #ec4899)' }} />
    <span>{children}</span>
  </a>
);

export default Footer;
