import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, PenTool, Code, ShieldCheck, Rocket, ChevronRight, Zap, Target, Search, Settings } from 'lucide-react';

const steps = [
  { 
    title: "Vanguard Audit", 
    desc: "Rigorous research and institutional-grade planning to define the core architectural future of your protocol.", 
    number: "01", 
    icon: <Search size={22} />, 
    color: "#5b21f5",
    gradient: "linear-gradient(135deg, #5b21f5, #a855f7)",
    shadow: "rgba(91,33,245,0.2)"
  },
  { 
    title: "Cinematic Forge", 
    desc: "High-fidelity UI/UX engineering designed to create immersive, premium digital experiences for users.", 
    number: "02", 
    icon: <PenTool size={22} />, 
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    shadow: "rgba(124,58,237,0.2)"
  },
  { 
    title: "Protocol Synthesis", 
    desc: "Development phase where code is hardened, audited, and optimized for infinite scale and performance.", 
    number: "03", 
    icon: <Code size={22} />, 
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06d6a0)",
    shadow: "rgba(8,145,178,0.2)"
  },
  { 
    title: "Security Hardening", 
    desc: "Exhaustive QA and deep-level security stress-testing to ensure long-term institutional stability.", 
    number: "04", 
    icon: <ShieldCheck size={22} />, 
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    shadow: "rgba(249,115,22,0.2)"
  },
  { 
    title: "Orbital Launch", 
    desc: "Strategic deployment and post-launch support to ensure your product leads the decentralization market.", 
    number: "05", 
    icon: <Rocket size={22} />, 
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #84fab0)",
    shadow: "rgba(16,185,129,0.2)"
  }
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden py-24 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      
      {/* Visual background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute top-1/4" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent absolute top-2/4" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent absolute top-3/4" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #0891b2) border-box',
              border: '1.5px solid transparent',
              color: '#5b21f5',
            }}
          >
            <Settings size={11} className="animate-spin-slow" /> Engineering Lifecycle
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="title-hero text-slate-900 dark:text-white mb-4 transition-colors duration-300"
          >
            How We <span className="gradient-text-blue">Deliver.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="subtitle-crypto max-w-lg mx-auto text-slate-500 dark:text-slate-400 transition-colors duration-300"
          >
            Our proven institutional-grade methodology ensures your project transitions from concept to mainnet dominance with precision.
          </motion.p>
        </div>

        {/* ── Horizontal Flow ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 pointer-events-none -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group relative flex flex-col items-center text-center px-4 mb-12 lg:mb-0"
            >
              {/* Step Number Badge */}
              <div className="relative mb-8">
                <div 
                  className="w-16 h-16 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-20"
                  style={{ background: step.gradient, boxShadow: `0 8px 32px ${step.shadow}` }}
                >
                  {step.icon}
                </div>
                {/* Orbital Ring */}
                <div className="absolute inset-0 -m-2 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-full group-hover:rotate-45 transition-transform duration-[2s] pointer-events-none" />
                
                {/* Step # Floating */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-lg z-30">
                  <span className="text-[11px] font-black text-slate-400">{step.number}</span>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-purple-600 transition-colors uppercase duration-300">
                {step.title}
              </h3>
              <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-300">
                {step.desc}
              </p>

              {/* Divider (Mobile/Tablet) */}
              <div className="lg:hidden w-px h-12 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 my-4" />
            </motion.div>
          ))}
        </div>

        {/* ── CTA Final ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-10 py-5 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm transition-colors duration-300">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=user${i}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-md" alt="advisor" />
              ))}
            </div>
            <div className="text-left border-l border-slate-100 dark:border-slate-800 pl-6">
              <p className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-1">Expert Led Engineering</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Our senior architects lead every step</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="ml-4"
            >
              <button className="btn-crypto-primary">
                Book Design Sprint
              </button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
