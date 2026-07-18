import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useSoundCloud } from '../../context/SoundCloudContext';

function fmt(ms: number): string {
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function FloatingPlayer() {
  const { isPlaying, isReady, position, duration, title, togglePlayPause, seekTo } = useSoundCloud();

  // Only show once the widget is ready and has been interacted with
  if (!isReady) return null;

  const progress = duration > 0 ? (position / duration) * 100 : 0;

  return (
    <AnimatePresence>
      <motion.div
        key="sc-floating-player"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-white/10 px-4 py-3 md:px-6 md:py-4"
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">

          {/* Track info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-10 h-10 bg-gray-900 flex-shrink-0 flex items-center justify-center border border-white/10">
              {isPlaying ? (
                <div className="flex space-x-0.5 items-end h-4">
                  {[1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      animate={{ height: ['4px', '14px', '4px'] }}
                      transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-1 bg-white/70"
                    />
                  ))}
                </div>
              ) : (
                <div className="w-2.5 h-2.5 bg-white/30 rounded-full" />
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white font-mono text-sm truncate">{title || 'Morning Glory'}</span>
              <span className="text-gray-500 font-mono text-xs">UR TECH · SoundCloud</span>
            </div>
          </div>

          {/* Progress + controls — desktop */}
          <div className="flex-1 max-w-md hidden md:flex flex-col items-center gap-2">
            <button
              onClick={togglePlayPause}
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying
                ? <Pause size={16} className="fill-black" />
                : <Play size={16} className="fill-black ml-0.5" />}
            </button>
            <div className="w-full flex items-center gap-3">
              <span className="text-gray-500 text-[10px] font-mono w-10 text-right tabular-nums">{fmt(position)}</span>
              <div
                className="flex-1 h-1 bg-gray-800 rounded-full cursor-pointer relative group"
                onClick={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  seekTo((e.clientX - rect.left) / rect.width);
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 bg-white rounded-full" style={{ width: `${progress}%` }} />
                <div
                  className="absolute w-2.5 h-2.5 bg-white rounded-full top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity shadow"
                  style={{ left: `calc(${progress}% - 5px)` }}
                />
              </div>
              <span className="text-gray-500 text-[10px] font-mono w-10 tabular-nums">{fmt(duration)}</span>
            </div>
          </div>

          {/* Mobile play button */}
          <button
            onClick={togglePlayPause}
            className="md:hidden w-9 h-9 rounded-full bg-white text-black flex items-center justify-center"
          >
            {isPlaying
              ? <Pause size={16} className="fill-black" />
              : <Play size={16} className="fill-black ml-0.5" />}
          </button>

          {/* Right side */}
          <div className="flex-1 justify-end items-center gap-3 hidden md:flex">
            <Volume2 size={16} className="text-gray-500" />
            <span className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">SoundCloud</span>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
