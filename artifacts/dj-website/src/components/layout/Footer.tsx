import React from 'react';
import { Link } from 'wouter';
import { useLang } from '../../context/LanguageContext';
import { Instagram, PlayCircle, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6 relative z-10 mb-24 md:mb-0">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <div className="flex flex-col space-y-6">
          <Link href="/" className="text-4xl font-display tracking-widest text-white inline-block">
            UR TECH
          </Link>
          <p className="text-gray-500 font-mono text-xs max-w-xs leading-relaxed">
            Tech House & Techno. Puntarenas, Costa Rica.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-mono text-sm tracking-widest uppercase">{t.nav.home}</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/about"><span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{t.nav.about}</span></Link>
            <Link href="/mixes"><span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{t.nav.mixes}</span></Link>
            <Link href="/music"><span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{t.nav.music}</span></Link>
            <Link href="/events"><span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{t.nav.events}</span></Link>
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-mono text-sm tracking-widest uppercase">{t.footer.socials}</h4>
          <nav className="flex flex-col space-y-3">
            <a href="https://www.instagram.com/urtech.07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><Instagram size={16} /> Instagram</a>
            <a href="https://soundcloud.com/user-42101134" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><PlayCircle size={16} /> SoundCloud</a>
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-mono text-sm tracking-widest uppercase">{t.nav.contact}</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/bookings"><span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{t.nav.bookings}</span></Link>
            <Link href="/press"><span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">{t.nav.press}</span></Link>
            <a href="mailto:directlyurtech07@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><Mail size={16} /> directlyurtech07@gmail.com</a>
          </nav>
        </div>

      </div>

      <div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs font-mono">
          &copy; {new Date().getFullYear()} UR TECH. {t.footer.rights}
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-300 text-xs font-mono">{t.footer.privacy}</a>
          <a href="#" className="text-gray-600 hover:text-gray-300 text-xs font-mono">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
