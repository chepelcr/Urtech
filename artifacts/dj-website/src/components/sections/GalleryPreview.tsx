import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import { gallery } from '../../data';
import type { GalleryItem } from '../../data';
import { GalleryCard } from '../cards/GalleryCard';
import { Link } from 'wouter';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLightbox } from '../../hooks/useLightbox';

function LightboxMedia({ item }: { item: GalleryItem }) {
  if (item.type === 'video' && item.src) {
    return (
      <video
        src={item.src}
        controls
        autoPlay
        playsInline
        className="w-full h-full object-contain"
      />
    );
  }
  if (item.type === 'video' && item.url) {
    const embedUrl = item.url.includes('watch?v=')
      ? item.url.replace('watch?v=', 'embed/') + '?autoplay=1'
      : item.url;
    return <iframe src={embedUrl} allow="autoplay; fullscreen" allowFullScreen className="w-full h-full" title={item.event} />;
  }
  if (item.src) {
    return <img src={item.src} alt={item.event} className="w-full h-full object-contain" />;
  }
  return (
    <div className="w-full h-full relative" style={{ backgroundColor: item.color }}>
      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <h3 className="font-display text-4xl text-white tracking-widest uppercase">{item.event}</h3>
      </div>
    </div>
  );
}

export function GalleryPreview() {
  const { t } = useLang();
  const preview = gallery.slice(0, 6);
  const lightbox = useLightbox(preview);

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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {preview.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
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
            className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={lightbox.closeLightbox}
          >
            <button onClick={lightbox.closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] transition-colors">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); lightbox.prevItem(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-[110] transition-colors">
              <ChevronLeft size={44} strokeWidth={1} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); lightbox.nextItem(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white z-[110] transition-colors">
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
              <div className="mt-4 flex items-center justify-between">
                <p className="font-display text-lg text-white tracking-widest uppercase">{lightbox.currentItem.event}</p>
                <span className="font-mono text-[10px] text-gray-600 tracking-widest">{lightbox.currentIndex + 1} / {preview.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
