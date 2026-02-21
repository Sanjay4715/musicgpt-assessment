import { GeneratedList, GeneratedListStore } from "@/interface/GeneratedItems";
import { createStore } from "./createStore";
import api from "@/lib/api";

const getGeneratedAudios =
  (set: (fn: (state: GeneratedListStore) => GeneratedListStore) => void) =>
  async () => {
    try {
      // Run both requests at the same time
      const results = await Promise.allSettled([
        api.get("/api/audio"),
        api.get("/api/unprocessed"),
      ]);
      const [audioResult, unprocessedResult] = results;
      const generatedList: Array<GeneratedList> = [];
      // Handle audio response
      if (
        audioResult.status === "fulfilled" &&
        audioResult.value.status === 200
      ) {
        const { audios } = audioResult.value.data;
        generatedList.push(...audios);
        set((state) => ({ ...state, audios }));
      } else {
        console.error("Audio API failed");
      }

      // Handle unprocessed response
      if (
        unprocessedResult.status === "fulfilled" &&
        unprocessedResult.value.status === 200
      ) {
        const { rows } = unprocessedResult.value.data;
        generatedList.push(...rows);
        set((state) => ({ ...state, unprocessed: rows }));
      } else {
        console.error("Unprocessed API failed");
      }

      const sortedGeneratedList = generatedList.sort(
        (a, b) =>
          (new Date(b.created_at).getTime() || 0) -
          (new Date(a.created_at).getTime() || 0),
      );
      set((state) => ({
        ...state,
        sortedGeneratedList,
      }));
    } catch (error) {
      console.error(error);
    }
  };

export const useGeneratedListStore = createStore<GeneratedListStore>(
  (set) => ({
    audios: [],
    unprocessed: [],
    sortedGeneratedList: [],
    getGeneratedAudios: getGeneratedAudios(set),
  }),
  {
    name: "GeneratedGeneratedListStore",
    persist: true,
    storageType: "session",
  },
);
