import { GeneratedList } from "./GeneratedItems";

export interface MusicPlayerStore {
  isPlayerOn: boolean;
  musicToPlay: GeneratedList;
  currentTimestamp: number;
  isMusicPaused: boolean;
  toggleMusicPlayer: (value: boolean) => void;
  addMusicToPlayer: (value: GeneratedList) => void;
  setCurrentTimestamp: (value: number) => void;
  setMusicPlayPause: (value: boolean) => void;
}

export interface LyricsContentProps {
  lyrics: string;
  prompt: string;
}

export interface RenderLyricsProps {
  lyrics: string;
}

export interface Lyrics {
  start: number;
  end: number;
  text: string;
  index: number;
}
