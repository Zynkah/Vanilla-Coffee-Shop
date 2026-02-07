import { create } from "zustand";

export interface MenuItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  price: string;
}

interface CartStore {
  cartItems: MenuItem[];
  addToCart: (item: MenuItem) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  clearCart: () => set({ cartItems: [] }),
}));
