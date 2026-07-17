import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, ListMusic } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';

export function FloatingPlayer() {
  const { currentTrack, isPlaying, togglePlayPause, progress, nextTrack, prevTrack, setProgress, queue } = useAudio();
  const { t } = useLang();

  if (!currentTrack) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-white/10 px-4 py-3 md:px-6 md:py-4"
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
          
          {/* Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 bg-gray-900 flex-shrink-0 flex items-center justify-center border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isPlaying ? (
                <div className="flex space-x-1 items-end h-4">
                  {[1,2,3,4].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ height: ["4px", "16px", "4px"] }}
                      transition={{ duration: 0.5 + (i * 0.1), repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 bg-white/70"
                    />
                  ))}
                </div>
              ) : (
                <div className="w-3 h-3 bg-white/30 rounded-full" />
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white font-mono text-sm truncate">{currentTrack.title}</span>
              <span className="text-gray-500 font-mono text-xs truncate">NOCTURN</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center flex-1 max-w-md hidden md:flex">
            <div className="flex items-center gap-6 mb-2">
              <button onClick={prevTrack} className="text-gray-400 hover:text-white transition-colors">
                <SkipBack size={20} />
              </button>
              <button 
                onClick={togglePlayPause} 
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause size={20} className="fill-black" /> : <Play size={20} className="fill-black ml-1" />}
              </button>
              <button onClick={nextTrack} className="text-gray-400 hover:text-white transition-colors">
                <SkipForward size={20} />
              </button>
            </div>
            <div className="w-full flex items-center gap-3">
              <span className="text-gray-500 text-[10px] font-mono w-10 text-right">
                {Math.floor((progress / 100) * 120)}:{Math.floor(((progress / 100) * 120) % 60).toString().padStart(2, '0')}
              </span>
              <div 
                className="flex-1 h-1 bg-gray-800 rounded-full cursor-pointer relative group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  setProgress((x / rect.width) * 100);
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 bg-white" style={{ width: `${progress}%` }}></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ left: `calc(${progress}% - 4px)` }}></div>
              </div>
              <span className="text-gray-500 text-[10px] font-mono w-10">{currentTrack.duration.split(':').slice(0,2).join(':')}</span>
            </div>
          </div>

          {/* Mobile Play Button */}
          <button 
            onClick={togglePlayPause} 
            className="md:hidden w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
          >
            {isPlaying ? <Pause size={18} className="fill-black" /> : <Play size={18} className="fill-black ml-1" />}
          </button>

          {/* Right actions */}
          <div className="flex-1 justify-end items-center gap-4 hidden md:flex">
            <ListMusic size={18} className="text-gray-500 hover:text-white cursor-pointer" />
            <div className="flex items-center gap-2 group">
              <Volume2 size={18} className="text-gray-500 group-hover:text-white" />
              <div className="w-20 h-1 bg-gray-800 rounded-full">
                <div className="w-4/5 h-full bg-gray-400 group-hover:bg-white rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
