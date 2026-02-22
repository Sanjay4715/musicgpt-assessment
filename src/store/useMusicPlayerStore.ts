import { GeneratedList } from "@/interface/GeneratedItems";
import { createStore } from "./createStore";
import { MusicPlayerStore } from "@/interface/MusicPlayer";

export const useMusicPlayerStore = createStore<MusicPlayerStore>(
  (set) => ({
    isPlayerOn: false,
    musicToPlay: { id: "" },
    currentTimestamp: 0,
    isMusicPaused: true,
    toggleMusicPlayer: (value: boolean) => {
      set({ isPlayerOn: value });
      if (value === false) {
        set({ currentTimestamp: 0 });
        set({
          musicToPlay: {
            id: "",
          },
        });
      }
    },
    addMusicToPlayer: (value: GeneratedList) => {
      set({ musicToPlay: value });
    },
    setCurrentTimestamp: (value: number) => set({ currentTimestamp: value }),
    setMusicPlayPause: (value: boolean) =>
      set({
        isMusicPaused: value,
      }),
  }),
  { name: "MusicPlayerStore", persist: false, storageType: "session" },
);
