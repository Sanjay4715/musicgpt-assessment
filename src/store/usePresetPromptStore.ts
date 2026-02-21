/* eslint-disable @typescript-eslint/no-explicit-any */
import {  PromptStore } from "@/interface/PresetPrompts";
import { createStore } from "./createStore";
import api from "@/lib/api";

const getPrompts = (set: any) => async () => {
  try {
    const response = await api.get("/api/prompt");
    const { status } = response;
    const { presetPrompt } = response.data;
    if (status === 200) {
      set(() => ({
        prompts: presetPrompt,
      }));
    }
  } catch (error) {
    console.error(error);
  }
};

export const usePresetPromptStore = createStore<PromptStore>(
  (set) => ({
    prompts: [],
    getPrompts: getPrompts(set),
  }),
  { name: "PromptStore", persist: true, storageType: "session" },
);
