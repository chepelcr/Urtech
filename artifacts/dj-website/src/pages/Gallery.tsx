import React, { useRef } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data';
import type { GalleryItem } from '../data';
import { GalleryCard } from '../components/cards/GalleryCard';
import { useLightbox } from '../hooks/useLightbox';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function LightboxMedia({ item }: { item: GalleryItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (item.type === 'video') {
    // Local video file
    if (item.src) {
      return (
        <video
          ref={videoRef}
          src={item.src}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain"
        />
      );
    }
    // YouTube or other external embed
    if (item.url) {
      const embedUrl = item.url.includes('watch?v=')
        ? item.url.replace('watch?v=', 'embed/') + '?autoplay=1'
        : item.url;
      return (
        <iframe
          src={embedUrl}
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full h-full"
          title={item.event}
        />
      );
    }
  }

  // Image with real src
  if (item.src) {
    return (
      <img
        src={item.src}
        alt={item.event}
        className="w-full h-full object-contain"
      />
    );
  }

  // Colour placeholder
  return (
    <div className="w-full h-full" style={{ backgroundColor: item.color }}>
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <h3 className="font-display text-4xl text-white tracking-widest uppercase">{item.event}</h3>
        {item.photographer && (
          <p className="font-mono text-sm text-gray-400 mt-2">Photo: {item.photographer}</p>
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLang();
  const lightbox = useLightbox(gallery);

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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {gallery.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
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
            className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={lightbox.closeLightbox}
          >
            <button
              onClick={lightbox.closeLightbox}
              className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] transition-colors"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); lightbox.prevItem(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-[110] transition-colors"
            >
              <ChevronLeft size={44} strokeWidth={1} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); lightbox.nextItem(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-[110] transition-colors"
            >
              <ChevronRight size={44} strokeWidth={1} />
            </button>

            <motion.div
              className="relative w-full max-w-5xl mx-12 md:mx-24"
              style={{ aspectRatio: lightbox.currentItem.type === 'video' ? '9/16' : '4/3' }}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 overflow-hidden border border-white/10">
                <LightboxMedia item={lightbox.currentItem} />
              </div>

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between">
                <p className="font-display text-lg text-white tracking-widest uppercase">
                  {lightbox.currentItem.event}
                </p>
                <span className="font-mono text-[10px] text-gray-600 tracking-widest">
                  {lightbox.currentIndex + 1} / {gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
