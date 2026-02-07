import { useCartStore } from "../../store/cartStore";
import { SPageWrapper } from "../../styles";

export const CartPage = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <SPageWrapper>
      <h1>YOUR CART</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.imageSrc} alt={item.imageAlt} width={50} />
              <span>{item.productName}</span> - <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </SPageWrapper>
  );
};
