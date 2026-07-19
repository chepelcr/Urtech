import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Volume2, VolumeX } from 'lucide-react';
import { Event } from '../../data';

export function FeaturedEventCard({ event }: { event: Event }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(m => !m);
    }
  };

  const dateObj = new Date(event.date);
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = dateObj.toLocaleString('default', { month: 'long' }).toUpperCase();
  const year = dateObj.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 overflow-hidden"
    >
      {/* Video panel */}
      <div className="relative aspect-[9/16] lg:aspect-auto lg:min-h-[560px] bg-black overflow-hidden">
        {event.videoUrl && (
          <video
            ref={videoRef}
            src={event.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-10 p-2 bg-black/60 border border-white/20 hover:border-white/60 transition-colors rounded-sm"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX size={16} className="text-white" /> : <Volume2 size={16} className="text-white" />}
        </button>

        {/* PAST badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-black/70 border border-white/20 text-gray-400">
            Past Event
          </span>
        </div>
      </div>

      {/* Info panel */}
      <div className="bg-[#0a0a0a] p-8 lg:p-12 flex flex-col justify-between">
        <div>
          {/* Date */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="font-display text-7xl text-white leading-none">{day}</span>
            <div className="flex flex-col">
              <span className="font-mono text-sm text-gray-400 tracking-widest">{month}</span>
              <span className="font-mono text-sm text-gray-600 tracking-widest">{year}</span>
            </div>
          </div>

          {/* Venue */}
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-widest uppercase mb-1">
            {event.venue}
          </h2>
          <p className="font-mono text-sm text-gray-500 mb-2">{event.city}, {event.country}</p>
          {event.time && (
            <p className="font-mono text-xs text-gray-600 tracking-widest mb-8">{event.time}</p>
          )}

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" />

          {/* Line-up */}
          {event.lineup && (
            <div className="mb-6">
              <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-3">Line Up (A-Z)</p>
              <div className="flex flex-col gap-1">
                {event.lineup.map(name => (
                  <span
                    key={name}
                    className={`font-display text-xl tracking-widest uppercase ${name === 'UR Tech' ? 'text-white' : 'text-gray-400'}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Special guest */}
          {event.specialGuest && (
            <div className="mb-8">
              <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-1">Special Guest</p>
              <span className="font-display text-xl text-gray-300 tracking-widest uppercase">{event.specialGuest}</span>
            </div>
          )}

          {/* Cover */}
          {event.cover && (
            <div className="mb-8">
              <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase mb-1">Cover</p>
              <span className="font-mono text-sm text-white">{event.cover}</span>
            </div>
          )}
        </div>

        {/* Instagram CTA */}
        {event.instagramUrl && (
          <a
            href={event.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white tracking-widest uppercase px-4 py-3 border border-gray-800 hover:border-gray-500 transition-colors self-start"
          >
            <Instagram size={14} /> Ver en Instagram
          </a>
        )}
      </div>
    </motion.div>
  );
}
