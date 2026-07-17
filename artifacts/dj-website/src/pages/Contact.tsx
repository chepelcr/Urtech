import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Contact() {
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
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase mb-4">{t.contact.title}</h1>
          <p className="font-mono text-gray-400 leading-relaxed max-w-lg">{t.contact.subtitle}</p>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 border border-white/10 bg-white/5 text-center"
          >
            <p className="font-mono text-xl tracking-widest uppercase text-white">{t.contact.success}</p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <label className="sr-only">{t.contact.name}</label>
              <input type="text" required placeholder={t.contact.name} className={inputClasses} />
            </div>

            <div>
              <label className="sr-only">{t.contact.email}</label>
              <input type="email" required placeholder={t.contact.email} className={inputClasses} />
            </div>

            <div>
              <label className="sr-only">{t.contact.message}</label>
              <textarea 
                required 
                placeholder={t.contact.message} 
                rows={5}
                className={`${inputClasses} resize-none`}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-8 bg-white text-black px-12 py-5 font-mono text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto"
            >
              {t.contact.submit}
            </button>
          </motion.form>
        )}
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
