import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { mockReleases } from '../../data/mock';
import { MusicCard } from '../cards/MusicCard';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export function DiscographySection() {
  const { t } = useLang();
  const releases = mockReleases.slice(0, 4);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-b border-white/5 relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase"
          >
            {t.music.discography}
          </motion.h2>
          <Link href="/music" className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
            {t.music.viewAll} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {releases.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <MusicCard release={release} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
