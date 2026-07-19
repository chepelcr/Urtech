import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { testimonials as mockTestimonials } from '../../data';

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="py-32 px-6 bg-black relative z-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-white tracking-widest uppercase mb-20 text-center"
        >
          {t.testimonials.title}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {mockTestimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="max-w-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <p className="font-serif text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex flex-col items-center">
                <span className="font-mono text-sm text-white font-bold uppercase tracking-widest">{testimonial.name}</span>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                  {testimonial.title}, {testimonial.organization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
