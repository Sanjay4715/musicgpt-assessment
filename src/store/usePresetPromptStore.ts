/* eslint-disable @typescript-eslint/no-explicit-any */
import { PromptStore } from "@/interface/PresetPrompts";
import { createStore } from "./createStore";
import api from "@/lib/api";
import { API_STATUS } from "@/enums";

const getPrompts = (set: any) => async () => {
  try {
    set(() => ({ apiStatus: API_STATUS.FETCHING }));
    const response = await api.get("/api/prompt");
    const { status } = response;
    const { presetPrompt } = response.data;
    if (status === 200) {
      set(() => ({
        prompts: presetPrompt,
      }));

      set(() => ({ apiStatus: API_STATUS.SUCCESS }));
    }
  } catch (error) {
    set(() => ({ apiStatus: API_STATUS.FAIL }));
    console.error(error);
  }
};

export const usePresetPromptStore = createStore<PromptStore>(
  (set) => ({
    apiStatus: API_STATUS.PENDING,
    prompts: [],
    getPrompts: getPrompts(set),
  }),
  { name: "PromptStore", persist: true, storageType: "session" },
);
