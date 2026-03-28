import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram, ArrowUp, Send, Mail, ShieldCheck, Zap, Globe, Cpu, Blocks, Rocket, Code2, CpuIcon, Layers, Radio } from 'lucide-react';

const socialLinks = [
  { Icon: Twitter, color: '#1d9bf0', href: '#' },
  { Icon: Linkedin, color: '#0a66c2', href: '#' },
  { Icon: Github, color: '#181717', href: '#' },
  { Icon: Instagram, color: '#e1306c', href: '#' },
];

const ecosystemLinks = [
  { name: 'Home', href: '#home', color: 'from-blue-500 to-cyan-400' },
  { name: 'Services', href: '#services', color: 'from-purple-500 to-pink-500' },
  { name: 'Projects', href: '#projects', color: 'from-orange-500 to-yellow-500' },
  { name: 'About', href: '#about', color: 'from-green-500 to-emerald-400' },
  { name: 'Careers', href: '#careers', color: 'from-indigo-500 to-blue-500' },
  { name: 'Contact', href: '#contact', color: 'from-rose-500 to-pink-500' },
];

const solutionsLinks = [
  { name: 'DeFi Protocols', href: '#', Icon: Radio },
  { name: 'Smart Contracts', href: '#', Icon: Code2 },
  { name: 'Tokenomics', href: '#', Icon: Layers },
  { name: 'Web3 Security', href: '#', Icon: ShieldCheck },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden bg-[#fafbff] dark:bg-[#060314] transition-colors duration-500 font-['Urbanist']">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Compact CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group mb-16"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-[2.5rem] blur-sm"></div>
          <div className="relative rounded-[2.5rem] py-8 px-10 md:px-14 overflow-hidden bg-white dark:bg-[#0a0624] border border-white dark:border-white/5 shadow-xl">
            {/* Mesh Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #5b21f5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-['Syncopate'] font-bold text-[#0f0a2e] dark:text-white mb-3 tracking-tighter">
                  READY TO BUILD <span className="text-[#5b21f5] dark:text-purple-400">THE CORE?</span>
                </h2>
                <p className="text-[#475569] dark:text-slate-400 text-sm font-semibold max-w-lg">
                  Join 200+ elite teams architecting high-fidelity Web3 ecosystems.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-7 py-3 bg-[#5b21f5] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25">
                  Start Now <Rocket size={14} />
                </button>
                <button className="px-7 py-3 border border-slate-200 dark:border-white/10 text-[#0f0a2e] dark:text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Methods
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 lg:pr-10">
            <img 
              src="/assets/Screenshot_2026-03-14_160958-removebg-preview.png" 
              alt="ZarWebCoders" 
              className="h-10 w-auto object-contain dark:brightness-110 mb-6" 
            />
            <p className="text-[#334155] dark:text-slate-300 font-bold leading-relaxed text-sm mb-8 italic border-l-2 border-purple-500/30 pl-4 py-1">
              "We architect mission-critical legacies that dominate the mainnet."
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, color, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -4, scale: 1.1, shadow: '0 10px 20px -5px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg shadow-black/10 hover:brightness-110 active:scale-95 border border-white/10"
                  style={{
                    background: i === 3 
                      ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' 
                      : color 
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-['Syncopate'] font-bold mb-6 uppercase tracking-[0.3em] text-[#0f0a2e] dark:text-white opacity-80">
                ECOSYSTEM
              </h4>
              <ul className="space-y-3">
                {ecosystemLinks.map(link => (
                  <li key={link.name}>
                    <FooterLink href={link.href} gradient={link.color}>{link.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-['Syncopate'] font-bold mb-6 uppercase tracking-[0.3em] text-[#0f0a2e] dark:text-white opacity-80">
                SOLUTIONS
              </h4>
              <ul className="space-y-3">
                {solutionsLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#334155] dark:text-slate-300 font-bold flex items-center gap-3 group hover:text-[#5b21f5] dark:hover:text-purple-400 transition-all duration-300 text-[13px]">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#5b21f5]/10 transition-all">
                        <link.Icon size={12} />
                      </div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compact Newsletter */}
          <div className="lg:col-span-4">
            <div className="p-7 rounded-[2rem] bg-white dark:bg-[#0a0624] border border-slate-100 dark:border-white/5 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-['Syncopate'] font-bold text-[#0f0a2e] dark:text-white">ALPHA INSIDER</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#5b21f5]">Technical Intel</p>
                </div>
              </div>
              
              <form className="relative" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Info@zarwebcoders.in"
                  className="w-full pl-5 pr-14 py-3.5 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#08051a] text-[#0f0a2e] dark:text-white font-bold text-xs outline-none focus:bg-white dark:focus:bg-[#0c092e] transition-all placeholder:text-slate-400 shadow-inner"
                />
                <button className="absolute right-1.5 top-1.5 w-10 h-10 rounded-lg bg-gradient-to-br from-[#5b21f5] to-[#ec4899] text-white flex items-center justify-center shadow-lg hover:brightness-110 active:scale-95 transition-all">
                  <Send size={16} />
                </button>
              </form>
              <p className="mt-4 text-[9px] font-bold text-[#64748b] dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={10} className="text-green-500" /> Secure Protocol • No Spam
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Floor */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[#0f0a2e] dark:text-white text-[11px] font-black uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} <span className="text-[#5b21f5] dark:text-purple-400">ZarWebCoders.</span>
            </p>
            <div className="flex items-center gap-4">
              {['Privacy', 'Security'].map(item => (
                <a key={item} href="#" className="text-[9px] font-black text-[#64748b] dark:text-slate-400 hover:text-[#5b21f5] uppercase tracking-widest transition-all">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 text-[10px] font-black text-[#64748b] dark:text-slate-400 uppercase tracking-[0.3em] group"
          >
            <span>BACK TO TOP</span>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0c0a2e] text-[#5b21f5] group-hover:bg-[#5b21f5] group-hover:text-white shadow-lg transition-all">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>

    </footer>
  );
};

const FooterLink = ({ href, children, gradient }) => (
  <a
    href={href}
    className="text-[#334155] dark:text-slate-300 font-bold flex items-center gap-3 group hover:text-[#5b21f5] dark:hover:text-purple-400 transition-all duration-300 text-[13px]"
  >
    <div className={`w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10 group-hover:w-4 transition-all duration-500 bg-gradient-to-r ${gradient}`} />
    <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
  </a>
);

export default Footer;



