import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, ShieldCheck, Zap, Globe } from 'lucide-react';

const contactItems = [
  {
    label: "Secure Email",
    value: "Info@zarwebcoders.in",
    icon: <Mail size={20} />,
    gradient: 'linear-gradient(135deg, #5b21f5, #a855f7)',
    shadow: 'rgba(91,33,245,0.25)'
  },
  {
    label: "Lab Hotline",
    value: "+91 8160404725",
    icon: <Phone size={20} />,
    gradient: 'linear-gradient(135deg, #0891b2, #06d6a0)',
    shadow: 'rgba(8,145,178,0.25)'
  },
  {
    label: "Zarwebcoders Base",
    value: "Ahmedabad, Gujarat, India",
    icon: <MapPin size={20} />,
    gradient: 'linear-gradient(135deg, #ec4899, #f97316)',
    shadow: 'rgba(236,72,153,0.25)'
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #5b21f5, #ec4899)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 dark:opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #06b6d4, #10b981)' }} />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-black mb-6 uppercase tracking-[0.3em] transition-all shadow-lg"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #ec4899) border-box',
                border: '2px solid transparent',
                color: '#5b21f5'
              }}>
              <Zap size={11} className="animate-pulse" fill="currentColor" /> Direct Support Line
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter uppercase">
              Architect Your <br />
              <span className="gradient-text-blue">Digital Legacy.</span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed text-base sm:text-lg transition-colors duration-300">
              Our engineering lab is ready to transform your institutional vision into a high-performance, decentralized reality. Let's build the future together.
            </p>

            <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: index => (window.innerWidth >= 1024 ? 8 : 0) }}
                  className="flex flex-col sm:flex-row items-center lg:items-center gap-5 sm:gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl flex-shrink-0"
                    style={{ background: item.gradient, boxShadow: `0 12px 30px ${item.shadow}` }}>
                    {item.icon}
                  </div>
                  <div className="min-w-0 text-center sm:text-left">
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate uppercase leading-none">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges Mini */}
            <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                  <ShieldCheck size={16} className="text-purple-500" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Secure Protocol</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                  <Globe size={16} className="text-purple-500" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Global Node Base</span>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Secure Mission Brief</h3>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="E.g. Satoshi Nakamoto"
                    className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Secure Email</label>
                  <input
                    type="email"
                    placeholder="Info@zarwebcoders.in"
                    className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Project Sphere</label>
                <div className="relative">
                  <select className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-purple-500/20">
                    <option>Institutional Web Design</option>
                    <option>Web3 / Blockchain Protocols</option>
                    <option>Premium Mobile Engineering</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Mission Brief</label>
                <textarea
                  rows="4"
                  placeholder="Describe your vision and technical requirements..."
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm resize-none outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                ></textarea>
              </div>

              <button className="w-full btn-crypto-primary flex items-center justify-center gap-3 py-4 text-base shadow-2xl group">
                Initialize Connection <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
