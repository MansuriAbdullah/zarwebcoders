import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Layers, Smartphone, Shield, Zap, ArrowRight, Cpu,
  Database, Code, Rocket, Wallet, LineChart, ChevronRight, Activity,
  Lock, RefreshCcw, Box, FastForward, Sparkles, Hexagon
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web3 & DApps",
    desc: "Immersive decentralized applications featuring holographic interfaces and high-performance engines.",
    icon: <Globe size={24} />,
    features: ["3D NFT Galleries", "AI Curation", "Cross-Chain Sync"],
    gradient: "linear-gradient(135deg, #00d2ff, #3a7bd5, #7928ca)",
    color: "#00d2ff",
    shadow: "rgba(0,210,255,0.4)"
  },
  {
    id: 2,
    title: "Smart Contracts",
    desc: "Self-executing protocols with robotic precision, audited for quantum-resistant security.",
    icon: <Code size={24} />,
    features: ["Security Audits", "Gas Optimization", "Auto-Auditing"],
    gradient: "linear-gradient(135deg, #8a2be2, #a855f7, #ec4899)",
    color: "#a855f7",
    shadow: "rgba(168,85,247,0.4)"
  },
  {
    id: 3,
    title: "Security Hub",
    desc: "AI-driven compliance modules with real-time biometric verification and threat detection.",
    icon: <Shield size={24} />,
    features: ["Biometric Auth", "AI Monitoring", "Real-time Alerts"],
    gradient: "linear-gradient(135deg, #ff0844, #ffb199, #f97316)",
    color: "#ff0844",
    shadow: "rgba(255,8,68,0.4)"
  },
  {
    id: 4,
    title: "Tokenomics",
    desc: "Professional tokenomics design and automated deployment systems for protocol launches.",
    icon: <Rocket size={24} />,
    features: ["Minting Engines", "Vesting Locks", "Launchpad Tools"],
    gradient: "linear-gradient(135deg, #f97316, #facc15, #10b981)",
    color: "#f97316",
    shadow: "rgba(249,115,22,0.4)"
  },
  {
    id: 5,
    title: "DeFi Suites",
    desc: "Advanced finance suites with robotic arbitrage and automated liquidity rebalancing.",
    icon: <LineChart size={24} />,
    features: ["Yield Systems", "LP Management", "Risk Analytics"],
    gradient: "linear-gradient(135deg, #00f2fe, #4facfe, #00d2ff)",
    color: "#4facfe",
    shadow: "rgba(79,172,254,0.4)"
  },
  {
    id: 6,
    title: "MPC Wallet",
    desc: "Enterprise-grade multi-chain connectivity with institutional-level MPC security.",
    icon: <Wallet size={24} />,
    features: ["MPC Custody", "Hardware Ready", "SDK Tools"],
    gradient: "linear-gradient(135deg, #ec4899, #7c3aed, #5b21f5)",
    color: "#ec4899",
    shadow: "rgba(236,72,153,0.4)"
  }
];

const metrics = [
  { icon: Activity, label: "99.9% Uptime", color: "#10b981" },
  { icon: Lock, label: "AES-256", color: "#3b82f6" },
  { icon: RefreshCcw, label: "High Flow", color: "#f97316" },
  { icon: Box, label: "Multi-Chain", color: "#a855f7" }
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-32 bg-white dark:bg-[#0c0825] transition-colors duration-500">

      {/* Background Colorful Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse-slow" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* Header Area */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ff0080, #7928ca, #0070f3) border-box',
              border: '2px solid transparent',
              color: '#7928ca',
            }}
          >
            <Sparkles size={14} className="text-pink-500 animate-pulse" /> Quantum Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter uppercase"
          >
            ZARWEBCODERS <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] bg-clip-text text-transparent">Nexus.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Institutional-grade blockchain ecosystems powered by high-fidelity AI engines and vibrant technical automation.
          </motion.p>
        </div>

        {/* Services Grid with Colorful Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-[1.8rem] p-5 sm:p-6 overflow-hidden border transition-all duration-700 flex flex-col h-full bg-white dark:bg-[#060a18] backdrop-blur-xl shadow-2xl"
              style={{
                borderColor: `${service.color}30`,
                background: 'transparent'
              }}
            >
              {/* Card Surface Overlay (Internal Color) */}
              <div className="absolute inset-[2px] rounded-[1.7rem] bg-white dark:bg-[#060a18] z-0 transition-colors duration-500" />
              
              {/* Top gradient border effect */}
              <div className="absolute inset-0 z-[-1]" style={{ background: service.gradient }} />

              {/* Vibrant Hover Aura */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none blur-[100px] z-0"
                style={{ background: service.gradient }}
              />

              {/* Colorful Icon Panel */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl relative z-10"
                style={{ background: service.gradient, boxShadow: `0 10px 25px -5px ${service.shadow}` }}
              >
                {React.cloneElement(service.icon, { size: 20 })}
              </div>

              {/* Header */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-slate-950 dark:text-white mb-2 tracking-tighter transition-colors duration-500 uppercase leading-none">
                  {service.title}
                </h3>
                <p className="text-[14px] text-slate-800 dark:text-slate-100 font-black leading-relaxed mb-5 transition-colors duration-300">
                  {service.desc}
                </p>

                {/* Colorful Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.features.map((f, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-[8.5px] font-black uppercase tracking-widest border border-slate-200 dark:border-slate-800 shadow-sm"
                      style={{ color: service.color, background: 'rgba(0,0,0,0.03)', borderColor: `${service.color}30` }}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Action with Colorful Vibrant Button */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 w-full">
                  <button
                    className="w-full py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all shadow-xl group-hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2"
                    style={{ background: service.gradient, boxShadow: `0 15px 30px -10px ${service.shadow}` }}
                  >
                    Explore Nexus <ChevronRight size={15} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Hexagon */}
              <div className="absolute -bottom-6 -right-6 text-slate-50 dark:text-slate-800/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 rotate-12">
                <Hexagon size={180} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-8 md:gap-16"
        >
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4 transition-transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-lg flex-shrink-0" style={{ color: m.color }}>
                <m.icon size={18} className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none uppercase tracking-tighter">{m.label}</p>
                <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Efficiency</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
