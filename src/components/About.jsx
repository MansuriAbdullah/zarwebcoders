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
    <section id="about" className="section-padding-crypto relative overflow-hidden">



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative group order-2 lg:order-1"
        >


          <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden border border-purple-200/30 bg-[#050b16]"
            style={{ boxShadow: '0 40px 100px rgba(91,33,245,0.25)' }}
          >
            <img
              src="/assets/about_light.png"
              alt="Institutional Lab Technology"
              className="w-full h-full object-cover transform transition-transform duration-[5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050b16] via-transparent to-transparent opacity-60" />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 sm:p-4 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-purple-100 shadow-xl"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-white flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #5b21f5, #a855f7, #ec4899)' }}>
                  <Cpu size={20} className="animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Live System</p>
                  </div>
                  <p className="text-slate-900 font-bold text-sm">Neural Hub Alpha</p>
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
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-[0.3em]"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #ec4899) border-box',
              border: '1.5px solid transparent',
              color: '#7c3aed',
            }}>
            Institutional Lab
          </div>

          <h2 className="title-hero mb-4" style={{ color: '#0f0a2e' }}>
            Architecting <br />
            <span className="gradient-text-blue">Decentralization.</span>
          </h2>

          <p className="subtitle-crypto mb-6 max-w-xl">
            We specialize in the high-fidelity engineering of smart contracts, decentralized finance protocols, and immersive enterprise ecosystems.
          </p>

          <div className="space-y-5">
            {points.map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 sm:gap-5 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-400 shadow-lg flex-shrink-0"
                  style={{ background: point.gradient, boxShadow: `0 6px 18px ${point.shadow}` }}>
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-1 tracking-tight group-hover:text-purple-600 transition-colors"
                    style={{ color: '#0f0a2e' }}>{point.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="btn-crypto-primary mt-6">
            Read The Manifesto
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
