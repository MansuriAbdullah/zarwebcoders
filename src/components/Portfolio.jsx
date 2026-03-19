import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "IVAMAX Protocol",
    desc: "Institutional Web3 platform with MERN + high-security Solidity smart contracts.",
    image: "/assets/projects/ivamax.png",
    category: "Web3 Ecosystem",
    link: "https://ivamax-omega.vercel.app/",
    tech: ["Solidity", "MERN", "Web3.js"],
    cardClass: "card-premium-blue"
  },
  {
    title: "REXTOKEN Core",
    desc: "Crypto ecosystem focused on tokenomics and decentralized exchange with audited contracts.",
    image: "/assets/projects/rextoken.png",
    category: "DeFi / Finance",
    link: "https://www.rextoken.in/",
    tech: ["Ethers.js", "Solidity", "Node.js"],
    cardClass: "card-premium-purple"
  },
  {
    title: "Dhanik Dashboard",
    desc: "Corporate analytics interface with React and Material UI for financial tracking.",
    image: "/assets/projects/dhanik.png",
    category: "Fintech UI",
    link: "https://www.dhanik.com/",
    tech: ["React", "Material UI", "Chart.js"],
    cardClass: "card-premium-cyan"
  },
  {
    title: "Smart Seller Hub",
    desc: "Enterprise vendor management platform for high-performance inventory workflows.",
    image: "/assets/projects/smartseller.png",
    category: "Enterprise SaaS",
    link: "https://smartseller.vercel.app/",
    tech: ["Node.js", "Redux", "Dashboard UI"],
    cardClass: "card-premium-green"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding-crypto relative">


      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-7 gap-4">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold mb-4 uppercase tracking-[0.3em]"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #ec4899) border-box',
              border: '1.5px solid transparent', color: '#7c3aed',
            }}>
            Digital Showcase
          </div>
          <h2 className="title-hero mb-2" style={{ color: '#0f0a2e' }}>
            Case <span className="gradient-text-blue">Studies.</span>
          </h2>
          <p className="subtitle-crypto max-w-md">
            From mission-critical protocols to enterprise dashboards — excellence delivered.
          </p>
        </div>
        <button className="btn-crypto-outline flex-shrink-0">View All Projects</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className={`${project.cardClass} group cursor-pointer`}
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[9px] font-black uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">{project.title}</h4>
              <p className="text-white/75 text-xs font-medium leading-relaxed mb-3">{project.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-bold text-white/60 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/20">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-all font-bold text-[10px] uppercase tracking-widest"
                >
                  Launch <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
