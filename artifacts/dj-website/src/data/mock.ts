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
  headliner: boolean;
  status: 'upcoming' | 'past';
  ticketUrl?: string;
  soldOut?: boolean;
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
  { id: '2', title: 'Boiler Room Berlin - UR TECH', duration: '01:05:40', platform: 'YouTube', date: '2023-08-20', plays: '4.5M' },
  { id: '3', title: 'Awakenings Festival 2023', duration: '02:30:00', platform: 'SoundCloud', date: '2023-06-12', plays: '850K' },
  { id: '4', title: 'Dark Ambient Focus Mix', duration: '01:45:10', platform: 'Resident Advisor', date: '2023-04-05', plays: '200K' },
  { id: '5', title: 'Dekmantel Podcast 450', duration: '01:10:00', platform: 'SoundCloud', date: '2022-11-30', plays: '340K' },
  { id: '6', title: 'Tresor Club Closing Set', duration: '03:20:15', platform: 'SoundCloud', date: '2022-09-18', plays: '980K' },
  { id: '7', title: 'HÖR Berlin - UR TECH', duration: '01:00:00', platform: 'YouTube', date: '2022-05-10', plays: '1.1M' },
  { id: '8', title: 'Printworks London Final Season', duration: '02:15:00', platform: 'SoundCloud', date: '2022-02-28', plays: '670K' },
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
  { id: '1', event: 'Berghain, Berlin', photographer: 'Marie Staggat', color: '#1a1a1a' },
  { id: '2', event: 'Printworks, London', photographer: 'Dan Medhurst', color: '#2a2a2a' },
  { id: '3', event: 'Awakenings, Amsterdam', photographer: 'Photo-Company', color: '#111' },
  { id: '4', event: 'Tresor, Berlin', photographer: 'George Nebieridze', color: '#0d0d0d' },
  { id: '5', event: 'Fabric, London', photographer: 'Danny North', color: '#1f1f1f' },
  { id: '6', event: 'Mutek, Montreal', photographer: 'Bruno Destombes', color: '#252525' },
  { id: '7', event: 'Movement, Detroit', photographer: 'Stephen Bondio', color: '#151515' },
  { id: '8', event: 'Bassiani, Tbilisi', photographer: 'Saba Gorgodze', color: '#0f0f0f' },
  { id: '9', event: 'Dekmantel, Amsterdam', photographer: 'Bart Heemskerk', color: '#222' },
  { id: '10', event: 'Gashouder, Amsterdam', photographer: 'Jorrit Lousko', color: '#1b1b1b' },
  { id: '11', event: 'Watergate, Berlin', photographer: 'Kasskara', color: '#181818' },
  { id: '12', event: 'Studio Session', photographer: 'Marie Staggat', color: '#2c2c2c' },
];

export const mockEvents: Event[] = [
  { id: '1', venue: 'Berghain', city: 'Berlin', country: 'Germany', date: '2024-11-15', headliner: true, status: 'upcoming', ticketUrl: '#', soldOut: true },
  { id: '2', venue: 'Fabric', city: 'London', country: 'UK', date: '2024-12-05', headliner: true, status: 'upcoming', ticketUrl: '#' },
  { id: '3', venue: 'Basement', city: 'New York', country: 'USA', date: '2024-12-31', headliner: true, status: 'upcoming', ticketUrl: '#' },
  { id: '4', venue: 'Radion', city: 'Amsterdam', country: 'Netherlands', date: '2025-01-12', headliner: false, status: 'upcoming', ticketUrl: '#' },
  { id: '5', venue: 'Tresor', city: 'Berlin', country: 'Germany', date: '2023-10-20', headliner: true, status: 'past' },
  { id: '6', venue: 'Printworks', city: 'London', country: 'UK', date: '2023-09-15', headliner: false, status: 'past' },
  { id: '7', venue: 'Movement Festival', city: 'Detroit', country: 'USA', date: '2023-05-28', headliner: false, status: 'past' },
  { id: '8', venue: 'Awakenings Festival', city: 'Amsterdam', country: 'Netherlands', date: '2023-06-12', headliner: true, status: 'past' },
];

export const mockTestimonials: Testimonial[] = [
  { id: '1', name: 'Ben Klock', title: 'Artist', organization: 'Klockworks', quote: '"UR TECH’s sets are a masterclass in tension and release. Absolute control of the floor."' },
  { id: '2', name: 'Nina Kraviz', title: 'Artist', organization: 'Trip', quote: '"Raw, industrial energy with an incredible ear for spatial design. Truly next level."' },
  { id: '3', name: 'Resident Advisor', title: 'Editorial', organization: 'RA', quote: '"The most compelling new voice in Berlin\'s underground techno scene right now."' },
  { id: '4', name: 'Mixmag', title: 'Editorial', organization: 'Mixmag', quote: '"A brutal yet deeply emotional approach to electronic music."' },
  { id: '5', name: 'Marcel Dettmann', title: 'Artist', organization: 'Ostgut Ton', quote: '"Few artists understand the architecture of sound quite like this."' }
];
