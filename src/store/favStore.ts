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
    set((state) => {
      const exists = state.favItems.some((fav) => fav.id === item.id);
      if (exists) return state;
      return { favItems: [...state.favItems, item] };
    }),
  clearFavs: () => set({ favItems: [] }),
}));
