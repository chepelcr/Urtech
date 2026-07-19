import React from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '../../data';
import { Maximize2, Play } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
  index: number;
}

export function GalleryCard({ item, onClick, index }: GalleryCardProps) {
  const heights = ['h-64', 'h-80', 'h-96', 'h-72'];
  const heightClass = heights[index % heights.length];
  const isVideo = item.type === 'video';

  return (
    <motion.div
      className={`relative w-full ${heightClass} bg-gray-900 border border-white/5 overflow-hidden group cursor-pointer mb-4 break-inside-avoid`}
      onClick={onClick}
      style={{ backgroundColor: item.color }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {/* Real image */}
      {item.type === 'image' && item.src && (
        <img
          src={item.src}
          alt={item.event}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Video thumbnail or first-frame preview */}
      {isVideo && item.src && !item.thumbnail && (
        <video
          src={item.src}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          muted
          playsInline
          preload="metadata"
        />
      )}
      {isVideo && item.thumbnail && (
        <img
          src={item.thumbnail}
          alt={item.event}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Noise texture (only for placeholder colour cards) */}
      {!item.src && !item.thumbnail && (
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==')]" />
      )}

      {/* Placeholder label for items with no media yet */}
      {!item.src && !item.thumbnail && (
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="font-display text-4xl text-white tracking-widest uppercase rotate-[-15deg]">Foto</span>
        </div>
      )}

      {/* Video play badge */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
            <Play size={20} className="text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Gradient overlay (always, for readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
        <div>
          <p className="font-display text-xl text-white tracking-widest uppercase">{item.event}</p>
          {item.photographer && (
            <p className="font-mono text-xs text-gray-400 mt-1">Photo: {item.photographer}</p>
          )}
        </div>
        <Maximize2 size={16} className="text-white/70 flex-shrink-0" />
      </div>
    </motion.div>
  );
}
