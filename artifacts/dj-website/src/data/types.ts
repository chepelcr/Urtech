// ── Data types ─────────────────────────────────────────────────────────
// These interfaces describe the shape of each JSON data file.
// When migrating to a real backend, only the data/index.ts fetch calls
// need to change — these types stay the same.

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

export interface GalleryItem {
  id: string;
  /** 'image' for photos; 'video' for local mp4 or YouTube embeds */
  type: 'image' | 'video';
  event: string;
  photographer?: string;
  /** Fallback background colour shown while media loads or as placeholder */
  color: string;
  /** Local file path served from /public (e.g. "/gallery/my-photo.jpg") */
  src?: string;
  /** External embed URL — YouTube watch or embed URLs are both accepted */
  url?: string;
  /** Optional thumbnail image shown on the card for video items */
  thumbnail?: string;
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

export interface SiteConfig {
  artist: {
    name: string;
    alias: string;
    genres: string[];
    origin: string;
    email: string;
    instagram: string;
    soundcloud: string;
  };
  track: {
    title: string;
    apiUrl: string;
    pageUrl: string;
  };
}
