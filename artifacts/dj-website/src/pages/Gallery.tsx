import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { mockGallery } from '../data/mock';
import { GalleryCard } from '../components/cards/GalleryCard';
import { useLightbox } from '../hooks/useLightbox';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const { t } = useLang();
  const lightbox = useLightbox(mockGallery);

  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20">
      <Navbar />
      
      <main className="max-w-screen-2xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase">{t.gallery.title}</h1>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {mockGallery.map((image, i) => (
            <GalleryCard 
              key={image.id} 
              image={image} 
              index={i} 
              onClick={() => lightbox.openLightbox(i)} 
            />
          ))}
        </div>
      </main>

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
                  {/* Image Placeholder */}
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

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
