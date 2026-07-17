import React from 'react';
import { Event } from '../../data/mock';
import { useLang } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export function EventCard({ event }: { event: Event }) {
  const { t } = useLang();
  
  const dateObj = new Date(event.date);
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
  
  const isPast = event.status === 'past';

  return (
    <div className={`group flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-white/10 transition-colors duration-300 hover:bg-white/5 ${isPast ? 'opacity-50' : ''}`}>
      
      <div className="flex items-center gap-6 md:gap-12 mb-4 md:mb-0">
        <div className="flex flex-col items-center justify-center min-w-[60px]">
          <span className="font-display text-4xl text-white">{day}</span>
          <span className="font-mono text-xs text-gray-400 tracking-widest">{month}</span>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-display text-2xl md:text-3xl text-white tracking-wider uppercase group-hover:text-gray-300 transition-colors">
            {event.venue}
          </h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="font-mono text-sm text-gray-400">{event.city}, {event.country}</span>
            {event.headliner && (
              <span className="px-2 py-0.5 border border-white/20 text-[10px] font-mono text-white tracking-widest uppercase rounded-full">
                Headline
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:items-center justify-end">
        {isPast ? (
          <span className="font-mono text-xs text-gray-600 tracking-widest uppercase px-4 py-2 border border-gray-800">
            {t.events.past}
          </span>
        ) : event.soldOut ? (
          <span className="font-mono text-xs text-red-500 tracking-widest uppercase px-4 py-2 border border-red-900/50 bg-red-900/10">
            {t.events.soldOut}
          </span>
        ) : (
          <a 
            href={event.ticketUrl} 
            className="flex items-center gap-2 font-mono text-xs text-white tracking-widest uppercase px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
          >
            {t.events.tickets} <ArrowUpRight size={14} />
          </a>
        )}
      </div>

    </div>
  );
}
