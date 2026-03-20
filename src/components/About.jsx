import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

const points = [
  {
    title: "Institutional Grade",
    desc: "Security and stability prioritized above all else.",
    icon: <ShieldCheck size={20} />,
    gradient: 'linear-gradient(135deg, #5b21f5, #a855f7)',
    shadow: 'rgba(91,33,245,0.35)',
  },
  {
    title: "Global Scale",
    desc: "Architecture designed to handle massive mainnet volume.",
    icon: <Globe size={20} />,
    gradient: 'linear-gradient(135deg, #0891b2, #06d6a0)',
    shadow: 'rgba(8,145,178,0.35)',
  },
  {
    title: "Rapid Execution",
    desc: "Agile sprints and protocol-level precision.",
    icon: <Zap size={20} />,
    gradient: 'linear-gradient(135deg, #f97316, #facc15)',
    shadow: 'rgba(249,115,22,0.35)',
  }
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Home Visual side - Stacks below on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative group order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="relative aspect-square max-w-[280px] sm:max-w-[340px] lg:max-w-[450px] mx-auto rounded-[3rem] overflow-hidden border border-purple-200/30 bg-[#050b16] shadow-2xl"
              style={{ boxShadow: '0 30px 100px rgba(91,33,245,0.25)' }}
            >
              <img
                src="/assets/about_light.png"
                alt="Institutional Lab Technology"
                className="w-full h-full object-cover transform transition-transform duration-[5s] group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b16] via-transparent to-transparent opacity-60" />

              {/* Status Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 sm:p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-[1.5rem] border border-purple-100 dark:border-slate-800 shadow-2xl z-20"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl text-white flex items-center justify-center bg-gradient-to-br from-[#5b21f5] via-[#a855f7] to-[#ec4899] shadow-lg">
                    <Cpu size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                      <p className="text-[8px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Core Status</p>
                    </div>
                    <p className="text-slate-900 dark:text-white font-black text-xs sm:text-base tracking-tight leading-none">Neural Alpha v.4</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.3em] shadow-lg"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #ec4899) border-box',
                border: '2px solid transparent',
                color: '#7c3aed',
              }}>
              Institutional Lab
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white transition-colors duration-300 leading-none tracking-tighter uppercase">
              Architecting <br />
              <span className="gradient-text-blue">Decentralization.</span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              We specialize in the high-fidelity engineering of sovereign smart contracts, expansive DeFi protocols, and immersive enterprise Web3 ecosystems.
            </p>

            <div className="space-y-6 lg:space-y-8">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: index => (window.innerWidth >= 1024 ? 8 : 0) }}
                  className="flex flex-col sm:flex-row items-center lg:items-start gap-5 sm:gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-2xl flex-shrink-0"
                    style={{ background: point.gradient, boxShadow: `0 10px 25px ${point.shadow}` }}>
                    {point.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-black mb-1.5 tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors uppercase leading-none">{point.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm sm:text-base max-w-md">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center lg:justify-start">
              <button className="px-10 py-5 bg-gradient-to-r from-[#5b21f5] to-[#ec4899] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-all">
                The Lab Manifesto
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
