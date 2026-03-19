import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "John Carter",
    role: "CEO, TechSphere",
    content: "ZarWebCoders transformed our legacy system into a high-performance cloud solution. Their institutional-grade expertise in Web3 and modern dev stack is unmatched.",
    image: "https://i.pravatar.cc/150?u=john",
    stars: 5,
    tag: "Scale Excellence",
    cardClass: "card-premium-blue"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, Innovate",
    content: "The mobile app they built for us has seen incredible user growth. The UI/UX is intuitive and the protocol-level performance is flawless. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=sarah",
    stars: 5,
    tag: "UX Engineering",
    cardClass: "card-premium-purple"
  },
  {
    name: "Michael Chen",
    role: "Founder, CryptoNexus",
    content: "Their understanding of smart contracts and dApp security helped us launch our NFT marketplace ahead of schedule. Truly professional, state-of-the-art team.",
    image: "https://i.pravatar.cc/150?u=mike",
    stars: 5,
    tag: "Mainnet Audit",
    cardClass: "card-premium-cyan"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="section-padding-crypto relative overflow-hidden">



      <div className="text-center mb-7">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          style={{
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #ec4899, #f97316) border-box',
            border: '1.5px solid transparent', color: '#db2777',
          }}>
          Institutional Trust
        </div>
        <h2 className="title-hero mb-2" style={{ color: '#0f0a2e' }}>
          Founders <span className="gradient-text-blue">Verified.</span>
        </h2>
        <p className="subtitle-crypto max-w-xl mx-auto">
          Hear from the visionaries we've helped architect high-fidelity digital futures.
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.5 }}
            className={`${t.cardClass} p-6 sm:p-8 md:p-10 relative overflow-hidden`}
          >
            <Quote className="absolute top-4 left-4 text-white/10" size={60} strokeWidth={0.5} />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[9px] font-black uppercase tracking-widest mb-4 border border-white/30">
                <Zap size={10} className="fill-white" /> {t.tag}
              </div>

              <p className="text-sm sm:text-base font-semibold text-white mb-5 leading-relaxed italic max-w-xl">
                "{t.content}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-2xl border-2 border-white/30 shadow-lg mb-2"
                />
                <h4 className="text-sm font-bold text-white tracking-tight uppercase mb-0.5">{t.name}</h4>
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.3em] mb-2">{t.role}</p>
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between items-center mt-5 px-1">
          <button onClick={prev} className="group w-9 h-9 rounded-full border border-purple-200 bg-white/80 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-purple-500' : 'w-4 bg-slate-300'}`}
              />
            ))}
          </div>

          <button onClick={next} className="group w-9 h-9 rounded-full border border-purple-200 bg-white/80 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
