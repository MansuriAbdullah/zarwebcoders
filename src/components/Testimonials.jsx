import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Zap, Shield, Award, TrendingUp, Users, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: "John Carter",
    role: "CEO, TechSphere",
    company: "TechSphere Inc.",
    content: "ZarWebCoders transformed our legacy system into a high-performance cloud solution. Their institutional-grade expertise in Web3 and modern dev stack is unmatched. Delivered 3 weeks ahead of schedule.",
    image: "https://i.pravatar.cc/150?u=john",
    stars: 5,
    tag: "Scale Excellence",
    category: "Enterprise",
    metric: "3× Performance Boost",
    gradient: "linear-gradient(135deg, #5b21f5, #818cf8)",
    accentColor: "#5b21f5",
    lightBg: "#f5f3ff",
    lightBorder: "#e9d5ff",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, Innovate",
    company: "Innovate Labs",
    content: "The mobile app they built for us has seen incredible user growth. The UI/UX is intuitive and the protocol-level performance is flawless. Over 100K downloads in the first month!",
    image: "https://i.pravatar.cc/150?u=sarah",
    stars: 5,
    tag: "UX Engineering",
    category: "Mobile App",
    metric: "100K+ Downloads",
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    accentColor: "#ec4899",
    lightBg: "#fdf2f8",
    lightBorder: "#fbcfe8",
  },
  {
    name: "Michael Chen",
    role: "Founder, CryptoNexus",
    company: "CryptoNexus Protocol",
    content: "Their smart contract auditing and dApp development is world-class. Launched our NFT marketplace ahead of schedule with zero security vulnerabilities. Truly the best team in Web3.",
    image: "https://i.pravatar.cc/150?u=mike",
    stars: 5,
    tag: "Mainnet Audit",
    category: "Web3 / DeFi",
    metric: "$2M+ Trading Volume",
    gradient: "linear-gradient(135deg, #0891b2, #06d6a0)",
    accentColor: "#0891b2",
    lightBg: "#ecfeff",
    lightBorder: "#a5f3fc",
  },
  {
    name: "Aisha Al-Rashidi",
    role: "CTO, NovaPay",
    company: "NovaPay Finance",
    content: "From architecture design to deployment, ZarWebCoders handled our entire fintech stack flawlessly. Full compliance, blazing performance, and a team that actually understands finance.",
    image: "https://i.pravatar.cc/150?u=aisha",
    stars: 5,
    tag: "FinTech Stack",
    category: "FinTech",
    metric: "99.99% Uptime",
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    accentColor: "#f97316",
    lightBg: "#fff7ed",
    lightBorder: "#fed7aa",
  },
];

const trustBadges = [
  { icon: Shield, label: "Audited Code", value: "100%" },
  { icon: BadgeCheck, label: "Client Satisfaction", value: "4.9/5" },
  { icon: Users, label: "Projects Delivered", value: "200+" },
  { icon: Award, label: "Years Experience", value: "7+" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, current]);

  const next = () => { setAutoPlay(false); setCurrent((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setAutoPlay(false); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); };
  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-[#0f0a2e] transition-colors duration-500">

      {/* Soft BG glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(91,33,245,0.06), transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ec4899, #f97316) border-box',
              border: '1.5px solid transparent',
              color: '#db2777',
            }}
          >
            <Zap size={11} fill="currentColor" /> Institutional Trust
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tighter uppercase"
          >
            FOUNDER <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] bg-clip-text text-transparent">Nexus.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Verified narratives from the high-fidelity engineering frontlines.
          </motion.p>
        </div>

        {/* ── Trust Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {trustBadges.map((b, i) => (
            <div key={i}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-colors duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-1"
                style={{ background: 'linear-gradient(135deg,#5b21f5,#a855f7)' }}>
                <b.icon size={18} />
              </div>
              <p className="text-xl font-black text-slate-900 dark:text-white transition-colors duration-300">{b.value}</p>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">{b.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Main Testimonial Card ── */}
        <div className="max-w-3xl mx-auto">

          {/* Category Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => { setAutoPlay(false); setCurrent(i); }}
                className="transition-all duration-500 rounded-full"
                style={{
                  height: '6px',
                  width: i === current ? '32px' : '16px',
                  background: i === current ? t.gradient : '#e2e8f0',
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden border transition-colors duration-300"
              style={{
                background: t.lightBg,
                borderColor: t.lightBorder,
                boxShadow: `0 20px 60px ${t.accentColor}18`,
              }}
            >
              {/* Top gradient bar */}
              <div className="h-1.5 w-full" style={{ background: t.gradient }} />

              <div className="p-8 md:p-12">
                {/* Category badge + metric */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
                    style={{ background: t.gradient }}
                  >
                    <Zap size={10} fill="white" /> {t.tag}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border"
                    style={{ color: t.accentColor, borderColor: t.lightBorder, background: 'white' }}
                  >
                    <TrendingUp size={11} /> {t.metric}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote
                    className="absolute -top-2 -left-1 opacity-10"
                    size={56}
                    strokeWidth={0.8}
                    style={{ color: t.accentColor }}
                  />
                  <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg font-medium leading-relaxed pl-3 italic transition-colors duration-300">
                    "{t.content}"
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-2xl border-2 shadow-md object-cover"
                      style={{ borderColor: t.lightBorder }}
                    />
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: t.gradient }}
                    >
                      <BadgeCheck size={11} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                      {t.name}
                    </h4>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 transition-colors duration-300">{t.role}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: t.accentColor }}>
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-purple-400 hover:text-purple-600 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              {current + 1} / {testimonials.length}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-purple-400 hover:text-purple-600 transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── All Reviews Mini ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0"
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => { setAutoPlay(false); setCurrent(i); }}
              className={`rounded-2xl p-4 text-left border transition-all duration-300 ${
                i === current
                  ? 'shadow-md scale-[1.02]'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 opacity-70 hover:opacity-100'
              }`}
              style={
                i === current
                  ? { background: item.lightBg, borderColor: item.lightBorder }
                  : {}
              }
            >
              <div className="flex items-center gap-2.5 mb-2">
                <img src={item.image} alt={item.name} className="w-8 h-8 rounded-xl object-cover" />
                <div>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">{item.name}</p>
                  <p className="text-[9px] text-slate-400 leading-tight">{item.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(item.stars)].map((_, si) => (
                  <Star key={si} size={9} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed transition-colors duration-300">
                {item.content}
              </p>
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
