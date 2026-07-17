import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { mockEvents } from '../data/mock';
import { EventCard } from '../components/cards/EventCard';

export default function Events() {
  const { t } = useLang();
  
  const upcoming = mockEvents.filter(e => e.status === 'upcoming');
  const past = mockEvents.filter(e => e.status === 'past');

  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20">
      <Navbar />
      
      <main className="max-w-screen-xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-white/10 pb-8"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase">{t.events.title}</h1>
        </motion.div>

        <div className="mb-24">
          <h2 className="font-mono text-xl text-gray-500 uppercase tracking-widest mb-10">{t.events.upcoming}</h2>
          <div className="flex flex-col">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-mono text-xl text-gray-500 uppercase tracking-widest mb-10">{t.events.past}</h2>
          <div className="flex flex-col">
            {past.map((event, i) => (
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
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
