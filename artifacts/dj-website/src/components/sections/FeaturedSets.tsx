import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { SoundCloudEmbed } from '../SoundCloudEmbed';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export function FeaturedSets() {
  const { t } = useLang();

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase"
          >
            {t.mixes.featured}
          </motion.h2>
          <Link href="/mixes" className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
            {t.mixes.viewAll} <ArrowRight size={14} />
          </Link>
        </div>

        <SoundCloudEmbed title="Morning Glory" artist="UR TECH" />
      </div>
    </section>
  );
}
