import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useLang } from '../../context/LanguageContext';

export function AboutPreview() {
  const { t } = useLang();

  return (
    <section className="py-32 px-6 bg-black relative z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-widest uppercase mb-10">
            {t.about.philosophy}
          </h2>
          <p className="font-serif text-xl md:text-3xl text-gray-400 leading-relaxed tracking-wide italic mb-12">
            "I am not interested in entertaining. I am interested in tension. The space between the beats where the anxiety builds—that is where the truth of the room is found."
          </p>
          <Link href="/about" className="inline-block border-b border-gray-600 pb-1 font-mono text-xs text-gray-300 uppercase tracking-widest hover:text-white hover:border-white transition-colors duration-300">
            {t.about.readMore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
