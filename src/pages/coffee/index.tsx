import { useCartStore } from "../../store/cartStore";
import { Card } from "../../components/card";
import { CoffeeData } from "../../data/coffeeData";
import { SPageWrapper, SProductsWrapper } from "../../styles";

export interface MenuItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  price: string;
}

export const CoffeePage = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
  };

  return (
    <SPageWrapper>
      <h1>COFFEE PAGE</h1>
      <SProductsWrapper>
        {CoffeeData.map((product: MenuItem) => (
          <Card
            key={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            productName={product.productName}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </SProductsWrapper>
    </SPageWrapper>
  );
};
