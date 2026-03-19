import React from 'react';
import { motion } from 'framer-motion';
import {
  Database, Server, Codepen, Cpu, Cloud, Globe, Layers, Zap, ShieldCheck, Smartphone, Terminal
} from 'lucide-react';

const techs = [
  { name: 'React', icon: <Codepen />, cardClass: 'card-premium-cyan' },
  { name: 'Node.js', icon: <Server />, cardClass: 'card-premium-green' },
  { name: 'Solidity', icon: <ShieldCheck />, cardClass: 'card-premium-blue' },
  { name: 'Python', icon: <Terminal />, cardClass: 'card-premium-purple' },
  { name: 'MongoDB', icon: <Database />, cardClass: 'card-premium-green' },
  { name: 'Web3.js', icon: <Globe />, cardClass: 'card-premium-orange' },
  { name: 'Flutter', icon: <Smartphone />, cardClass: 'card-premium-cyan' },
  { name: 'AWS', icon: <Cloud />, cardClass: 'card-premium-blue' },
  { name: 'Docker', icon: <Layers />, cardClass: 'card-premium-purple' },
  { name: 'Ethereum', icon: <Zap />, cardClass: 'card-premium-orange' },
];

const TechStack = () => {
  return (
    <section className="py-10 sm:py-14 overflow-hidden relative">

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-7">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0891b2, #06d6a0) border-box',
              border: '1.5px solid transparent', color: '#0891b2',
            }}>
            Tech Infrastructure
          </div>
          <h2 className="title-hero mb-2" style={{ color: '#0f0a2e' }}>
            Our <span className="gradient-text-blue">Stack.</span>
          </h2>
          <p className="subtitle-crypto max-w-xl mx-auto">
            World's most sophisticated technologies powering high-fidelity digital futures.
          </p>
        </div>
      </div>

      <div className="flex overflow-hidden relative">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-[10%] sm:w-[15%] bg-gradient-to-r from-[#e8fff6] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[10%] sm:w-[15%] bg-gradient-to-l from-[#e8fff6] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-3 whitespace-nowrap min-w-max px-4"
        >
          {[...techs, ...techs, ...techs].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.08, y: -5 }}
              className={`${tech.cardClass} px-4 py-3 sm:px-6 sm:py-4 flex flex-col items-center justify-center gap-2 cursor-pointer min-w-[80px] sm:min-w-[100px]`}
            >
              <div className="text-white">
                {React.cloneElement(tech.icon, { size: 22, strokeWidth: 1.5 })}
              </div>
              <span className="font-bold text-white text-[10px] sm:text-xs tracking-tight uppercase leading-none">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
