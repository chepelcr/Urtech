import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';

export function Navbar() {
  const [location] = useLocation();
  const { lang, toggleLang, t } = useLang();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/mixes', label: t.nav.mixes },
    { href: '/music', label: t.nav.music },
    { href: '/videos', label: t.nav.videos },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/events', label: t.nav.events },
    { href: '/press', label: t.nav.press },
    { href: '/bookings', label: t.nav.bookings },
    { href: '/contact', label: t.nav.contact },
  ];

  const navbarHidden = scrollDirection === 'down' && !isAtTop && !mobileMenuOpen;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: navbarHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isAtTop ? 'bg-transparent' : 'bg-black/90 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-display tracking-widest text-white hover:text-gray-300 transition-colors z-50 relative">
            UR TECH
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.slice(1).map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`text-sm uppercase tracking-wider transition-colors hover:text-white cursor-pointer ${
                    location === link.href ? 'text-white border-b border-white' : 'text-gray-400'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="w-px h-4 bg-gray-700 mx-2"></div>
            
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-2 text-sm font-mono tracking-wider focus:outline-none"
            >
              <span className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-gray-600'}`}>EN</span>
              <span className="text-gray-600">|</span>
              <span className={`transition-colors ${lang === 'es' ? 'text-white' : 'text-gray-600'}`}>ES</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4 z-50 relative">
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 text-xs font-mono tracking-wider focus:outline-none"
            >
              <span className={`transition-colors ${lang === 'en' ? 'text-white' : 'text-gray-600'}`}>EN</span>
              <span className="text-gray-600">|</span>
              <span className={`transition-colors ${lang === 'es' ? 'text-white' : 'text-gray-600'}`}>ES</span>
            </button>
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center px-6 pt-20"
          >
            <div className="flex flex-col space-y-6 text-center w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href}>
                    <span 
                      className={`text-2xl font-display tracking-widest uppercase block cursor-pointer ${
                        location === link.href ? 'text-white' : 'text-gray-500'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
