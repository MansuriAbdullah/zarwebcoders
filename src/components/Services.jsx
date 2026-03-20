import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Layers, Smartphone, Shield, Zap, ArrowRight, Cpu, 
  Database, Code, Rocket, Wallet, LineChart, ChevronRight, Activity,
  Lock, RefreshCcw, Box, FastForward
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web3 & DApps",
    desc: "Immersive decentralized applications featuring holographic interfaces and high-performance trading engines.",
    icon: <Globe size={24} />,
    features: ["3D NFT Galleries", "AI Curation", "Cross-Chain Sync"],
    gradient: "linear-gradient(135deg, #10b981, #06d6a0)",
    color: "#06d6a0",
    shadow: "rgba(6,214,160,0.2)"
  },
  {
    id: 2,
    title: "Smart Contracts",
    desc: "Self-executing protocols with robotic precision, audited for quantum-resistant security and efficiency.",
    icon: <Code size={24} />,
    features: ["Security Audits", "Gas Optimization", "Auto-Auditing"],
    gradient: "linear-gradient(135deg, #5b21f5, #a855f7)",
    color: "#a855f7",
    shadow: "rgba(168,85,247,0.2)"
  },
  {
    id: 3,
    title: "Security & Compliance",
    desc: "AI-driven compliance modules with real-time biometric verification and advanced threat detection.",
    icon: <Shield size={24} />,
    features: ["Biometric Auth", "AI Monitoring", "Real-time Threats"],
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    color: "#f43f5e",
    shadow: "rgba(244,63,94,0.2)"
  },
  {
    id: 4,
    title: "Token Engineering",
    desc: "Professional tokenomics design and automated deployment systems for next-gen protocol launches.",
    icon: <Rocket size={24} />,
    features: ["Minting Engines", "Vesting Locks", "Launchpad Tools"],
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    color: "#f97316",
    shadow: "rgba(249,115,22,0.2)"
  },
  {
    id: 5,
    title: "DeFi Protocols",
    desc: "Advanced decentralized finance suites with robotic arbitrage and automated liquidity rebalancing.",
    icon: <LineChart size={24} />,
    features: ["Yield Systems", "LP Management", "Risk Analytics"],
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    color: "#0891b2",
    shadow: "rgba(8,145,178,0.2)"
  },
  {
    id: 6,
    title: "Wallet Infrastructure",
    desc: "Enterprise-grade multi-chain connectivity with institutional-level MPC and hardware security.",
    icon: <Wallet size={24} />,
    features: ["MPC Custody", "Hardware Ready", "SDK Integration"],
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    color: "#7c3aed",
    shadow: "rgba(124,58,237,0.2)"
  }
];

const metrics = [
  { icon: Activity, label: "99.9% Uptime", desc: "Always online" },
  { icon: Lock, label: "AES-256 Secured", desc: "Military grade" },
  { icon: RefreshCcw, label: "High Liquidity", desc: "Instant swaps" },
  { icon: Box, label: "Multi-Chain", desc: "Native support" }
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-24 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #5b21f5, #a855f7)' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 dark:opacity-5 pointer-events-none" style={{ background: 'radial-gradient(circle, #06b6d4, #10b981)' }} />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #a855f7) border-box',
              border: '1.5px solid transparent',
              color: '#7c3aed',
            }}
          >
            <Zap size={11} fill="currentColor" /> Web3 Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="title-hero text-slate-900 dark:text-white mb-4 transition-colors duration-300"
          >
            Robotic <span className="gradient-text-blue">Web3 Solutions.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="subtitle-crypto max-w-2xl mx-auto text-slate-500 dark:text-slate-400 transition-colors duration-300"
          >
            We architect institutional-grade blockchain ecosystems powered by artificial intelligence and high-fidelity automation.
          </motion.p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <FastForward size={120} />
              </div>

              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                style={{ background: service.gradient, boxShadow: `0 8px 24px ${service.shadow}` }}
              >
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed mb-6 transition-colors duration-300">
                {service.desc}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((f, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold border border-slate-100 dark:border-slate-800 text-slate-400 bg-slate-50/50 dark:bg-slate-800/40">
                    {f}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800/60">
                <button className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest transition-all" style={{ color: service.color }}>
                  Explore Protocol <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Performance Metrics ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 transition-colors duration-300"
        >
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                <m.icon size={20} />
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 tracking-tight">{m.label}</p>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">{m.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
