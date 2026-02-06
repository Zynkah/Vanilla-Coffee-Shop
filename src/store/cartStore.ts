import { create } from "zustand";

interface CartItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  price: string;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  clearCart: () => set({ cartItems: [] }),
}));
