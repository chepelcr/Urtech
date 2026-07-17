import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { SoundCloudEmbed } from '../components/SoundCloudEmbed';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { mockMixes } from '../data/mock';
import { MixCard } from '../components/cards/MixCard';

const MORNING_GLORY_URL = 'https://api.soundcloud.com/tracks/1514050228';

export default function Mixes() {
  const { t } = useLang();
  const otherMixes = mockMixes.filter(m => !m.url);

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

        {/* Featured live SoundCloud player */}
        <div className="mb-20">
          <SoundCloudEmbed
            url={MORNING_GLORY_URL}
            title="Morning Glory"
            variant="visual"
          />
        </div>

        {/* Rest of the mix grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherMixes.map((mix, i) => (
            <motion.div
              key={mix.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <MixCard mix={mix} />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
