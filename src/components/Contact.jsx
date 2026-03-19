import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
  { label: "Secure Email", value: "hello@zarwebcoders.com", icon: <Mail size={18} />, gradient: 'linear-gradient(135deg,#5b21f5,#a855f7)', shadow: 'rgba(91,33,245,0.35)' },
  { label: "Lab Hotline", value: "+1 (234) 567-890", icon: <Phone size={18} />, gradient: 'linear-gradient(135deg,#0891b2,#06d6a0)', shadow: 'rgba(8,145,178,0.35)' },
  { label: "Nexus Base", value: "Digital Valley, Web 3.0", icon: <MapPin size={18} />, gradient: 'linear-gradient(135deg,#ec4899,#f97316)', shadow: 'rgba(236,72,153,0.35)' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding-crypto relative overflow-hidden bg-white"
    >


      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-6 uppercase tracking-[0.3em]"
              style={{ background: 'rgba(91,33,245,0.08)', border: '1.5px solid rgba(168,85,247,0.2)', color: '#5b21f5' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              Direct Nexus Line
            </div>

            <h2 className="title-hero text-slate-900 mb-5 leading-[1.1]">
              Architect Your <br /><span style={{
                background: 'linear-gradient(135deg, #5b21f5, #ec4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Digital Legacy.</span>
            </h2>

            <p className="text-slate-600 mb-10 max-w-xl font-medium leading-relaxed text-sm sm:text-base">
              Our engineering lab is ready to transform your institutional vision into a high-performance, decentralized reality. Let's build the future together.
            </p>

            <div className="space-y-5 sm:space-y-7">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 sm:gap-5 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-400 shadow-lg flex-shrink-0"
                    style={{ background: item.gradient, boxShadow: `0 6px 18px ${item.shadow}` }}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-0.5">{item.label}</p>
                    <p className="text-base sm:text-lg font-bold text-slate-800 tracking-tight group-hover:text-purple-600 transition-colors truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative rounded-[2.5rem] p-6 sm:p-10 md:p-12 overflow-hidden"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(91,33,245,0.12)',
              boxShadow: '0 40px 120px rgba(91,33,245,0.08)',
            }}
          >

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="E.g. Satoshi Nakamoto"
                    className="w-full p-4 rounded-2xl text-slate-800 font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                    style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)' }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Secure Email</label>
                  <input
                    type="email"
                    placeholder="nexus@company.com"
                    className="w-full p-4 rounded-2xl text-slate-800 font-semibold text-sm outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                    style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)' }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Sphere</label>
                <div className="relative">
                  <select className="w-full p-4 rounded-2xl font-semibold text-sm outline-none appearance-none cursor-pointer text-slate-800 focus:ring-2 focus:ring-purple-500/20"
                    style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <option>Institutional Web Design</option>
                    <option>Web3 / Blockchain Protocols</option>
                    <option>Premium Mobile Engineering</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Mission Brief</label>
                <textarea
                  rows="4"
                  placeholder="Describe your vision..."
                  className="w-full p-4 rounded-2xl text-slate-800 font-semibold text-sm resize-none outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-purple-500/20"
                  style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)' }}
                ></textarea>
              </div>

              <button className="w-full btn-crypto-primary flex items-center justify-center gap-3 py-4 text-base shadow-2xl">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
