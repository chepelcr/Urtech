import React, { createContext, useContext, useState, useEffect } from 'react';
import { Mix } from '../data/mock';

interface AudioContextType {
  currentTrack: Mix | null;
  isPlaying: boolean;
  queue: Mix[];
  playTrack: (track: Mix, queue?: Mix[]) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  progress: number;
  setProgress: (val: number) => void;
  volume: number;
  setVolume: (val: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Mix | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Mix[]>([]);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const playTrack = (track: Mix, newQueue?: Mix[]) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgress(0);
    if (newQueue) {
      setQueue(newQueue);
    }
  };

  const togglePlayPause = () => {
    if (currentTrack) {
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    if (!currentTrack || queue.length === 0) return;
    const currentIndex = queue.findIndex(t => t.id === currentTrack.id);
    if (currentIndex < queue.length - 1) {
      playTrack(queue[currentIndex + 1]);
    } else {
      // Loop or stop? Stop for now
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const prevTrack = () => {
    if (!currentTrack || queue.length === 0) return;
    const currentIndex = queue.findIndex(t => t.id === currentTrack.id);
    if (currentIndex > 0) {
      playTrack(queue[currentIndex - 1]);
    } else {
      setProgress(0);
    }
  };

  // Simulate progress when playing
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            nextTrack();
            return 0;
          }
          return p + 0.1; // simulate time passing
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack, queue]);

  const value = {
    currentTrack,
    isPlaying,
    queue,
    playTrack,
    togglePlayPause,
    nextTrack,
    prevTrack,
    progress,
    setProgress,
    volume,
    setVolume
  };

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
