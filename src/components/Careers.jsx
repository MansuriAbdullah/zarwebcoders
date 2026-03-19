import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Send, Zap } from 'lucide-react';

const positions = [
  { title: "Blockchain Engineer", type: "Full-time", location: "Remote / Dubai", category: "Engineering", cardClass: "card-premium-blue" },
  { title: "Full Stack Web3 Dev", type: "Full-time", location: "Remote", category: "Engineering", cardClass: "card-premium-purple" },
  { title: "Product Designer", type: "Contract", location: "Remote", category: "Design", cardClass: "card-premium-cyan" }
];

const Careers = () => {
  return (
    <section id="careers" className="section-padding-crypto relative overflow-hidden">
      <div className="orb-glow orb-cyan absolute top-[40%] right-[-10%] w-[400px] h-[400px] animate-glow" style={{ opacity: 0.2 }} />
      <div className="orb-glow orb-green absolute bottom-[0%] left-[-5%] w-[350px] h-[350px] animate-glow" style={{ opacity: 0.15, animationDelay: '2s' }} />

      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-[0.3em]"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg,#0891b2,#06d6a0) border-box',
            border: '1.5px solid transparent',
            color: '#0891b2',
          }}>
          <Zap size={10} fill="currentColor" />
          Join The Mission
        </div>
        <h2 className="title-hero text-slate-900 mb-2">
          Architect The <span className="gradient-text-blue">Next Epoch.</span>
        </h2>
        <p className="subtitle-crypto max-w-lg mx-auto">
          We're looking for visionary engineers and creators to build the decentralized future.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {positions.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            className={`${job.cardClass} p-5 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer`}
          >
            <div className="flex items-center gap-4 mb-3 md:mb-0">
              <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Briefcase size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{job.title}</h4>
                <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold uppercase tracking-widest">
                  <span>{job.category}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                  <span>·</span>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-[10px] font-black text-white/75 group-hover:text-white uppercase tracking-widest transition-all">
              Apply Now <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center opacity-80 relative z-10">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
          Don't see your role? Email us at <span className="text-purple-600 underline">talent@zarwebcoders.com</span>
        </p>
      </div>
    </section>
  );
};

export default Careers;
