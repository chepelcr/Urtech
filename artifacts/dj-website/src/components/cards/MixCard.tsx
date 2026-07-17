import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Mix } from '../../data/mock';
import { useAudio } from '../../context/AudioContext';
import { useLang } from '../../context/LanguageContext';

export function MixCard({ mix }: { mix: Mix }) {
  const { playTrack, currentTrack, isPlaying, togglePlayPause } = useAudio();
  const { t } = useLang();
  
  const isCurrent = currentTrack?.id === mix.id;

  const handlePlay = (e: React.MouseEvent) => {
    if (mix.url) {
      // open real link; don't swallow the click
      return;
    }
    e.preventDefault();
    if (isCurrent) {
      togglePlayPause();
    } else {
      playTrack(mix);
    }
  };

  const Wrapper = mix.url
    ? ({ children }: { children: React.ReactNode }) => (
        <a href={mix.url} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col gap-4 cursor-pointer block">
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <motion.div
          className="group relative flex flex-col gap-4 cursor-pointer"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          onClick={handlePlay}
        >
          {children}
        </motion.div>
      );

  return (
    <Wrapper>
      <div className="relative aspect-square w-full bg-gray-900 border border-white/5 overflow-hidden">
        {/* Placeholder Artwork - Abstract gradient/noise simulation */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==')]"></div>
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/50 backdrop-blur-sm">
            {isCurrent && isPlaying ? (
              <div className="flex space-x-1 h-6 items-end">
                {[1,2,3].map(i => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["4px", "24px", "4px"] }}
                    transition={{ duration: 0.5 + (i * 0.1), repeat: Infinity }}
                    className="w-1.5 bg-white"
                  />
                ))}
              </div>
            ) : (
              <Play size={24} className="fill-white ml-1" />
            )}
          </div>
        </div>

        {/* Platform Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-gray-300 uppercase tracking-widest">
          {mix.platform}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-mono text-sm text-white font-bold leading-tight group-hover:underline decoration-white/30 underline-offset-4 line-clamp-2">
          {mix.title}
        </h3>
        <div className="flex items-center justify-between text-xs font-mono text-gray-500 mt-1">
          <span>{mix.date}</span>
          <div className="flex items-center gap-3">
            <span>{mix.plays} {t.mixes.plays.toLowerCase()}</span>
            <span>{mix.duration}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
