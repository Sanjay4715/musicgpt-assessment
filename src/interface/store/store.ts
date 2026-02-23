export interface StoreOptions {
  name: string;
  persist?: boolean;
  storageType?: string;
}

export interface CommonStore {
  isProfileDropdown: boolean;
  setStoreState: (value: Partial<CommonStore>) => void;
}
