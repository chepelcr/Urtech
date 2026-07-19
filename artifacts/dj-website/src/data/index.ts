// ── Simulated data layer ───────────────────────────────────────────────
//
// All content is stored in src/data/json/*.json files.
// Each export below maps 1-to-1 with what a real REST endpoint would return.
//
// To migrate to a real backend:
//   1. Replace the JSON imports with fetch() calls to your API.
//   2. Wrap in a React Query hook (useQuery) or SWR if you need loading states.
//   3. The types in ./types.ts stay unchanged.
//
// ──────────────────────────────────────────────────────────────────────

import _mixes        from './json/mixes.json';
import _releases     from './json/releases.json';
import _videos       from './json/videos.json';
import _gallery      from './json/gallery.json';
import _events       from './json/events.json';
import _testimonials from './json/testimonials.json';
import _site         from './json/site.json';

import type {
  Mix,
  Release,
  Video,
  GalleryItem,
  Event,
  Testimonial,
  SiteConfig,
} from './types';

export const mixes:        Mix[]        = _mixes        as Mix[];
export const releases:     Release[]    = _releases      as Release[];
export const videos:       Video[]      = _videos        as Video[];
export const gallery:      GalleryItem[]= _gallery       as GalleryItem[];
export const events:       Event[]      = _events        as Event[];
export const testimonials: Testimonial[]= _testimonials  as Testimonial[];
export const site:         SiteConfig   = _site          as SiteConfig;

// Re-export types so consumers only need one import path
export type { Mix, Release, Video, GalleryItem, Event, Testimonial, SiteConfig } from './types';
