import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Shield, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact us', href: '#contact' },
    { name: 'Enquiry', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-slate-100 ${isScrolled
        ? 'bg-white/95 py-3 shadow-sm'
        : 'bg-white/85 backdrop-blur-2xl py-4'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{
                background: 'linear-gradient(135deg, #5b21f5, #a855f7, #ec4899)',
                boxShadow: '0 0 22px rgba(91,33,245,0.55)',
              }}
            >
              <Shield size={20} className="text-white fill-current" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              zarweb<span style={{
                background: 'linear-gradient(135deg, #5b21f5, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>coders</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[15px] font-semibold text-slate-700 transition-all duration-300 tracking-tight group flex items-center gap-1"
                style={{ '--tw-text-opacity': 1 }}
                onMouseEnter={e => e.currentTarget.style.color = '#5b21f5'}
                onMouseLeave={e => e.currentTarget.style.color = ''}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #5b21f5, #ec4899)' }}
                />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="btn-crypto-primary hidden sm:block">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[68px] p-8 z-40 lg:hidden overflow-y-auto shadow-2xl bg-white"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-800 tracking-tighter transition-colors"
                  style={{ transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#5b21f5'}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[2px] rounded-full my-4" style={{ background: 'linear-gradient(90deg, #5b21f5, #ec4899, #06b6d4)' }} />
              <button className="w-full btn-crypto-primary">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
