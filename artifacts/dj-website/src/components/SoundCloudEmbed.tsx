import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Pause } from 'lucide-react';
import { useSoundCloud } from '../context/SoundCloudContext';

const TRACK_PAGE_URL = 'https://soundcloud.com/user-42101134/morning-glory';

function fmt(ms: number) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

interface SoundCloudEmbedProps {
  title?: string;
  artist?: string;
}

export function SoundCloudEmbed({
  title = 'Morning Glory',
  artist = 'UR TECH',
}: SoundCloudEmbedProps) {
  const { isPlaying, position, duration, isReady, togglePlayPause, seekTo } = useSoundCloud();

  const progress = duration > 0 ? position / duration : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      {/* Header row */}
      <div className="flex items-end justify-between mb-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            Now Playing
          </span>
          <h3 className="font-display text-2xl md:text-4xl text-white tracking-widest uppercase leading-none">
            {title}
          </h3>
          <span className="font-mono text-xs text-gray-400 tracking-widest">{artist}</span>
        </div>
        <a
          href={TRACK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 hover:border-white/30"
        >
          SoundCloud <ExternalLink size={12} />
        </a>
      </div>

      {/* Player card */}
      <div className="w-full border border-white/10 bg-[#111] relative overflow-hidden">
        {/* Abstract artwork bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />

        <div className="relative z-10 p-8 md:p-12 flex flex-col gap-8">
          {/* Track info */}
          <div className="flex flex-col gap-1">
            <p className="font-display text-3xl md:text-5xl text-white tracking-widest uppercase">{title}</p>
            <p className="font-mono text-xs text-gray-400 tracking-[0.25em] uppercase">{artist}</p>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <div
              className="w-full h-px bg-white/10 relative cursor-pointer group"
              onClick={(e) => {
                if (!isReady) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = (e.clientX - rect.left) / rect.width;
                seekTo(pct);
              }}
            >
              <div
                className="absolute left-0 top-0 h-px bg-white transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
              {/* Scrubber dot */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `calc(${progress * 100}% - 4px)` }}
              />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-gray-600">
              <span>{fmt(position)}</span>
              <span>{duration > 0 ? fmt(duration) : '--:--'}</span>
            </div>
          </div>

          {/* Play / pause */}
          <div className="flex items-center gap-6">
            <button
              onClick={togglePlayPause}
              disabled={!isReady}
              className="w-14 h-14 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>

            {!isReady && (
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest animate-pulse">
                Loading…
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 h-px bg-white/5" />
    </motion.div>
  );
}
