import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';

// Minimal SC Widget typings (no package needed)
interface SCWidget {
  play(): void;
  pause(): void;
  seekTo(ms: number): void;
  getDuration(cb: (dur: number) => void): void;
  bind(event: string, cb: (data?: any) => void): void;
}

interface SCState {
  isPlaying: boolean;
  /** milliseconds */
  position: number;
  /** milliseconds */
  duration: number;
  title: string;
  isReady: boolean;
}

interface SCContextType extends SCState {
  togglePlayPause: () => void;
  seekTo: (pct: number) => void;
}

const SoundCloudContext = createContext<SCContextType | undefined>(undefined);

const TRACK_API_URL = 'https://api.soundcloud.com/tracks/1514050228';
const TRACK_TITLE = 'Morning Glory';

const embedSrc =
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(TRACK_API_URL)}` +
  `&color=%23ffffff` +
  `&auto_play=false` +
  `&hide_related=true` +
  `&show_comments=false` +
  `&show_user=true` +
  `&show_reposts=false` +
  `&show_teaser=false` +
  `&visual=true`;

export function SoundCloudProvider({ children }: { children: React.ReactNode }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<SCWidget | null>(null);
  const [state, setState] = useState<SCState>({
    isPlaying: false,
    position: 0,
    duration: 0,
    title: TRACK_TITLE,
    isReady: false,
  });

  // Wire up the SC Widget API once the iframe loads
  const handleIframeLoad = useCallback(() => {
    // SC Widget API may load slightly after the iframe; retry a few times
    let attempts = 0;
    const tryInit = () => {
      const SC = (window as any).SC;
      if (!SC?.Widget) {
        if (attempts++ < 20) setTimeout(tryInit, 300);
        return;
      }
      const widget: SCWidget = SC.Widget(iframeRef.current!);
      widgetRef.current = widget;
      const Events = SC.Widget.Events;

      widget.bind(Events.READY, () => {
        widget.getDuration((dur: number) => {
          setState(s => ({ ...s, duration: dur, title: TRACK_TITLE, isReady: true }));
        });
      });
      widget.bind(Events.PLAY, () => setState(s => ({ ...s, isPlaying: true })));
      widget.bind(Events.PAUSE, () => setState(s => ({ ...s, isPlaying: false })));
      widget.bind(Events.FINISH, () =>
        setState(s => ({ ...s, isPlaying: false, position: 0 }))
      );
      widget.bind(Events.PLAY_PROGRESS, (data: { currentPosition: number }) => {
        setState(s => ({ ...s, position: data.currentPosition }));
      });
    };
    tryInit();
  }, []);

  const togglePlayPause = useCallback(() => {
    if (!widgetRef.current) return;
    if (state.isPlaying) {
      widgetRef.current.pause();
    } else {
      widgetRef.current.play();
    }
  }, [state.isPlaying]);

  const seekTo = useCallback(
    (pct: number) => {
      if (widgetRef.current && state.duration > 0) {
        widgetRef.current.seekTo(pct * state.duration);
      }
    },
    [state.duration]
  );

  return (
    <SoundCloudContext.Provider value={{ ...state, togglePlayPause, seekTo }}>
      {/* Persistent iframe — never unmounts so audio survives navigation */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: 1,
          height: 1,
          bottom: 0,
          right: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          opacity: 0,
          zIndex: -1,
        }}
      >
        <iframe
          ref={iframeRef}
          title="SC persistent player"
          width="1"
          height="1"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedSrc}
          onLoad={handleIframeLoad}
        />
      </div>

      {children}
    </SoundCloudContext.Provider>
  );
}

export function useSoundCloud() {
  const ctx = useContext(SoundCloudContext);
  if (!ctx) throw new Error('useSoundCloud must be used within SoundCloudProvider');
  return ctx;
}
