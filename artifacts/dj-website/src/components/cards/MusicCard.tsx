import React from 'react';
import { motion } from 'framer-motion';
import { Release } from '../../data/mock';

export function MusicCard({ release }: { release: Release }) {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-square w-full bg-black border border-white/10 overflow-hidden mb-4">
        {/* Abstract Minimal Artwork Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          <div className="w-3/4 h-3/4 border-[0.5px] border-white/20 rounded-full flex items-center justify-center">
            <div className="w-1/2 h-1/2 border-[0.5px] border-white/30 rounded-full flex items-center justify-center">
              <div className="w-1/4 h-1/4 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 px-2 py-1 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-bold">
          {release.format}
        </div>
      </div>
      
      <div className="flex flex-col gap-1 text-center items-center">
        <h3 className="font-display text-2xl text-white tracking-wider">{release.title}</h3>
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">{release.label}</p>
        <p className="font-mono text-[10px] text-gray-600 mt-1">{release.date}</p>
      </div>
    </motion.div>
  );
}
