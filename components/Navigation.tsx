import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#disciplines' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Publications', href: '#articles' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border-light py-4' : 'bg-transparent py-8'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
          {/* Logo */}
          <a href="#home" className="text-2xl font-serif font-bold tracking-tight z-50 relative group">
            ARTIST<span className="text-accent transition-transform duration-300 group-hover:scale-150 inline-block">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-6 px-8 py-3 bg-text-primary text-white text-sm font-medium hover:bg-accent transition-colors duration-300 rounded-sm"
            >
              Book a Session
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 text-text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="text-4xl font-serif font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
             <motion.a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 px-10 py-4 bg-text-primary text-white text-lg font-medium hover:bg-accent transition-colors rounded-sm"
            >
              Book a Session
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};