import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-8 sm:pt-12 pb-16 overflow-hidden bg-white dark:bg-[#0f0a2e] transition-colors duration-500">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 bg-grid-cyber opacity-100 pointer-events-none z-0" />
      
      {/* Animated Cyber Lines */}
      <div className="absolute top-[20%] w-full z-0 overflow-hidden"><div className="animate-cyber-line" /></div>
      <div className="absolute bottom-[20%] w-full z-0 overflow-hidden"><div className="animate-cyber-line" style={{ animationDelay: '6s' }} /></div>

      {/* Background Orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-25 dark:opacity-15 blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, #5b21f5, #a855f7)' }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-20 dark:opacity-15 blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, #06b6d4, #10b981)' }} />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left pt-2 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.25em] shadow-xl"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #a855f7, #ec4899) border-box',
                border: '1.5px solid transparent',
                color: '#7c3aed',
              }}
            >
              <Zap size={14} fill="currentColor" className="animate-pulse" />
              ENGINEERING THE MAINNET
            </motion.div>

            <h1 className="mb-8 text-slate-900 dark:text-white transition-colors duration-300 leading-[1.1] uppercase text-glow-cyan text-4xl sm:text-6xl md:text-6xl lg:text-5.5xl font-bold tracking-[0.05em]">
              <div className="overflow-hidden mb-1">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Build Your Elite
                </motion.span>
              </div>
              <div className="overflow-hidden mb-1">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Crypto Ecosystems
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                  className="block gradient-text-blue"
                >
                  with Robotic Lab
                </motion.span>
              </div>
            </h1>

            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {['Launch dApp.', 'Scale Token.', 'Node Infrastructure.'].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white shadow-md shadow-cyan-500/20"
                  style={{ background: i === 0 ? 'linear-gradient(135deg,#06b6d4,#10b981)' : i === 1 ? 'linear-gradient(135deg,#5b21f5,#7c3aed)' : 'linear-gradient(135deg,#ec4899,#f97316)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <p className="subtitle-crypto mb-8 max-w-xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              We specialize in engineering the world's most elite crypto websites and decentralized ecosystems. Our robotic lab builds sovereign blockchain platforms that dominate the next-generation digital economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#5b21f5] to-[#7c3aed] text-white rounded-[1.5rem] font-bold shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                Initialize Project <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                View Archive
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-10 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-black mb-1 leading-none tracking-tight"
                  style={{ background: 'linear-gradient(135deg,#5b21f5,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  150+
                </p>
                <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Tokens Hub</p>
              </div>
              <div className="w-[1px] h-10 bg-slate-100 dark:bg-slate-800 hidden sm:block" />
              <div className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-black mb-1 leading-none tracking-tight"
                  style={{ background: 'linear-gradient(135deg,#ec4899,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  $2.5B
                </p>
                <p className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Total Impact</p>
              </div>
              <div className="w-full sm:w-auto flex items-center gap-4 justify-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=acc${i}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-xl" alt="founder" />
                  ))}
                </div>
                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">Institutional<br />Standard</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:-mt-16 xl:-mt-24 sm:mt-6"
          >
            <div className="relative group max-w-[420px] sm:max-w-[480px] mx-auto">
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[2.5rem] border border-purple-200/30 overflow-hidden bg-[#0a1426]"
                style={{ boxShadow: '0 40px 100px rgba(91,33,245,0.35), 0 15px 50px rgba(236,72,153,0.25)' }}
              >
                <img
                  src="/assets/hero_light.png"
                  alt="Web3 Future Core"
                  className="w-full h-full object-cover opacity-95"
                />

                {/* Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent h-[10%] w-full animate-scanline pointer-events-none" />

                {/* Glass badge top-right */}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-purple-100 dark:border-slate-800 shadow-lg z-20"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-2"
                    style={{ background: 'linear-gradient(135deg, #5b21f5, #a855f7)' }}>
                    <ShieldCheck className="text-white" size={18} />
                  </div>
                  <p className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-0.5">Status</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Protocol Hardened</p>
                </motion.div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-purple-100 dark:border-slate-800 shadow-xl z-20 rounded-2xl"
                style={{ maxWidth: '170px' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #5b21f5, #ec4899)' }}>
                    <TrendingUp size={15} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Growth Alpha</p>
                    <p className="text-base font-black text-slate-900 dark:text-white">+84.2%</p>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-purple-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #5b21f5, #ec4899, #f97316)' }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
