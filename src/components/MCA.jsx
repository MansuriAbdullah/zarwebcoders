import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Shield, Download, CheckCircle, Clock, Globe,
  Briefcase, CreditCard, Lock, AlertTriangle, Zap, X, Send
} from 'lucide-react';

const sections = [
  {
    title: "Scope of Work",
    desc: "Web3, NFT, DApps, Smart Contracts with AI-powered development protocols and blockchain engineering.",
    icon: <Briefcase size={24} />,
    gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)',
    light: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    shadow: 'rgba(59,130,246,0.25)',
    items: ["Token Development", "Smart Contract Audits", "DApp Architecture", "NFT Ecosystems"]
  },
  {
    title: "Deliverables & Timelines",
    desc: "SOW-defined milestones with institutional precision and automated real-time progress tracking.",
    icon: <Clock size={24} />,
    gradient: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
    light: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    shadow: 'rgba(139,92,246,0.25)',
    items: ["Milestone Tracking", "Automated Testing", "Real-time Updates", "Quality Assurance"]
  },
  {
    title: "Payment Terms",
    desc: "Fiat & Crypto payments with quantum-secure KYC/AML compliance protocols and milestone billing.",
    icon: <CreditCard size={24} />,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    light: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    shadow: 'rgba(245,158,11,0.25)',
    items: ["USD/EUR/INR Support", "Crypto Payments", "KYC/AML Compliance", "Milestone Billing"]
  },
  {
    title: "IP Rights",
    desc: "Full ownership transfer upon payment with blockchain-verified authenticity and documentation.",
    icon: <Globe size={24} />,
    gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    light: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    shadow: 'rgba(6,182,212,0.25)',
    items: ["Source Code Transfer", "Smart Contract Ownership", "Documentation Rights", "Patent Protection"]
  },
  {
    title: "Confidentiality & Compliance",
    desc: "Military-grade encryption with global regulatory compliance systems and full NDA protection.",
    icon: <Lock size={24} />,
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)',
    light: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    shadow: 'rgba(99,102,241,0.25)',
    items: ["Data Encryption", "NDA Protection", "Regulatory Compliance", "Audit Trails"]
  },
  {
    title: "Dispute Resolution & Termination",
    desc: "AI-mediated resolution system with 30-day termination protocol and structured handover plan.",
    icon: <AlertTriangle size={24} />,
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    light: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.2)',
    shadow: 'rgba(239,68,68,0.25)',
    items: ["Mediated Settlement", "30-Day Notice", "Resource Handover", "Legal Recourse"]
  }
];

const MCA = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', project: '', budget: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('MCA Form submitted! We will contact you within 24 hours.');
    setShowForm(false);
    setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '' });
  };

  return (
    <section id="mca" className="section-padding-crypto relative overflow-hidden bg-white dark:bg-[#0f0a2e] transition-colors duration-500">

      {/* Animated Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15), transparent)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent)' }}
      />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-5"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#3b82f6' }}
          >
            <Zap size={11} fill="currentColor" />
            Digital Framework
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tight leading-none"
          >
            Master Client <span className="gradient-text-blue">Agreement.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed"
          >
            Quantum-encrypted legal framework for institutional Web3 development partnerships. Built on trust, precision, and blockchain-verified authenticity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="/MCA_ZarWebCoders.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 px-7 py-3.5 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 10px 30px rgba(59,130,246,0.35)' }}
            >
              <Download size={16} /> Download PDF
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] border-2 transition-all text-slate-800 dark:text-white"
              style={{ borderColor: 'rgba(99,102,241,0.4)', background: 'rgba(99,102,241,0.05)' }}
            >
              <FileText size={16} /> Fill MCA Form
            </motion.button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 sm:p-8 rounded-3xl overflow-hidden transition-all duration-300"
              style={{
                background: section.light,
                border: `1.5px solid ${section.border}`,
                boxShadow: `0 10px 40px ${section.shadow}`,
              }}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-80"
                style={{ background: section.gradient }} />

              {/* Subtle corner glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none blur-2xl"
                style={{ background: section.gradient }} />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl"
                style={{ background: section.gradient, boxShadow: `0 8px 25px ${section.shadow}` }}
              >
                {section.icon}
              </motion.div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{section.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed mb-6">
                {section.desc}
              </p>

              <div className="space-y-2.5">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest"
                  >
                    <CheckCircle size={14} className="flex-shrink-0" style={{ color: section.gradient.includes('#3b82f6') ? '#3b82f6' : section.gradient.includes('#8b5cf6') ? '#8b5cf6' : section.gradient.includes('#f59e0b') ? '#f59e0b' : section.gradient.includes('#06b6d4') ? '#06b6d4' : section.gradient.includes('#ef4444') ? '#ef4444' : '#6366f1' }} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center gap-10 sm:gap-16 items-center"
        >
          {[
            { icon: <Shield size={20} />, label: 'Institutional Grade', color: '#6366f1' },
            { icon: <Lock size={20} />, label: 'Quantum Secured', color: '#3b82f6' },
            { icon: <FileText size={20} />, label: 'Legally Compliant', color: '#10b981' },
            { icon: <Globe size={20} />, label: 'Global Standards', color: '#f59e0b' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -3 }}
              className="flex items-center gap-2.5 cursor-pointer"
              style={{ color: item.color }}
            >
              {item.icon}
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MCA Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25 }}
              className="w-full max-w-lg bg-white dark:bg-[#0f0a2e] rounded-3xl shadow-2xl overflow-hidden"
              style={{ border: '1.5px solid rgba(99,102,241,0.2)' }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Client MCA Form</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Fill in your project details below</p>
                  </div>
                  <button onClick={() => setShowForm(false)}
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <X size={18} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Nakamoto' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@web3.io' },
                    { label: 'Company / Organization', key: 'company', type: 'text', placeholder: 'Acme Labs' },
                    { label: 'Project Type', key: 'project', type: 'text', placeholder: 'DeFi Protocol / NFT Platform / Token...' },
                    { label: 'Estimated Budget', key: 'budget', type: 'text', placeholder: '$10K – $50K / Crypto equivalent' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-1.5 block">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.key]}
                        onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-semibold outline-none placeholder:text-slate-400 transition-all focus:border-blue-400 dark:focus:border-blue-600"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-1.5 block">
                      Project Details
                    </label>
                    <textarea
                      placeholder="Brief project overview and goals..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-semibold outline-none placeholder:text-slate-400 transition-all focus:border-blue-400 dark:focus:border-blue-600 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl text-white font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl mt-2"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 10px 30px rgba(59,130,246,0.35)' }}
                  >
                    <Send size={15} /> Submit MCA Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MCA;
