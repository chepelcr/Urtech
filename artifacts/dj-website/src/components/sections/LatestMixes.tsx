import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { mockMixes } from '../../data/mock';
import { MixCard } from '../cards/MixCard';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export function LatestMixes() {
  const { t } = useLang();
  // Skip the first 3 (which are featured)
  const latest = mockMixes.slice(3, 7);

  return (
    <section className="py-24 px-6 bg-black relative z-10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-white tracking-widest uppercase"
          >
            {t.mixes.latest}
          </motion.h2>
          <Link href="/mixes" className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
            {t.mixes.viewAll} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar gap-6">
          {latest.map((mix, i) => (
            <motion.div
              key={mix.id}
              className="min-w-[280px] md:min-w-[350px] snap-start"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <MixCard mix={mix} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
