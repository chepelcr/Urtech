import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useSoundCloud } from '../context/SoundCloudContext';

const TRACK_API_URL = 'https://api.soundcloud.com/tracks/1514050228';
const TRACK_PAGE_URL = 'https://soundcloud.com/user-42101134/morning-glory';

const embedSrc =
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(TRACK_API_URL)}` +
  `&color=%23ffffff` +
  `&auto_play=false` +
  `&hide_related=true` +
  `&show_comments=false` +
  `&show_user=true` +
  `&show_reposts=false` +
  `&show_teaser=false` +
  `&visual=true`;

interface SoundCloudEmbedProps {
  title?: string;
  artist?: string;
}

export function SoundCloudEmbed({
  title = 'Morning Glory',
  artist = 'UR TECH',
}: SoundCloudEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { registerWidget } = useSoundCloud();

  const handleLoad = () => {
    if (iframeRef.current) {
      registerWidget(iframeRef.current, title);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      {/* Header */}
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

      {/* Player iframe */}
      <div className="w-full border border-white/10 overflow-hidden h-[300px] md:h-[380px]">
        <iframe
          ref={iframeRef}
          title={`${title} — ${artist}`}
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedSrc}
          className="block"
          onLoad={handleLoad}
        />
      </div>

      <div className="mt-4 h-px bg-white/5" />
    </motion.div>
  );
}
