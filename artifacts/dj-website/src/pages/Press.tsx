import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Image as ImageIcon, Speaker, Map, FolderArchive, Download } from 'lucide-react';

export default function Press() {
  const { t } = useLang();

  const downloads = [
    { icon: <FileText size={24} />, label: t.press.bio, size: '1.2 MB' },
    { icon: <ImageIcon size={24} />, label: t.press.photos, size: '45 MB' },
    { icon: <Speaker size={24} />, label: t.press.rider, size: '800 KB' },
    { icon: <Map size={24} />, label: t.press.stagePlot, size: '1.5 MB' },
    { icon: <FolderArchive size={24} />, label: t.press.logos, size: '5 MB' },
  ];

  return (
    <div className="min-h-[100dvh] bg-black text-white w-full pt-20">
      <Navbar />
      
      <main className="max-w-screen-xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase">{t.press.title}</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item, i) => (
            <motion.a
              href="#"
              key={i}
              className="group flex flex-col p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-gray-400 group-hover:text-white transition-colors mb-6">
                {item.icon}
              </div>
              <h3 className="font-mono text-sm text-white uppercase tracking-widest mb-2">{item.label}</h3>
              <div className="flex items-center justify-between mt-auto pt-8">
                <span className="font-mono text-xs text-gray-500">{item.size}</span>
                <span className="flex items-center gap-2 font-mono text-xs text-gray-300 uppercase tracking-widest group-hover:text-white transition-colors">
                  {t.press.download} <Download size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
