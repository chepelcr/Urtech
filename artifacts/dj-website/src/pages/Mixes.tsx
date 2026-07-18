import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { SoundCloudEmbed } from '../components/SoundCloudEmbed';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Mixes() {
  const { t } = useLang();

  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20">
      <Navbar />

      <main className="max-w-screen-2xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase">{t.mixes.title}</h1>
        </motion.div>

        <SoundCloudEmbed title="Morning Glory" artist="UR TECH" />
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
