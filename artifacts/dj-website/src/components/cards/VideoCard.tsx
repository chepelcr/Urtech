import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Video } from '../../data';

export function VideoCard({ video }: { video: Video }) {
  return (
    <motion.div 
      className="group relative cursor-pointer flex flex-col gap-3"
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video w-full bg-gray-900 border border-white/5 overflow-hidden">
        {/* Thumbnail Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-gray-800 opacity-60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
            <Play size={20} className="fill-white text-white ml-1" />
          </div>
        </div>
        
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-[10px] font-mono text-white">
          {video.duration}
        </div>
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/80 text-[10px] font-mono text-gray-300 uppercase tracking-widest">
          {video.platform}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-mono text-sm text-white font-bold leading-tight group-hover:text-gray-300 transition-colors line-clamp-2">
          {video.title}
        </h3>
        <p className="font-mono text-xs text-gray-500 mt-1">
          {video.views} views
        </p>
      </div>
    </motion.div>
  );
}
