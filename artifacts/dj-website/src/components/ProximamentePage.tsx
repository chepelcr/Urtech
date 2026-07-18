import React from 'react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { FloatingPlayer } from './layout/FloatingPlayer';
import { motion } from 'framer-motion';

interface ProximamentePageProps {
  title: string;
}

export function ProximamentePage({ title }: ProximamentePageProps) {
  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-screen-xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase">{title}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center justify-center py-32 gap-6 text-center"
        >
          <div className="w-px h-16 bg-white/10" />
          <span className="font-display text-5xl md:text-7xl tracking-[0.3em] text-white/20 uppercase">
            Próximamente
          </span>
          <div className="w-px h-16 bg-white/10" />
          <p className="font-mono text-xs text-gray-600 tracking-widest uppercase mt-4">
            Contenido en camino · Content on the way
          </p>
        </motion.div>
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
