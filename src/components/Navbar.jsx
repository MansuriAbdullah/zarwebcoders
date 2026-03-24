import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Agreement', href: '#mca' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact us', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/95 dark:bg-[#0f0a2e]/95 py-2 shadow-sm border-slate-100 dark:border-slate-800'
        : 'bg-white/85 dark:bg-[#0f0a2e]/85 backdrop-blur-2xl py-3 border-transparent dark:border-transparent'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">

          <div className="flex items-center cursor-pointer group">
            <div className="w-24 xs:w-28 sm:w-36 h-10 sm:h-16 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img src="/assets/Screenshot_2026-03-14_160958-removebg-preview.png" alt="ZarWebCoders Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[14px] xl:text-[15px] font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 tracking-tight group flex items-center gap-1"
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
          <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button className="btn-crypto-primary hidden sm:flex lg:flex px-6 py-2.5 text-[12px]">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-colors shadow-sm active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-full p-8 z-[60] lg:hidden overflow-y-auto bg-white dark:bg-[#0f0a2e] transition-colors duration-500"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="w-28 h-12 overflow-hidden">
                <img src="/assets/Screenshot_2026-03-14_160958-removebg-preview.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors flex items-center justify-between group w-full px-4"
                >
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">{link.name}</span>
                  <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-600" />
                </motion.a>
              ))}
              
              <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-6" />
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full py-5 bg-gradient-to-r from-[#5b21f5] to-[#ec4899] text-white rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-2xl"
              >
                Launch Lab
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
