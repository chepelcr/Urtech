export interface Mix {
  id: string;
  title: string;
  duration: string;
  platform: 'SoundCloud' | 'Beatport' | 'Resident Advisor' | 'YouTube';
  date: string;
  plays: string;
  url?: string;
}

export interface Release {
  id: string;
  title: string;
  label: string;
  date: string;
  format: 'EP' | 'LP' | 'Single';
}

export interface Video {
  id: string;
  title: string;
  duration: string;
  platform: 'YouTube' | 'Vimeo';
  views: string;
}

export interface GalleryImage {
  id: string;
  event: string;
  photographer: string;
  color: string;
}

export interface Event {
  id: string;
  venue: string;
  city: string;
  country: string;
  date: string;
  time?: string;
  headliner: boolean;
  status: 'upcoming' | 'past';
  ticketUrl?: string;
  instagramUrl?: string;
  soldOut?: boolean;
  cover?: string;
  lineup?: string[];
  specialGuest?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  organization: string;
  quote: string;
}

export const mockMixes: Mix[] = [
  { id: '1', title: 'Morning Glory', duration: '00:00:00', platform: 'SoundCloud', date: '2024-01-01', plays: '--', url: 'https://soundcloud.com/user-42101134/morning-glory' },
];

export const mockReleases: Release[] = [
  { id: '1', title: 'Void State', label: 'Ostgut Ton', date: '2023-10-01', format: 'EP' },
  { id: '2', title: 'Industrial Decay', label: 'Klockworks', date: '2023-05-15', format: 'EP' },
  { id: '3', title: 'Resonance', label: 'Stroboscopic Artefacts', date: '2022-11-20', format: 'LP' },
  { id: '4', title: 'Submerge', label: 'Semantica', date: '2022-04-10', format: 'Single' },
  { id: '5', title: 'Monolith', label: 'Dystopian', date: '2021-09-05', format: 'EP' },
  { id: '6', title: 'Echoes in Concrete', label: 'Ostgut Ton', date: '2021-02-18', format: 'LP' },
];

export const mockVideos: Video[] = [
  { id: '1', title: 'Boiler Room Berlin Live Set', duration: '01:05:40', platform: 'YouTube', views: '4.5M' },
  { id: '2', title: 'HÖR Berlin Studio Session', duration: '01:00:00', platform: 'YouTube', views: '1.1M' },
  { id: '3', title: 'Void State (Official Music Video)', duration: '00:06:15', platform: 'Vimeo', views: '120K' },
  { id: '4', title: 'Awakenings Festival Highlights', duration: '00:15:30', platform: 'YouTube', views: '850K' },
];

export const mockGallery: GalleryImage[] = [
  { id: '1', event: 'La Casa del Camarón', photographer: '', color: '#1a1a1a' },
  { id: '2', event: 'Live Set — Puntarenas', photographer: '', color: '#2a2a2a' },
  { id: '3', event: 'Live Set — Puntarenas', photographer: '', color: '#111' },
  { id: '4', event: 'En el Booth', photographer: '', color: '#0d0d0d' },
  { id: '5', event: 'Live Set — Puntarenas', photographer: '', color: '#1f1f1f' },
  { id: '6', event: 'La Casa del Camarón', photographer: '', color: '#252525' },
];

export const mockEvents: Event[] = [
  // Past events — real shows
  {
    id: '1',
    venue: 'La Casa del Camarón',
    city: 'Puntarenas',
    country: 'Costa Rica',
    date: '2026-06-26',
    time: '10:00 PM → Amanecer',
    headliner: true,
    status: 'past',
    featured: true,
    cover: 'Preventa ₡2,000',
    lineup: ['Owen Escobar', 'Pablo Gómez', 'UR Tech', 'Vandergh'],
    specialGuest: 'Waxcid Sound',
    videoUrl: '/events/la-casa-del-camaron.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DZ5XXfxIJTW/',
  },
  { id: '2', venue: 'Live Set', city: 'Puntarenas', country: 'Costa Rica', date: '2025-05-01', headliner: true, status: 'past', instagramUrl: 'https://www.instagram.com/p/DWh-PGBjKcm/' },
  { id: '3', venue: 'Live Set', city: 'Puntarenas', country: 'Costa Rica', date: '2025-03-15', headliner: true, status: 'past', instagramUrl: 'https://www.instagram.com/p/DSyBkPCAcoZ/' },
  { id: '4', venue: 'Live Set', city: 'Puntarenas', country: 'Costa Rica', date: '2024-03-10', headliner: false, status: 'past', instagramUrl: 'https://www.instagram.com/p/C4uc5PsuSaw/' },
  { id: '5', venue: 'Live Set', city: 'Puntarenas', country: 'Costa Rica', date: '2023-06-20', headliner: false, status: 'past', instagramUrl: 'https://www.instagram.com/p/CtK5ZRmOWQ0/' },
];

export const mockTestimonials: Testimonial[] = [
  { id: '1', name: 'Ben Klock', title: 'Artist', organization: 'Klockworks', quote: '"UR TECH’s sets are a masterclass in tension and release. Absolute control of the floor."' },
  { id: '2', name: 'Nina Kraviz', title: 'Artist', organization: 'Trip', quote: '"Raw, industrial energy with an incredible ear for spatial design. Truly next level."' },
  { id: '3', name: 'Resident Advisor', title: 'Editorial', organization: 'RA', quote: '"The most compelling new voice in Berlin\'s underground techno scene right now."' },
  { id: '4', name: 'Mixmag', title: 'Editorial', organization: 'Mixmag', quote: '"A brutal yet deeply emotional approach to electronic music."' },
  { id: '5', name: 'Marcel Dettmann', title: 'Artist', organization: 'Ostgut Ton', quote: '"Few artists understand the architecture of sound quite like this."' }
];
