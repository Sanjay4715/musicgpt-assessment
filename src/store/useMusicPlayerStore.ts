import { GeneratedList } from "@/interface/GeneratedItems";
import { createStore } from "./createStore";
import { MusicPlayerStore } from "@/interface/MusicPlayer";

export const useMusicPlayerStore = createStore<MusicPlayerStore>(
  (set) => ({
    isPlayerOn: false,
    musicToPlay: { id: "" },
    currentTimestamp: 0,
    toggleMusicPlayer: (value: boolean) => set({ isPlayerOn: value }),
    addMusicToPlayer: (value: GeneratedList) => set({ musicToPlay: value }),
    setCurrentTimestamp: (value: number) => set({ currentTimestamp: value }),
  }),
  { name: "MusicPlayerStore", persist: true, storageType: "session" },
);
