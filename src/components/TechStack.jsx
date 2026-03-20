import React from 'react';
import { motion } from 'framer-motion';
import {
  Database, Server, Codepen, Cpu, Cloud, Globe, Layers, Zap, ShieldCheck, Smartphone, Terminal,
  Cpu as Chip, Globe2, Binary, Cpu as Microchip, ShieldAlert, Workflow
} from 'lucide-react';

const techs = [
  { name: 'React', icon: <Codepen />, color: "#61dafb", bg: "rgba(97,218,251,0.1)" },
  { name: 'Node.js', icon: <Server />, color: "#68a063", bg: "rgba(104,160,99,0.1)" },
  { name: 'Solidity', icon: <ShieldCheck />, color: "#363636", bg: "rgba(54,54,54,0.1)" },
  { name: 'Python', icon: <Terminal />, color: "#3776ab", bg: "rgba(55,118,171,0.1)" },
  { name: 'MongoDB', icon: <Database />, color: "#47a248", bg: "rgba(71,162,72,0.1)" },
  { name: 'Web3.js', icon: <Globe />, color: "#f16822", bg: "rgba(241,104,34,0.1)" },
  { name: 'Flutter', icon: <Smartphone />, color: "#02569b", bg: "rgba(2,86,155,0.1)" },
  { name: 'AWS', icon: <Cloud />, color: "#ff9900", bg: "rgba(255,153,0,0.1)" },
  { name: 'Docker', icon: <Layers />, color: "#2496ed", bg: "rgba(36,150,237,0.1)" },
  { name: 'Ethereum', icon: <Zap />, color: "#3c3c3d", bg: "rgba(60,60,61,0.1)" },
  { name: 'Rust', icon: <Binary />, color: "#dea584", bg: "rgba(222,165,132,0.1)" },
  { name: 'TypeScript', icon: <Microchip />, color: "#3178c6", bg: "rgba(49,120,198,0.1)" },
];

const TechStack = () => {
  return (
    <section className="py-20 overflow-hidden relative bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      
      {/* Visual background elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 mb-14 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0891b2, #06d6a0) border-box',
              border: '1.5px solid transparent',
              color: '#0891b2',
            }}
          >
            <Chip size={11} className="animate-pulse" /> Tech Infrastructure
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="title-hero text-slate-900 dark:text-white mb-4 transition-colors duration-300"
          >
            World-Class <span className="gradient-text-blue">Stack.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="subtitle-crypto max-w-xl mx-auto text-slate-500 dark:text-slate-400 transition-colors duration-300"
          >
            We leverage a high-fidelity suite of technologies to build mission-critical Web3 infrastructure that scales infinitely.
          </motion.p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative group">
        {/* Edge Fades for seamless feel */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-[#0f0a2e] to-transparent z-10 pointer-events-none transition-colors duration-500" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-[#0f0a2e] to-transparent z-10 pointer-events-none transition-colors duration-500" />

        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap min-w-max px-8"
        >
          {/* Duplicate for infinite loop */}
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ y: -8, scale: 1.05 }}
              className="px-8 py-6 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-900 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-w-[140px]"
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform"
                style={{ background: tech.bg, color: tech.color }}
              >
                {React.cloneElement(tech.icon, { size: 24, strokeWidth: 2 })}
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200 text-xs tracking-widest uppercase transition-colors duration-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row: Core Pillars */}
      <div className="max-w-[1600px] mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 opacity-60">
        {[
          { icon: Globe2, label: "Global Node Edge" },
          { icon: ShieldAlert, label: "Hardened Security" },
          { icon: Workflow, label: "High-Entropy Logic" },
          { icon: Binary, label: "Atomic Consensus" }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-2.5">
            <item.icon size={16} className="text-purple-500" />
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none mt-0.5">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
