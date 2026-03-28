import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Shield, Lightbulb, UserCheck, Zap, ArrowUpRight,
  Settings, Award, CheckCircle2, Cpu
} from 'lucide-react';

const reasons = [
  {
    icon: <Rocket size={24} />,
    title: "Agile Precision",
    desc: "Institutional frameworks and modern tools for protocol-level delivery speed that outpaces the market.",
    gradient: "linear-gradient(135deg, #10b981, #06d6a0)",
    color: "#06d6a0",
    shadow: "rgba(6,214,160,0.2)"
  },
  {
    icon: <Shield size={24} />,
    title: "Secure Scale",
    desc: "Hardened, audited architectures built to handle massive mainnet volume with zero compromise.",
    gradient: "linear-gradient(135deg, #5b21f5, #a855f7)",
    color: "#a855f7",
    shadow: "rgba(168,85,247,0.2)"
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Vanguard Tech",
    desc: "We don't just use Web3 — we architect its future, bringing fresh perspectives to every node.",
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    color: "#f97316",
    shadow: "rgba(249,115,22,0.2)"
  },
  {
    icon: <UserCheck size={24} />,
    title: "Full Handover",
    desc: "Transparent process with complete documentation and long-term protocol support.",
    gradient: "linear-gradient(135deg, #0891b2, #06d6a4)",
    color: "#0891b2",
    shadow: "rgba(8,145,178,0.2)"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">

      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#5b21f5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content side */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #ec4899) border-box',
                border: '1.5px solid transparent',
                color: '#5b21f5',
              }}
            >
              <Cpu size={11} className="animate-spin-slow" /> The Lab Standard
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f0a2e] dark:text-white mb-6 tracking-tighter transition-colors duration-300 uppercase leading-[0.95]"
            >
              Why choose <span className="gradient-text-blue">Zarwebcoders.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="subtitle-crypto mb-10 max-w-xl text-[#334155] dark:text-slate-300 text-base sm:text-lg transition-colors duration-300"
            >
              We combine technical excellence with institutional-grade auditing to deliver Web3 infrastructure that doesn't just work — it leads.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {[
                "100% Code Coverage Guarantee",
                "Advanced Game Theory Integration",
                "Post-Launch Technical Advisory",
                "Infinite Scaling Architecture"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-[10px] sm:text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-purple-600" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <button className="btn-crypto-primary group px-8">
                Request Engineering Audit <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Cards side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02, borderColor: reason.color }}
                className="group p-8 rounded-[2.5rem] border-2 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-2xl transition-all duration-500"
                style={{ borderColor: `${reason.color}20` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 shadow-lg transition-all duration-500"
                  style={{ background: reason.gradient, boxShadow: `0 8px 24px ${reason.shadow}` }}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-black text-[#0f0a2e] dark:text-white mb-4 tracking-tighter group-hover:text-purple-600 transition-all uppercase duration-300 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-[14px] text-[#334155] dark:text-slate-300 font-bold leading-relaxed transition-colors duration-300">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
