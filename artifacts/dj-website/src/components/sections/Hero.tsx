import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useLang } from '../../context/LanguageContext';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#050505] to-black z-0"></div>
      
      {/* Animated Noise Overlay */}
      <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center px-6 w-full max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-[12vw] md:text-[15vw] leading-none font-display tracking-widest text-white m-0 p-0 mix-blend-difference select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            UR TECH
          </h1>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="/mixes" className="group relative px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t.hero.listenNow}</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
          </Link>
          <Link href="/bookings" className="group relative px-8 py-4 bg-transparent border border-white/30 text-white font-mono text-xs uppercase tracking-widest overflow-hidden">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">{t.hero.bookings}</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.hero.scroll}</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          animate={{ scaleY: [1, 0, 1], transformOrigin: ["top", "top", "bottom"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
