import React from 'react';
import { motion } from 'framer-motion';
import {
  Database, Server, Codepen, Cpu, Cloud, Globe, Layers, Zap, ShieldCheck, Smartphone, Terminal,
  Cpu as Chip, Globe2, Binary, Cpu as Microchip, ShieldAlert, Workflow
} from 'lucide-react';

const techs = [
  { name: 'React', icon: <Codepen />, color: "#61dafb", bg: "rgba(97,218,251,0.15)", glow: "rgba(97,218,251,0.4)" },
  { name: 'Node.js', icon: <Server />, color: "#68a063", bg: "rgba(104,160,99,0.15)", glow: "rgba(104,160,99,0.4)" },
  { name: 'Solidity', icon: <ShieldCheck />, color: "#c0c0c0", bg: "rgba(192,192,192,0.15)", glow: "rgba(192,192,192,0.4)" },
  { name: 'Python', icon: <Terminal />, color: "#ffde57", bg: "rgba(255,222,87,0.15)", glow: "rgba(255,222,87,0.4)" },
  { name: 'MongoDB', icon: <Database />, color: "#13aa52", bg: "rgba(19,170,82,0.15)", glow: "rgba(19,170,82,0.4)" },
  { name: 'Web3.js', icon: <Globe />, color: "#f16822", bg: "rgba(241,104,34,0.15)", glow: "rgba(241,104,34,0.4)" },
  { name: 'Flutter', icon: <Smartphone />, color: "#45d1fd", bg: "rgba(69,209,253,0.15)", glow: "rgba(69,209,253,0.4)" },
  { name: 'AWS', icon: <Cloud />, color: "#ff9900", bg: "rgba(255,153,0,0.15)", glow: "rgba(255,153,0,0.4)" },
  { name: 'Docker', icon: <Layers />, color: "#2496ed", bg: "rgba(36,150,237,0.15)", glow: "rgba(36,150,237,0.4)" },
  { name: 'Ethereum', icon: <Zap />, color: "#627eea", bg: "rgba(98,126,234,0.15)", glow: "rgba(98,126,234,0.4)" },
  { name: 'Rust', icon: <Binary />, color: "#dea584", bg: "rgba(222,165,132,0.15)", glow: "rgba(222,165,132,0.4)" },
  { name: 'TypeScript', icon: <Microchip />, color: "#3178c6", bg: "rgba(49,120,198,0.15)", glow: "rgba(49,120,198,0.4)" },
];

const TechStack = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-white dark:bg-[#0f0a2e] transition-colors duration-500">

      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-pink-500/5 blur-[150px] rounded-full rotate-45" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 mb-14 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ff0080, #7928ca, #0070f3) border-box',
              border: '2px solid transparent',
              color: '#7928ca',
            }}
          >
            <Chip size={14} className="animate-pulse" /> Infrastructure Nexus
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black mb-6 tracking-tightest leading-tight uppercase"
          >
            <span className="text-slate-900 dark:text-white mr-4">World-Class</span>
            <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] bg-clip-text text-transparent">Power Stack.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed"
          >
            We leverage the most vibrant and sophisticated tech ecosystem to architect mission-critical infrastructure that fuels digital evolution.
          </motion.p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative">
        {/* Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-white dark:from-[#0f0a2e] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-white dark:from-[#0f0a2e] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-6 py-4">
          {/* Row 1 */}
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap min-w-max px-8 mb-8"
          >
            {[...techs, ...techs, ...techs].map((tech, index) => (
              <motion.div
                key={`${tech.name}-r1-${index}`}
                whileHover={{ y: -10, scale: 1.08 }}
                className="group p-5 rounded-[2rem] border transition-all duration-300 flex flex-col items-center justify-center gap-3 min-w-[140px] relative overflow-hidden backdrop-blur-md"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.85)',
                  boxShadow: `0 10px 30px -10px ${tech.glow}`
                }}
              >
                {/* Stylish Glow Pulse */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: tech.color }} 
                />
                
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg relative z-10"
                  style={{ 
                    background: tech.bg, 
                    color: tech.color 
                  }}
                >
                  {React.cloneElement(tech.icon, { size: 24, strokeWidth: 2.5 })}
                </div>
                <span className="font-bold text-slate-800 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative z-10">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 (Optional: Reversed for more motion) */}
          <motion.div
            animate={{ x: [-2000, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap min-w-max px-8"
          >
            {[...techs.reverse(), ...techs, ...techs].map((tech, index) => (
              <motion.div
                key={`${tech.name}-r2-${index}`}
                whileHover={{ y: -10, scale: 1.08 }}
                className="group p-5 rounded-[2rem] border transition-all duration-300 flex flex-col items-center justify-center gap-3 min-w-[140px] relative overflow-hidden backdrop-blur-md"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.85)',
                  boxShadow: `0 10px 30px -10px ${tech.glow}`
                }}
              >
                {/* Stylish Glow Pulse */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: tech.color }} 
                />
                
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg relative z-10"
                  style={{ 
                    background: tech.bg, 
                    color: tech.color 
                  }}
                >
                  {React.cloneElement(tech.icon, { size: 24, strokeWidth: 2.5 })}
                </div>
                <span className="font-bold text-slate-800 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative z-10">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pillars Section with Color Accent */}
      <div className="max-w-[1600px] mx-auto px-6 mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {[
          { icon: Globe2, label: "Global Edge", color: "#ff0080" },
          { icon: ShieldAlert, label: "Hardened Auth", color: "#7928ca" },
          { icon: Workflow, label: "High-Flow Logic", color: "#0070f3" },
          { icon: Binary, label: "Consensus Layer", color: "#00dfd8" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-4 group transition-transform hover:scale-110">
            <div className="w-12 h-12 rounded-[1.25rem] flex items-center justify-center bg-slate-50 dark:bg-slate-800 transition-colors shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: item.color }} />
              <item.icon size={22} style={{ color: item.color }} />
            </div>
            <span className="text-[10px] sm:text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
