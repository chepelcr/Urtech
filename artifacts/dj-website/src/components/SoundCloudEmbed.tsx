import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface SoundCloudEmbedProps {
  url: string;
  title: string;
  artist?: string;
  /** 'visual' shows the waveform/artwork player; 'compact' shows the classic slim bar */
  variant?: 'visual' | 'compact';
}

export function SoundCloudEmbed({
  url,
  title,
  artist = 'UR TECH',
  variant = 'visual',
}: SoundCloudEmbedProps) {
  const { t } = useLang();
  const isVisual = variant === 'visual';

  // Use the resolved API track URL so SoundCloud's widget accepts it
  const trackApiUrl = url.startsWith('https://api.soundcloud.com')
    ? url
    : url; // fallback: pass through
  const embedSrc =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackApiUrl)}` +
    `&color=%23ffffff` +
    `&auto_play=false` +
    `&hide_related=true` +
    `&show_comments=false` +
    `&show_user=true` +
    `&show_reposts=false` +
    `&show_teaser=false` +
    `&visual=${isVisual ? 'true' : 'false'}`;

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
            {t.mixes.nowPlaying ?? 'Now Playing'}
          </span>
          <h3 className="font-display text-2xl md:text-4xl text-white tracking-widest uppercase leading-none">
            {title}
          </h3>
          <span className="font-mono text-xs text-gray-400 tracking-widest">
            {artist}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 hover:border-white/30"
        >
          SoundCloud <ExternalLink size={12} />
        </a>
      </div>

      {/* Player iframe */}
      <div
        className={`w-full border border-white/10 overflow-hidden ${
          isVisual ? 'h-[300px] md:h-[380px]' : 'h-[166px]'
        }`}
      >
        <iframe
          title={`${title} — ${artist}`}
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedSrc}
          className="block"
        />
      </div>

      {/* Bottom rule */}
      <div className="mt-4 h-px bg-white/5" />
    </motion.div>
  );
}
