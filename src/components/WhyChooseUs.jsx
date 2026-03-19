import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Lightbulb, UserCheck, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Rocket size={20} />,
    title: "Agile Precision",
    desc: "Institutional frameworks and modern tools for protocol-level delivery speed.",
    cardClass: "card-premium-blue"
  },
  {
    icon: <Shield size={20} />,
    title: "Secure & Scalable",
    desc: "Hardened architectures built to handle massive mainnet volume safely.",
    cardClass: "card-premium-purple"
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Vanguard Tech",
    desc: "We architect Web3's future, bringing fresh perspectives to every challenge.",
    cardClass: "card-premium-orange"
  },
  {
    icon: <UserCheck size={20} />,
    title: "Full Handover",
    desc: "Transparent process with complete documentation and long-term support.",
    cardClass: "card-premium-cyan"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding-crypto relative overflow-hidden">



      <div className="text-center mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-[0.3em]"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg,#f97316,#facc15) border-box',
            border: '1.5px solid transparent',
            color: '#ea580c',
          }}>
          The Engineering Standard
        </div>
        <h2 className="title-hero text-slate-900 mb-3">
          Why <span className="gradient-text-blue">The Lab.</span>
        </h2>
        <p className="subtitle-crypto max-w-xl mx-auto">
          We combine technical excellence with a deep understanding of institutional goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className={`p-5 ${reason.cardClass} flex flex-col items-center text-center group`}
          >
            <div className="w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center text-white mb-4 group-hover:scale-110 shadow-md transition-transform">
              {React.cloneElement(reason.icon, { size: 18 })}
            </div>
            <h3 className="text-sm font-bold text-white mb-2 tracking-tight uppercase leading-none">{reason.title}</h3>
            <p className="text-white/80 font-medium leading-relaxed text-xs">{reason.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 pt-8 flex flex-wrap justify-between items-center gap-8 relative z-10 opacity-70"
        style={{ borderTop: '1px solid rgba(91,33,245,0.15)' }}>
        <div className="flex items-center gap-3 text-slate-600">
          <Zap className="text-purple-500" size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Engineered for Performance</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Shield className="text-purple-500" size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Audited by Experts</span>
        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
