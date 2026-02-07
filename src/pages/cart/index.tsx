import { ProductSection } from "../../components/productSection";
import { useCartStore } from "../../store/cartStore";
import { SPageWrapper } from "../../styles";

export const CartPage = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <SPageWrapper>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
       <ProductSection title="Your Cart" products={cartItems} />
      )}
    </SPageWrapper>
  );
};
