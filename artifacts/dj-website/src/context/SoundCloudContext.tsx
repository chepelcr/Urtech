import React, { createContext, useContext, useRef, useState, useCallback } from 'react';

// Minimal SC Widget typings (no package needed)
interface SCWidget {
  play(): void;
  pause(): void;
  seekTo(ms: number): void;
  getPosition(cb: (pos: number) => void): void;
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
  registerWidget: (iframe: HTMLIFrameElement, title: string) => void;
  togglePlayPause: () => void;
  seekTo: (pct: number) => void;
}

const SoundCloudContext = createContext<SCContextType | undefined>(undefined);

export function SoundCloudProvider({ children }: { children: React.ReactNode }) {
  const widgetRef = useRef<SCWidget | null>(null);
  const [state, setState] = useState<SCState>({
    isPlaying: false,
    position: 0,
    duration: 0,
    title: '',
    isReady: false,
  });

  const registerWidget = useCallback((iframe: HTMLIFrameElement, title: string) => {
    // SC Widget API is loaded via <script> in index.html
    const SC = (window as any).SC;
    if (!SC?.Widget) {
      console.warn('SC Widget API not ready');
      return;
    }

    const widget: SCWidget = SC.Widget(iframe);
    widgetRef.current = widget;
    const Events = SC.Widget.Events;

    widget.bind(Events.READY, () => {
      widget.getDuration((dur: number) => {
        setState(s => ({ ...s, duration: dur, title, isReady: true }));
      });
    });

    widget.bind(Events.PLAY, () => setState(s => ({ ...s, isPlaying: true })));
    widget.bind(Events.PAUSE, () => setState(s => ({ ...s, isPlaying: false })));
    widget.bind(Events.FINISH, () => setState(s => ({ ...s, isPlaying: false, position: 0 })));
    widget.bind(Events.PLAY_PROGRESS, (data: { currentPosition: number }) => {
      setState(s => ({ ...s, position: data.currentPosition }));
    });
  }, []);

  const togglePlayPause = useCallback(() => {
    if (!widgetRef.current) return;
    if (state.isPlaying) {
      widgetRef.current.pause();
    } else {
      widgetRef.current.play();
    }
  }, [state.isPlaying]);

  const seekTo = useCallback((pct: number) => {
    if (widgetRef.current && state.duration > 0) {
      widgetRef.current.seekTo(pct * state.duration);
    }
  }, [state.duration]);

  return (
    <SoundCloudContext.Provider value={{ ...state, registerWidget, togglePlayPause, seekTo }}>
      {children}
    </SoundCloudContext.Provider>
  );
}

export function useSoundCloud() {
  const ctx = useContext(SoundCloudContext);
  if (!ctx) throw new Error('useSoundCloud must be used within SoundCloudProvider');
  return ctx;
}
