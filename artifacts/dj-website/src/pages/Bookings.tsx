import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Bookings() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses = "w-full bg-transparent border-b border-white/20 px-0 py-4 font-mono text-sm text-white focus:outline-none focus:border-white transition-colors rounded-none placeholder:text-gray-600";

  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20">
      <Navbar />
      
      <main className="max-w-screen-md mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase mb-4">{t.bookings.title}</h1>
          <p className="font-mono text-gray-400 leading-relaxed max-w-lg">{t.bookings.subtitle}</p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 border border-white/10 bg-white/5 text-center"
          >
            <p className="font-mono text-xl tracking-widest uppercase text-white">{t.bookings.success}</p>
            <p className="font-mono text-sm text-gray-500 mt-4">Our management team will be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="sr-only">{t.bookings.name}</label>
                <input type="text" required placeholder={t.bookings.name} className={inputClasses} />
              </div>
              <div>
                <label className="sr-only">{t.bookings.company}</label>
                <input type="text" required placeholder={t.bookings.company} className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="sr-only">{t.bookings.venue}</label>
                <input type="text" required placeholder={t.bookings.venue} className={inputClasses} />
              </div>
              <div>
                <label className="sr-only">{t.bookings.country}</label>
                <input type="text" required placeholder={t.bookings.country} className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="sr-only">{t.bookings.date}</label>
                <input type="text" required placeholder={t.bookings.date} className={inputClasses} />
              </div>
              <div>
                <label className="sr-only">{t.bookings.budget}</label>
                <select required className={`${inputClasses} appearance-none bg-black text-gray-400`}>
                  <option value="" disabled selected>{t.bookings.budget}</option>
                  <option value="1">€5k - €10k</option>
                  <option value="2">€10k - €20k</option>
                  <option value="3">€20k+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="sr-only">{t.bookings.message}</label>
              <textarea 
                required 
                placeholder={t.bookings.message} 
                rows={5}
                className={`${inputClasses} resize-none`}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-8 bg-white text-black px-12 py-5 font-mono text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto"
            >
              {t.bookings.submit}
            </button>
          </motion.form>
        )}
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
