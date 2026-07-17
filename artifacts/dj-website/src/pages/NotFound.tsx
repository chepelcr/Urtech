import React from 'react';
import { Link } from 'wouter';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { useLang } from '../context/LanguageContext';

export default function NotFound() {
  const { t } = useLang();

  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20 flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-[15vw] font-display tracking-widest leading-none text-white/10 mb-4 select-none">404</h1>
        <p className="font-mono text-lg text-gray-400 mb-8 uppercase tracking-widest">{t.common.notFound}</p>
        <Link href="/" className="px-8 py-4 border border-white text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
          {t.common.back}
        </Link>
      </main>

      <Footer />
    </div>
  );
}
