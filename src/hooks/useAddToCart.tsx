import { useCartStore } from "../store/cartStore";

export const useAddToCart = () => {
  const addToCart = useCartStore((state: any) => state.addToCart);

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  return { handleAddToCart };
};
