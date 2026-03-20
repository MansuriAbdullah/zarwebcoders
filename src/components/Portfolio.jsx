import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Layers, ShieldCheck, Zap, Globe, Cpu, Star, Rocket, Code, Hexagon } from 'lucide-react';

const projects = [
  {
    title: "GigDial Nexus",
    desc: "A mission-critical freelance marketplace connecting global talent with high-fidelity opportunities.",
    image: "/assets/projects/gigdial.png",
    category: "Marketplace / Web3",
    link: "https://gigdial.com/",
    tech: ["React", "Node.js", "Express"],
    color: "#5b21f5",
    gradient: "linear-gradient(135deg, #5b21f5, #a855f7, #ec4899)",
    shadow: "rgba(91,33,245,0.4)"
  },
  {
    title: "CryptoSuggest AI",
    desc: "Institutional-grade AI insights and high-entropy investment suggestion engine for digital assets.",
    image: "/assets/projects/cryptosuggest.png",
    category: "AI Fintech",
    link: "https://cryptosuggest-tau.vercel.app/",
    tech: ["Python", "React", "AI/ML"],
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e, #f97316)",
    shadow: "rgba(236,72,153,0.4)"
  },
  {
    title: "EVault Protocol",
    desc: "Quantum-resistant decentralized storage for sensitive institutional documents and assets.",
    image: "/assets/projects/evault.png",
    category: "Cybersecurity",
    link: "https://evault-one.vercel.app/",
    tech: ["IPFS", "Solidity", "Tailwind"],
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06d6a4, #10b981)",
    shadow: "rgba(8,145,178,0.4)"
  },
  {
    title: "ShagunPro SaaS",
    desc: "Premium digital registry and event orchestration platform with automated liquidity routing.",
    image: "/assets/projects/shagunpro.png",
    category: "SaaS / Fintech",
    link: "https://shagunpro.com/",
    tech: ["Next.js", "Firebase", "Stripe"],
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #06d6a0, #0891b2)",
    shadow: "rgba(16,185,129,0.4)"
  },
  {
    title: "IVAMAX Omega",
    desc: "Full-stack institutional ecosystem featuring MERN + high-fidelity Solidity smart contracts.",
    image: "/assets/projects/ivamax.png",
    category: "Web3 Ecosystem",
    link: "https://ivamax-omega.vercel.app/",
    tech: ["Solidity", "MERN", "Web3.js"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899, #f97316)",
    shadow: "rgba(124,58,237,0.4)"
  },
  {
    title: "REXTOKEN Core",
    desc: "Mission-critical crypto ecosystem focused on tokenomics and decentralized exchange architecture.",
    image: "/assets/projects/rextoken.png",
    category: "DeFi / Finance",
    link: "https://www.rextoken.in/",
    tech: ["Ethers.js", "Solidity", "Node.js"],
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #facc15, #10b981)",
    shadow: "rgba(249,115,22,0.4)"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden py-32 bg-white dark:bg-[#0c0825] transition-colors duration-500">
      
      {/* Background Colorful Aura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-200px] w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#5b21f5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        
        {/* Colorful Title Area */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-black uppercase tracking-[0.3em] mb-8 shadow-2xl transition-all"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ff0080, #7928ca, #0070f3) border-box',
              border: '2.5px solid transparent',
              color: '#7928ca'
            }}
          >
            <Hexagon size={16} className="text-pink-500 animate-spin-slow" /> Engineering Masterpieces
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight uppercase"
          >
            THE <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] bg-clip-text text-transparent">Archive.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Explore our curated masterpieces where high-fidelity engineering meets vibrant digital evolution.
          </motion.p>
        </div>

        {/* Portfolio Grid with Colorful Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -15 }}
              className="group relative rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl hover:shadow-[0_45px_120px_-20px_rgba(91,33,245,0.3)] transition-all duration-700 flex flex-col"
            >
              {/* Image Container with Colorful Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center backdrop-blur-sm"
                  style={{ background: `linear-gradient(rgba(0,0,0,0), ${project.shadow})` }}
                >
                  <motion.a
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link}
                    target="_blank"
                    className="w-20 h-20 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl relative z-20 group/btn"
                  >
                    <ArrowUpRight size={28} className="group-hover/btn:rotate-45 transition-transform" />
                  </motion.a>
                </div>
                
                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl"
                  style={{ background: project.gradient }}>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Colorful Content Panel */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col relative text-center sm:text-left">
                {/* Individual project border at the top for extra color */}
                <div className="absolute top-0 left-0 w-full h-2" 
                  style={{ background: project.gradient }} />

                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: project.color }} />
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight group-hover:translate-x-1 transition-transform duration-500 uppercase leading-none"
                    style={{ color: project.color }}>
                    {project.title}
                  </h3>
                </div>

                <p className="text-[14px] sm:text-[15px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 line-clamp-3 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Vivid Tech Pills */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 mb-10">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-black text-white uppercase tracking-widest border border-transparent px-4 py-1.5 rounded-xl shadow-lg transition-all hover:scale-105"
                      style={{ background: project.gradient }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Action with Color Theme */}
                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.2em] group/launch transition-all hover:scale-110 active:scale-95"
                    style={{ color: project.color }}
                  >
                    Launch Nexus <Rocket size={16} className="group-hover/launch:-translate-y-1 group-hover/launch:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex gap-6" style={{ color: project.color }}>
                    <Github size={20} className="hover:scale-125 transition-all cursor-pointer" />
                    <Star size={20} className="hover:scale-125 transition-all cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Colorful Bottom Summary Banner */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-20 sm:mt-24 p-1 rounded-[3rem] sm:rounded-[4rem] shadow-2xl relative overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #ff0080, #7928ca, #0070f3)' }}
        >
          <div className="bg-white dark:bg-slate-900 rounded-[2.9rem] sm:rounded-[3.9rem] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-[#ff0080] to-[#7928ca] flex items-center justify-center text-white shadow-2xl flex-shrink-0">
                 <Zap size={36} />
              </div>
              <div>
                 <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-widest leading-none mb-1.5 uppercase">Instant Scaling</p>
                 <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">Engineering the high-end digital future</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
               <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-1">50+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff0080]">Mainnet</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-1">120K+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7928ca]">Impact</p>
               </div>
               <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-1">$2.5B</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0070f3]">TVL Secured</p>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
