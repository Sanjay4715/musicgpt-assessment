import { create, StateCreator } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { StoreOptions } from "@/interface/store/store";

export const createStore = <T extends object>(
  store: StateCreator<T>,
  options: StoreOptions,
) => {
  const { name, persist: storePersist = true, storageType = "local" } = options;

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
      storage: createJSONStorage(() =>
        storageType === "session" ? sessionStorage : localStorage,
      ),
    }) as StateCreator<T, [], []>;
  }

  return create<T>()(enhancedStore);
};
