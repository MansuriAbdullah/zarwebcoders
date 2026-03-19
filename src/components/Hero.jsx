import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-white"
    >


      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold mb-5 uppercase tracking-widest"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #a855f7, #ec4899) border-box',
                border: '1.5px solid transparent',
                color: '#7c3aed',
              }}
            >
              <Zap size={13} fill="currentColor" />
              The Future of Decentralized Tech
            </motion.div>

            <h1 className="title-hero mb-5" style={{ color: '#0f0a2e' }}>
              Build Your <br />
              <span className="gradient-text-blue">Digital Legacy</span> <br />
              With Precision.
            </h1>

            <p className="subtitle-crypto mb-6 max-w-xl mx-auto lg:mx-0">
              ZarWebCoders architects high-performance blockchain ecosystems and immersive Web3 experiences for world-class founders.
            </p>

            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <button className="btn-crypto-primary flex items-center gap-2">
                Explore Our Lab <ArrowRight size={18} />
              </button>
              <button className="btn-crypto-outline">
                View Showcase
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 tracking-tight"
                  style={{ background: 'linear-gradient(135deg,#5b21f5,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  150+
                </p>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Tokens Minted</p>
              </div>
              <div className="w-[1px] h-8 hidden sm:block" style={{ background: 'linear-gradient(180deg, #5b21f5, #ec4899)' }} />
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 tracking-tight"
                  style={{ background: 'linear-gradient(135deg,#ec4899,#f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  $850M+
                </p>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">TVL Impact</p>
              </div>
              <div className="w-[1px] h-8 hidden sm:block" style={{ background: 'linear-gradient(180deg, #06b6d4, #10b981)' }} />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=acc${i}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg" alt="founder" />
                  ))}
                </div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Trusted by Founders</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 lg:mt-0"
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
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-purple-100 shadow-lg z-20"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-2"
                    style={{ background: 'linear-gradient(135deg, #5b21f5, #a855f7)' }}>
                    <ShieldCheck className="text-white" size={18} />
                  </div>
                  <p className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-500 mb-0.5">Status</p>
                  <p className="text-xs font-bold text-slate-800">Protocol Hardened</p>
                </motion.div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 bg-white/95 backdrop-blur-xl border border-purple-100 shadow-xl z-20 rounded-2xl"
                style={{ maxWidth: '170px' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #5b21f5, #ec4899)' }}>
                    <TrendingUp size={15} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Growth Alpha</p>
                    <p className="text-base font-black text-slate-900">+84.2%</p>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-purple-100 rounded-full overflow-hidden">
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
