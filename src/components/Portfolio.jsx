import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Layers, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

const projects = [
  {
    title: "GigDial Nexus",
    desc: "A mission-critical freelance marketplace connecting global talent with high-fidelity opportunities.",
    image: "/assets/projects/gigdial.png",
    category: "Marketplace / Web3",
    link: "https://gigdial.com/",
    tech: ["React", "Node.js", "Express"],
    color: "#5b21f5",
    gradient: "linear-gradient(135deg, #5b21f5, #a855f7)",
    shadow: "rgba(91,33,245,0.2)"
  },
  {
    title: "CryptoSuggest AI",
    desc: "Institutional-grade AI insights and high-entropy investment suggestion engine for digital assets.",
    image: "/assets/projects/cryptosuggest.png",
    category: "AI Fintech",
    link: "https://cryptosuggest-tau.vercel.app/",
    tech: ["Python", "React", "AI/ML"],
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    shadow: "rgba(236,72,153,0.2)"
  },
  {
    title: "EVault Protocol",
    desc: "Quantum-resistant decentralized storage for sensitive institutional documents and assets.",
    image: "/assets/projects/evault.png",
    category: "Cybersecurity",
    link: "https://evault-one.vercel.app/",
    tech: ["IPFS", "Solidity", "Tailwind"],
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #06d6a4)",
    shadow: "rgba(8,145,178,0.2)"
  },
  {
    title: "ShagunPro SaaS",
    desc: "Premium digital registry and event orchestration platform with automated liquidity routing.",
    image: "/assets/projects/shagunpro.png",
    category: "SaaS / Fintech",
    link: "https://shagunpro.com/",
    tech: ["Next.js", "Firebase", "Stripe"],
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #06d6a0)",
    shadow: "rgba(16,185,129,0.2)"
  },
  {
    title: "IVAMAX Omega",
    desc: "Full-stack institutional ecosystem featuring MERN + high-fidelity Solidity smart contracts.",
    image: "/assets/projects/ivamax.png",
    category: "Web3 Ecosystem",
    link: "https://ivamax-omega.vercel.app/",
    tech: ["Solidity", "MERN", "Web3.js"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    shadow: "rgba(124,58,237,0.2)"
  },
  {
    title: "REXTOKEN Core",
    desc: "Mission-critical crypto ecosystem focused on tokenomics and decentralized exchange architecture.",
    image: "/assets/projects/rextoken.png",
    category: "DeFi / Finance",
    link: "https://www.rextoken.in/",
    tech: ["Ethers.js", "Solidity", "Node.js"],
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    shadow: "rgba(249,115,22,0.2)"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden py-24 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #0891b2) border-box',
              border: '1.5px solid transparent',
              color: '#5b21f5',
            }}
          >
            <ShieldCheck size={11} className="animate-pulse" /> Digital Architecture Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="title-hero text-slate-900 dark:text-white mb-4 transition-colors duration-300"
          >
            The Engineering <span className="gradient-text-blue">Archive.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="subtitle-crypto max-w-2xl mx-auto text-slate-500 dark:text-slate-400 transition-colors duration-300"
          >
            Explore our curated selection of high-performance protocols, immersive dApps, and institutional-grade digital ecosystems.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-700/50 shadow-lg">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-800 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-purple-600 transition-colors uppercase duration-300">
                  {project.title}
                </h3>
                <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 line-clamp-2 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border border-slate-100 dark:border-slate-800 px-3 py-1 rounded-lg bg-slate-50/50 dark:bg-slate-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800/60 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.2em] transition-all"
                    style={{ color: project.color }}
                  >
                    Launch Node <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <div className="flex gap-3 text-slate-300 dark:text-slate-700">
                    <Github size={16} className="hover:text-purple-500 transition-colors cursor-pointer" />
                    <Layers size={16} className="hover:text-purple-500 transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <div className="mt-20 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
          {[
            { icon: Zap, label: "50+ Mainnet Launches" },
            { icon: Globe, label: "Global Edge Nodes" },
            { icon: Cpu, label: "Quantum Audit Ready" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={20} className="text-purple-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
