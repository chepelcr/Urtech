import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

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

          <motion.div 
            className="md:col-span-7 prose prose-invert prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-300 max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p>
              Emerging from the depths of Berlin's industrial landscape, UR TECH has carved out a sonic territory that is entirely his own. Blurring the lines between punishing warehouse techno and expansive dark ambient, his sets are a masterclass in tension and psychological architecture.
            </p>
            <p>
              "I treat the club not as a place of celebration, but as a pressure chamber," he explains. "The frequencies need to physically interact with the room and the bodies within it. It's about stripping away the unnecessary and leaving only the essential force."
            </p>
            <h3 className="font-display text-3xl uppercase tracking-widest text-white mt-12 mb-6">The Sound</h3>
            <p>
              With releases on seminal labels like Ostgut Ton and Klockworks, UR TECH's production relies heavily on hardware synthesis, field recordings, and tape distortion. His latest EP, <i>Void State</i>, was recorded entirely using customized modular rigs inside an abandoned brutalist factory, capturing the natural reverb of decay.
            </p>
            <blockquote className="font-display text-3xl md:text-4xl uppercase text-white/80 border-l-4 border-white/20 pl-6 my-12 tracking-wider">
              "The silence between the kicks is just as heavy as the kick itself."
            </blockquote>
            <p>
              Holding residencies at some of Europe's most formidable institutions, a UR TECH set is an endurance test—a meticulously crafted journey that demands surrender.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingPlayer />
    </div>
  );
}
