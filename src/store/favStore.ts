import { create } from "zustand";
import { MenuItem } from "./cartStore";

interface FavStore {
  favItems: MenuItem[];
  addToFavs: (item: MenuItem) => void;
  clearFavs: () => void;
}

export const useFavStore = create<FavStore>((set) => ({
  favItems: [],
  addToFavs: (item: MenuItem) =>
    set((state) => ({ favItems: [...state.favItems, item] })),
  clearFavs: () => set({ favItems: [] }),
}));
