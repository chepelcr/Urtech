import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { mockGallery } from '../../data/mock';
import { GalleryCard } from '../cards/GalleryCard';
import { Link } from 'wouter';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLightbox } from '../../hooks/useLightbox';

export function GalleryPreview() {
  const { t } = useLang();
  const gallery = mockGallery.slice(0, 6);
  const lightbox = useLightbox(gallery);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-white tracking-widest uppercase"
          >
            {t.gallery.preview}
          </motion.h2>
          <Link href="/gallery" className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
            {t.gallery.viewAll} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map((image, i) => (
            <GalleryCard 
              key={image.id} 
              image={image} 
              index={i} 
              onClick={() => lightbox.openLightbox(i)} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && lightbox.currentItem && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              onClick={lightbox.closeLightbox}
              className="absolute top-8 right-8 text-white/50 hover:text-white z-[110] transition-colors"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); lightbox.prevItem(); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[110] transition-colors hidden md:block"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); lightbox.nextItem(); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[110] transition-colors hidden md:block"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video flex items-center justify-center p-8" onClick={lightbox.closeLightbox}>
              <motion.div 
                className="w-full h-full relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 border border-white/10" style={{ backgroundColor: lightbox.currentItem.color }}>
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <h3 className="font-display text-4xl text-white tracking-widest uppercase">{lightbox.currentItem.event}</h3>
                    <p className="font-mono text-sm text-gray-400 mt-2">Photo by {lightbox.currentItem.photographer}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
