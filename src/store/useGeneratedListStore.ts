import { GeneratedList, GeneratedListStore } from "@/interface/GeneratedItems";
import { createStore } from "./createStore";
import api from "@/lib/api";
import { sortArrayByCreatedAt } from "@/common";
import { API_STATUS } from "@/enums";

const getGeneratedAudios =
  (set: (fn: (state: GeneratedListStore) => GeneratedListStore) => void) =>
  async () => {
    try {
      // Run both requests at the same time
      const results = await Promise.allSettled([
        api.get("/api/audio"),
        api.get("/api/unprocessed"),
      ]);

      set((state) => ({ ...state, apiStatus: API_STATUS.FETCHING }));
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

      const sortedGeneratedList = sortArrayByCreatedAt(generatedList);
      set((state) => ({ ...state, apiStatus: API_STATUS.SUCCESS }));
      set((state) => ({
        ...state,
        sortedGeneratedList,
      }));
    } catch (error) {
      set((state) => ({ ...state, apiStatus: API_STATUS.FAIL }));
      console.error(error);
    }
  };

export const useGeneratedListStore = createStore<GeneratedListStore>(
  (set) => ({
    apiStatus: API_STATUS.PENDING,
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
