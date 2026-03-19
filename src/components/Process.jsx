import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, PenTool, Code, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { title: "Vanguard Audit", desc: "Rigorous research and institutional-grade planning to define the core architectural future.", number: "01", icon: <Cpu size={18} />, cardClass: "card-premium-blue" },
  { title: "Cinematic Forge", desc: "High-fidelity UI/UX engineering designed to create immersive, premium digital experiences.", number: "02", icon: <PenTool size={18} />, cardClass: "card-premium-purple" },
  { title: "Protocol Synthesis", desc: "Development phase where code is hardened, audited, and optimized for scale.", number: "03", icon: <Code size={18} />, cardClass: "card-premium-cyan" },
  { title: "Mainnet Hardening", desc: "Exhaustive QA and security stress-testing for institutional stability.", number: "04", icon: <ShieldCheck size={18} />, cardClass: "card-premium-orange" },
  { title: "Orbital Launch", desc: "Strategic deployment and post-launch support to ensure your product leads the market.", number: "05", icon: <Rocket size={18} />, cardClass: "card-premium-green" }
];

const Process = () => {
  return (
    <section id="process" className="section-padding-crypto relative overflow-hidden">



      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #a855f7) border-box',
            border: '1.5px solid transparent', color: '#7c3aed',
          }}>
          Engineering Lifecycle
        </div>
        <h2 className="title-hero mb-2" style={{ color: '#0f0a2e' }}>
          Our <span className="gradient-text-blue">Process.</span>
        </h2>
        <p className="subtitle-crypto max-w-lg mx-auto">
          From initial audit to mainnet dominance — a systematic, institutional-grade approach.
        </p>
      </div>

      {/* Mobile: vertical stack. md: 5-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`${step.cardClass} p-4 sm:p-5 flex flex-col items-center text-center group relative`}
          >
            <span className="text-3xl font-black text-white/10 select-none leading-none mb-2">{step.number}</span>

            <div className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform shadow-md">
              {step.icon}
            </div>

            <h3 className="text-xs font-bold text-white mb-2 tracking-tight uppercase leading-tight">{step.title}</h3>
            <p className="text-white/75 text-[11px] leading-relaxed font-medium">{step.desc}</p>

            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-white/30 text-lg">›</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
