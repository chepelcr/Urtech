import React from 'react';
import { motion } from 'framer-motion';
import { GalleryImage } from '../../data/mock';
import { Maximize2 } from 'lucide-react';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
  index: number;
}

export function GalleryCard({ image, onClick, index }: GalleryCardProps) {
  // Randomize heights slightly for masonry effect if used in grid
  const heights = ['h-64', 'h-80', 'h-96', 'h-72'];
  const heightClass = heights[index % heights.length];

  return (
    <motion.div 
      className={`relative w-full ${heightClass} bg-gray-900 border border-white/5 overflow-hidden group cursor-pointer mb-4 break-inside-avoid`}
      onClick={onClick}
      style={{ backgroundColor: image.color }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
    >
      {/* Decorative noise/texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==')]"></div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div className="self-end">
          <Maximize2 size={20} className="text-white opacity-70" />
        </div>
        <div>
          <p className="font-display text-2xl text-white tracking-widest uppercase">{image.event}</p>
          <p className="font-mono text-xs text-gray-400 mt-2">Photo: {image.photographer}</p>
        </div>
      </div>
    </motion.div>
  );
}
