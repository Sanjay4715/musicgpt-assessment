import { CommonStore } from "@/interface/store/store";
import { createStore } from "./createStore";

export const useCommonStore = createStore<CommonStore>(
  (set) => ({
    isProfileDropdown: false,
    setStoreState: (value) =>
      set((state) => ({
        ...state,
        ...value,
      })),
  }),
  { name: "CommonStore", persist: true, storageType: "session" },
);
