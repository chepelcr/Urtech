import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

function BioContent() {
  const { lang } = useLang();

  if (lang === 'es') {
    return (
      <motion.div
        className="md:col-span-7 prose prose-invert prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-300 max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p>
          Urtech es el alias detrás del cual se mueve entre Tech House y Techno, construyendo sets que llevan la pista de un groove hipnótico a la energía pura. Con base en Miramar, Puntarenas, Costa Rica.
        </p>
        <p>
          Urtech nació casi por destino: el apellido Urtecho ya tenía el nombre escondido. Hoy, ese alias representa Tech House y Techno con base en Puntarenas.
        </p>
        <blockquote className="font-display text-3xl md:text-4xl uppercase text-white/80 border-l-4 border-white/20 pl-6 my-12 tracking-wider">
          "Del groove hipnótico a la energía pura."
        </blockquote>
        <p>
          Urtech nació desde abajo: sets gratis con una planta eléctrica en Puntarenas, con nada más que ganas de compartir música. Poco a poco el público lo fue adoptando, y ese apoyo lo llevó a convertirse en el DJ de Tech House y Techno que es hoy.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="md:col-span-7 prose prose-invert prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-300 max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <p>
        Urtech is the alias behind which he moves between Tech House and Techno, building sets that take the floor from a hypnotic groove to pure energy. Based in Miramar, Puntarenas, Costa Rica.
      </p>
      <p>
        Urtech was born almost by destiny — the last name Urtecho already had the name hidden within it. Today, that alias represents Tech House and Techno rooted in Puntarenas.
      </p>
      <blockquote className="font-display text-3xl md:text-4xl uppercase text-white/80 border-l-4 border-white/20 pl-6 my-12 tracking-wider">
        "From hypnotic groove to pure energy."
      </blockquote>
      <p>
        Urtech started from the ground up — free sets powered by a generator in Puntarenas, with nothing but a drive to share music. Little by little the crowd adopted him, and that support pushed him to become the Tech House and Techno DJ he is today.
      </p>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLang();

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
          <h1 className="text-6xl md:text-8xl font-display tracking-widest uppercase">{t.about.title}</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="aspect-[3/4] w-full bg-gray-900 border border-white/10 relative overflow-hidden grayscale">
               <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-500 via-gray-900 to-black"></div>
               {/* Abstract placeholder for artist photo */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                 <div className="w-64 h-64 border border-white/30 rounded-full blur-xl"></div>
                 <div className="absolute w-40 h-80 bg-white/10 blur-2xl transform rotate-45"></div>
               </div>
            </div>
          </motion.div>

          <BioContent />
        </div>
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
