import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase, Send, Zap, MapPin, Clock, DollarSign,
  Users, Globe, Rocket, Shield, Heart, Code2,
  Coffee, Laptop, TrendingUp, Star, ChevronRight
} from 'lucide-react';

const positions = [
  {
    title: "Blockchain Engineer",
    type: "Full-time",
    location: "Remote / Dubai",
    category: "Engineering",
    salary: "$80K – $130K",
    skills: ["Solidity", "Rust", "Web3.js", "DeFi"],
    gradient: "linear-gradient(135deg, #5b21f5, #818cf8)",
    shadow: "rgba(91,33,245,0.35)",
    badge: "🔥 Hot",
    badgeColor: "#f97316",
    description: "Build and audit smart contracts powering next-gen DeFi protocols and NFT ecosystems."
  },
  {
    title: "Full Stack Web3 Developer",
    type: "Full-time",
    location: "Remote",
    category: "Engineering",
    salary: "$70K – $120K",
    skills: ["React", "Node.js", "Ethers.js", "IPFS"],
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    shadow: "rgba(124,58,237,0.35)",
    badge: "⚡ Urgent",
    badgeColor: "#5b21f5",
    description: "Design and ship beautiful dApps connecting Web2 users to the decentralized world."
  },
  {
    title: "Product Designer (UI/UX)",
    type: "Contract",
    location: "Remote",
    category: "Design",
    salary: "$50K – $90K",
    skills: ["Figma", "Motion Design", "Web3 UX", "Branding"],
    gradient: "linear-gradient(135deg, #0891b2, #06d6a0)",
    shadow: "rgba(8,145,178,0.35)",
    badge: "🎨 Creative",
    badgeColor: "#0891b2",
    description: "Craft pixel-perfect interfaces and immersive experiences for our Web3 products."
  },
  {
    title: "DevOps / Cloud Engineer",
    type: "Full-time",
    location: "Remote / USA",
    category: "Infrastructure",
    salary: "$75K – $125K",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
    shadow: "rgba(249,115,22,0.35)",
    badge: "🚀 New",
    badgeColor: "#10b981",
    description: "Scale our infrastructure to support millions of on-chain transactions per day."
  },
  {
    title: "Marketing & Growth Lead",
    type: "Full-time",
    location: "Remote",
    category: "Marketing",
    salary: "$55K – $95K",
    skills: ["Web3 Marketing", "Community", "SEO", "Analytics"],
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    shadow: "rgba(236,72,153,0.35)",
    badge: "📈 Growth",
    badgeColor: "#ec4899",
    description: "Lead community growth and brand strategy across global crypto audiences."
  },
];

const perks = [
  { icon: Globe, label: "100% Remote", desc: "Work from anywhere in the world" },
  { icon: TrendingUp, label: "Equity & Tokens", desc: "Share in our protocol's growth" },
  { icon: Heart, label: "Health Benefits", desc: "Full medical, dental & vision" },
  { icon: Laptop, label: "Home Office", desc: "$2,000 setup stipend" },
  { icon: Coffee, label: "Flex Hours", desc: "Async-first culture" },
  { icon: Star, label: "Learning Budget", desc: "$1,500/year for courses" },
];

const stats = [
  { value: "50+", label: "Team Members", color: "#5b21f5" },
  { value: "18+", label: "Countries", color: "#ec4899" },
  { value: "4.9★", label: "Glassdoor Rating", color: "#0891b2" },
  { value: "100%", label: "Remote First", color: "#10b981" },
];

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Engineering", "Design", "Infrastructure", "Marketing"];

  const filtered = activeFilter === "All"
    ? positions
    : positions.filter(p => p.category === activeFilter);

  return (
    <section
      id="careers"
      className="relative overflow-hidden py-20 bg-white dark:bg-[#0f0a2e] transition-colors duration-500"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,33,245,0.08), transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.08), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold mb-5 uppercase tracking-widest"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5b21f5, #ec4899) border-box',
              border: '1.5px solid transparent',
              color: '#7c3aed',
            }}
          >
            <Zap size={11} fill="currentColor" /> Join The Mission
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase leading-[1.05]"
          >
            Digital <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] bg-clip-text text-transparent">Legion.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed transition-colors duration-300"
          >
            Forge the backbone of the decentralized global state machine from anywhere on Earth.
          </motion.p>
        </div>

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <div key={i}
              className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 text-center shadow-sm transition-colors duration-300"
            >
              <p className="text-2xl md:text-3xl font-black mb-1 tracking-tight"
                style={{ color: s.color }}>{s.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border transition-all duration-300"
              style={
                activeFilter === f
                  ? { background: 'linear-gradient(135deg, #5b21f5, #ec4899)', color: 'white', borderColor: 'transparent' }
                  : { background: 'transparent', color: '#64748b', borderColor: 'rgba(91,33,245,0.25)' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Job Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20">
          {filtered.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ '--shadow-color': job.shadow }}
            >
              {/* Card top gradient strip */}
              <div className="h-1.5 w-full" style={{ background: job.gradient }} />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md"
                    style={{ background: job.gradient }}
                  >
                    <Briefcase size={18} />
                  </div>
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                    style={{ background: job.badgeColor }}
                  >
                    {job.badge}
                  </span>
                </div>

                {/* Title & Category */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  {job.category}
                </p>

                {/* Description */}
                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-4 transition-colors duration-300">
                  {job.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3 mb-4 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={11} /> {job.salary}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {job.skills.map((skill) => (
                    <span key={skill}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Apply button */}
                <button
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-bold text-white transition-all duration-300 group-hover:scale-[1.02]"
                  style={{ background: job.gradient, boxShadow: `0 8px 24px ${job.shadow}` }}
                >
                  Apply Now <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Perks Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 md:p-12 mb-12 transition-colors duration-300"
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
              Why Work With Us?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
              We believe great work starts with happy, empowered people.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#5b21f5,#a855f7)' }}>
                  <perk.icon size={16} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800 dark:text-white transition-colors duration-300">{perk.label}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 transition-colors duration-300">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #5b21f5 0%, #7c3aed 40%, #ec4899 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.12), transparent 60%)' }} />
          <Rocket className="mx-auto mb-4 opacity-90" size={36} />
          <h3 className="text-xl md:text-2xl font-bold mb-2">Don't see your role?</h3>
          <p className="text-white/75 text-sm mb-6 max-w-md mx-auto">
            We're always on the lookout for exceptional talent. Drop us a line and let's talk.
          </p>
          <a
            href="mailto:talent@zarwebcoders.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[13px] font-bold transition-all hover:scale-105"
            style={{ color: '#5b21f5' }}
          >
            <Send size={14} /> talent@zarwebcoders.com
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Careers;
