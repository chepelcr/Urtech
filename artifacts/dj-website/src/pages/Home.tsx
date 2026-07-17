import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingPlayer } from '../components/layout/FloatingPlayer';
import { Hero } from '../components/sections/Hero';
import { AboutPreview } from '../components/sections/AboutPreview';
import { FeaturedSets } from '../components/sections/FeaturedSets';
import { LatestMixes } from '../components/sections/LatestMixes';
import { DiscographySection } from '../components/sections/DiscographySection';
import { VideosSection } from '../components/sections/VideosSection';
import { UpcomingEvents } from '../components/sections/UpcomingEvents';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { Testimonials } from '../components/sections/Testimonials';
import { Newsletter } from '../components/sections/Newsletter';

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-black text-white w-full">
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <FeaturedSets />
        <LatestMixes />
        <DiscographySection />
        <VideosSection />
        <UpcomingEvents />
        <GalleryPreview />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <FloatingPlayer />
    </div>
  );
}
