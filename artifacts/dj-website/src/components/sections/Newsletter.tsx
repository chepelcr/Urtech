import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';

export function Newsletter() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-32 px-6 bg-[#050505] border-t border-white/5 relative z-10 overflow-hidden">
      {/* Decorative noise/texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==')]"></div>

      <div className="max-w-2xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-widest uppercase mb-6">
            {t.newsletter.title}
          </h2>
          <p className="font-mono text-sm md:text-base text-gray-400 mb-12 max-w-md mx-auto leading-relaxed">
            {t.newsletter.subtitle}
          </p>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 border border-white/20 bg-white/5 inline-block px-12"
            >
              <p className="font-mono text-sm text-white uppercase tracking-widest">{t.newsletter.success}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="bg-transparent border border-white/20 px-6 py-4 font-mono text-sm text-white focus:outline-none focus:border-white transition-colors w-full sm:w-80"
              />
              <button 
                type="submit"
                className="bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                {t.newsletter.subscribe}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
