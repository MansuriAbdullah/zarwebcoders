import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, ChevronRight, Zap, Target, Search, Settings, 
  Workflow, Hexagon, Sparkles, Activity, Clock, ShieldCheck, PenTool, Code
} from 'lucide-react';

const steps = [
  { 
    title: "Vanguard Audit", 
    desc: "Rigorous research and institutional-grade planning to define the core architectural future of your protocol.", 
    number: "01", 
    icon: <Search size={22} />, 
    color: "#5b21f5",
    gradient: "linear-gradient(135deg, #5b21f5, #a855f7, #ec4899)",
    shadow: "rgba(91,33,245,0.4)"
  },
  { 
    title: "Cinematic Forge", 
    desc: "High-fidelity UI/UX engineering designed to create immersive, premium digital experiences for users.", 
    number: "02", 
    icon: <PenTool size={22} />, 
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899, #f97316)",
    shadow: "rgba(124,58,237,0.4)"
  },
  { 
    title: "Synthesis Phase", 
    desc: "Development phase where code is hardened, audited, and optimized for infinite scale and performance.", 
    number: "03", 
    icon: <Code size={22} />, 
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06d6a0, #00d2ff)",
    shadow: "rgba(8,145,178,0.4)"
  },
  { 
    title: "Hardening QA", 
    desc: "Exhaustive QA and deep-level security stress-testing to ensure long-term institutional stability.", 
    number: "04", 
    icon: <ShieldCheck size={22} />, 
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #facc15, #10b981)",
    shadow: "rgba(249,115,22,0.4)"
  },
  { 
    title: "Orbital Launch", 
    desc: "Strategic deployment and post-launch support to ensure your product leads the decentralization market.", 
    number: "05", 
    icon: <Rocket size={22} />, 
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #84fab0, #0891b2)",
    shadow: "rgba(16,185,129,0.4)"
  }
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden py-32 bg-white dark:bg-[#0c0825] transition-colors duration-500">
      
      {/* Background Colorful Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-[-10%] w-[800px] h-[800px] bg-pink-600/5 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full text-[13px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl transition-all"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0070f3, #7928ca, #ff0080) border-box',
              border: '2.5px solid transparent',
              color: '#7928ca',
            }}
          >
            <Clock size={16} className="text-blue-500 animate-spin-slow" /> Engineering Lifecycle
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter uppercase"
          >
            HOW WE <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] bg-clip-text text-transparent">DELIVER.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed"
          >
            Our proven institutional-grade methodology ensures your project transitions from concept to mainnet dominance with vibrant precision.
          </motion.p>
        </div>

        {/* Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent pointer-events-none -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group relative flex flex-col items-center text-center px-4 mb-16 lg:mb-0"
            >
              {/* Step Step Number and Icon */}
              <div className="relative mb-10">
                <div 
                  className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative z-20"
                  style={{ background: step.gradient, boxShadow: `0 15px 45px -5px ${step.shadow}` }}
                >
                  {step.icon}
                </div>
                {/* Orbital Ring with Color Accent */}
                <div className="absolute inset-0 -m-3 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-full group-hover:rotate-[180deg] transition-transform duration-[3s] pointer-events-none" />
                
                {/* Floating Step Number */}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-2xl z-30">
                  <span className="text-[12px] font-black tracking-widest text-[#7928ca]">{step.number}</span>
                </div>
              </div>

              {/* Text Info Area */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors uppercase duration-500 leading-none">
                {step.title}
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-500">
                {step.desc}
              </p>

              {/* Vertical Divider (Mobile/Tablet) */}
              <div className="lg:hidden w-px h-16 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 my-6" />
            </motion.div>
          ))}
        </div>

        {/* Final CTA Banner Case Study */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-28 p-1 rounded-[3rem] shadow-2xl relative overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #0070f3, #7928ca, #ff0080)' }}
        >
          <div className="bg-white dark:bg-slate-900 rounded-[2.9rem] p-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=process${i}`} className="w-14 h-14 rounded-full border-4 border-white dark:border-slate-900 shadow-2xl" alt="expert" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-widest mb-1">Expert Led Deliveries</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Our senior architects lead every single step</p>
              </div>
            </div>
            <motion.div 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex-shrink-0"
            >
               <button className="px-10 py-5 bg-gradient-to-r from-[#0070f3] to-[#7928ca] text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:shadow-cyan-500/20 transition-all flex items-center gap-3">
                 Book Design Sprint <Zap size={18} className="animate-pulse" />
               </button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
