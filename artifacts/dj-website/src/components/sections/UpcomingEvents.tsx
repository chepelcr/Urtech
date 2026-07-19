import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { events as mockEvents } from '../../data';
import { EventCard } from '../cards/EventCard';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export function UpcomingEvents() {
  const { t } = useLang();
  const upcoming = mockEvents.filter(e => e.status === 'upcoming').slice(0, 4);

  return (
    <section className="py-24 px-6 bg-black relative z-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase"
          >
            {t.events.upcoming}
          </motion.h2>
          <Link href="/events" className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
            {t.events.viewAll} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex flex-col">
          {upcoming.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
