import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram, ArrowUp, Send, Mail, ShieldCheck, Zap, Globe } from 'lucide-react';

const socialColors = [
  'linear-gradient(135deg, #1d9bf0, #0ea5e9)',
  'linear-gradient(135deg, #0a66c2, #38bdf8)',
  'linear-gradient(135deg, #333, #6b7280)',
  'linear-gradient(135deg, #e1306c, #f97316)',
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* CTA Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #5b21f5 0%, #7c3aed 40%, #ec4899 100%)',
            }}
          >
            {/* Animated Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none bg-white" />
            <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 pointer-events-none bg-cyan-400" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
                  Ready to Join <br />
                  The <span className="text-amber-300">Engineering Lab?</span>
                </h2>
                <p className="text-white/80 text-lg font-medium leading-relaxed mb-8">
                  Architecting the next generation of decentralized finance and high-fidelity Web3 ecosystems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white rounded-full font-bold text-purple-700 hover:scale-105 transition-all shadow-xl">
                    Initialize Project
                  </button>
                  <button className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-white hover:bg-white/10 transition-all">
                    View Methodology
                  </button>
                </div>
              </div>

              {/* Stats Mini */}
              <div className="flex flex-col gap-8 lg:items-end">
                <div className="grid grid-cols-2 gap-8 text-white">
                  <div>
                    <p className="text-3xl font-black tracking-tight mb-1">99.9%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">System Uptime</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black tracking-tight mb-1">$850M+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">TVL Impact</p>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10 lg:w-48" />
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=tech${i}`} className="w-9 h-9 rounded-full border-2 border-primary shadow-lg" alt="team" />
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Expert Support 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <img 
                src="/assets/Screenshot_2026-03-14_160958-removebg-preview.png" 
                alt="ZarWebCoders Logo" 
                className="h-16 w-auto object-contain dark:brightness-110" 
              />
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-sm italic">
              "We don't just build code. We architect mission-critical legacies that dominate the mainnet."
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-xl"
                  style={{ background: socialColors[i] }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black mb-6 uppercase tracking-[0.3em] text-slate-900 dark:text-white transition-colors duration-300">
              Ecosystem
            </h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Careers', 'Contact'].map(link => (
                <li key={link}>
                  <FooterLink href={`#${link.toLowerCase()}`}>{link}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">Lab Reports</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium leading-relaxed transition-colors duration-300">
                Weekly deep-dives into Web3 engineering, high-fidelity security protocols, and market insights.
              </p>
              <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="nexus@company.com"
                  className="flex-1 min-w-0 px-5 py-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                />
                <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all active:scale-95 flex-shrink-0">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest leading-none">
              &copy; {new Date().getFullYear()} ZarWebCoders Lab. Internal.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Security', 'Compliance'].map(item => (
                <a key={item} href="#" className="text-[10px] font-bold text-slate-400 hover:text-purple-600 uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[11px] font-black text-slate-400 hover:text-purple-600 uppercase tracking-[0.4em] transition-all"
          >
            <span>Top</span>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 group-hover:text-white group-hover:bg-purple-600 group-hover:border-purple-600 shadow-sm transition-all duration-300">
              <ArrowUp size={20} />
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
    className="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-3 group hover:text-purple-600 dark:hover:text-purple-400 uppercase text-[11px] tracking-widest transition-all duration-300"
  >
    <div className="w-0 h-[2px] rounded-full group-hover:w-6 transition-all duration-500"
      style={{ background: 'linear-gradient(90deg, #5b21f5, #ec4899)' }} />
    <span>{children}</span>
  </a>
);

export default Footer;
