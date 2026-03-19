import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Smartphone, Shield, Zap, ArrowRight, Server, Cpu } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Web Design",
    desc: "Blazing fast, SEO-hardened digital ecosystems with bespoke interactions for global brands.",
    icon: <Globe size={24} />,
    features: ["Cinematic UI/UX", "Next.js Labs", "Optimization Core"],
    cardClass: "card-premium-blue"
  },
  {
    id: 2,
    title: "Web3 & Blockchain",
    desc: "Architecting the decentralized frontier with hardened smart contracts and high-fidelity dApps.",
    icon: <Layers size={24} />,
    features: ["Solidity Audits", "Layer 2 Solutions", "DEX Architecture"],
    cardClass: "card-premium-purple"
  },
  {
    id: 3,
    title: "Mobile Engineering",
    desc: "Premium iOS & Android infrastructure with seamless institutional-grade experiences.",
    icon: <Smartphone size={24} />,
    features: ["Native Systems", "Performance Tuning", "Seamless Scale"],
    cardClass: "card-premium-orange"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding-crypto relative overflow-hidden bg-white"
    >


      <div className="text-center mb-8 sm:mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-[0.3em]"
          style={{ background: 'rgba(168,85,247,0.2)', border: '1.5px solid rgba(168,85,247,0.4)', color: '#d8b4fe' }}>
          Our Offerings
        </div>
        <h2 className="title-hero text-slate-900 mb-3">
          Technical <span style={{
            background: 'linear-gradient(135deg, #5b21f5, #a855f7)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Superiority.</span>
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base font-medium leading-relaxed">
          We combine high-performance engineering with state-of-the-art creative vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group"
          >
            <div className={`${service.cardClass} p-5 sm:p-6 h-full flex flex-col items-center text-center shadow-xl relative z-10`}>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                {React.cloneElement(service.icon, { size: 22 })}
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight uppercase leading-tight">{service.title}</h4>
              <p className="text-white/80 font-medium leading-relaxed mb-4 text-xs sm:text-sm">{service.desc}</p>

              <div className="space-y-1.5 w-full mb-4">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center justify-center gap-2 text-[10px] font-bold text-white/70 uppercase tracking-widest">
                    <Zap size={9} className="fill-white/80" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-3 border-t border-white/20 w-full">
                <button className="text-[10px] font-bold text-white flex items-center gap-2 mx-auto hover:gap-3 transition-all uppercase tracking-[0.2em]">
                  Explore <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
        <div className="flex flex-col items-center gap-2 group"><Server size={22} className="text-purple-600 group-hover:scale-110 transition-transform" /><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">99.9% Uptime</span></div>
        <div className="flex flex-col items-center gap-2 group"><Shield size={22} className="text-purple-600 group-hover:scale-110 transition-transform" /><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">AES-256 Secured</span></div>
        <div className="flex flex-col items-center gap-2 group"><Globe size={22} className="text-purple-600 group-hover:scale-110 transition-transform" /><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">Global Edge</span></div>
        <div className="flex flex-col items-center gap-2 group"><Cpu size={22} className="text-purple-600 group-hover:scale-110 transition-transform" /><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-center">Quantum Ready</span></div>
      </div>
    </section>
  );
};

export default Services;
