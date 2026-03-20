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
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          <div className="flex items-center cursor-pointer group">
            <div className="w-36 h-16 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img src="/assets/Screenshot_2026-03-14_160958-removebg-preview.png" alt="ZarWebCoders Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[15px] font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 tracking-tight group flex items-center gap-1"
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
          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-crypto-primary hidden sm:block">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-800 dark:text-white transition-colors"
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
            className="fixed inset-0 top-[68px] p-8 z-40 lg:hidden overflow-y-auto shadow-2xl bg-white dark:bg-[#0f0a2e] transition-colors duration-500"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tighter transition-colors"
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
