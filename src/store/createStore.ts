import { create, StateCreator } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { StoreOptions } from "@/interface/store/store";

// Custom storage wrapper that handles unavailable storage gracefully
const createSafeStorage = (storageType: string) => {
  return {
    getItem: (key: string) => {
      try {
        if (typeof window === "undefined") return null;
        const storage = storageType === "session" ? sessionStorage : localStorage;
        return storage.getItem(key);
      } catch (e) {
        console.warn(`Unable to read from ${storageType}:`, e);
        return null;
      }
    },
    setItem: (key: string, value: string) => {
      try {
        if (typeof window === "undefined") return;
        const storage = storageType === "session" ? sessionStorage : localStorage;
        storage.setItem(key, value);
      } catch (e) {
        console.warn(`Unable to write to ${storageType}:`, e);
      }
    },
    removeItem: (key: string) => {
      try {
        if (typeof window === "undefined") return;
        const storage = storageType === "session" ? sessionStorage : localStorage;
        storage.removeItem(key);
      } catch (e) {
        console.warn(`Unable to remove from ${storageType}:`, e);
      }
    },
  };
};

export const createStore = <T extends object>(
  store: StateCreator<T>,
  options: StoreOptions,
) => {
  const {
    name,
    persist: storePersist = true,
    storageType = "local",
  } = options;

  let enhancedStore: StateCreator<T, [], []> = store;

  // Wrap with devtools first (inner)
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    enhancedStore = devtools(enhancedStore, { name }) as StateCreator<
      T,
      [],
      []
    >;
  }

  // Wrap with persist last (outer)
  if (storePersist) {
    enhancedStore = persist(enhancedStore, {
      name: `${name}-storage`,
      storage: createJSONStorage(() => createSafeStorage(storageType)),
    }) as StateCreator<T, [], []>;
  }

  return create<T>()(enhancedStore);
};
