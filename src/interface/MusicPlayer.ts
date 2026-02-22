import { GeneratedList } from "./GeneratedItems";

export interface MusicPlayerStore {
  isPlayerOn: boolean;
  musicToPlay: GeneratedList;
  currentTimestamp: number;
  toggleMusicPlayer: (value: boolean) => void;
  addMusicToPlayer: (value: GeneratedList) => void;
  setCurrentTimestamp: (value: number) => void;
}

export interface LyricsContentProps {
  lyrics: string;
  prompt: string;
}
