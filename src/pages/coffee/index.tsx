import { Card } from "../../components/card";
import { CoffeeData } from "../../data/coffeeData";
import { SPageWrapper, SProductsWrapper } from "../../styles";
import { useAddToCart } from "../../hooks/useAddToCart";

export interface MenuItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  productName: string;
  price: string;
}

export const CoffeePage = () => {
  const { handleAddToCart } = useAddToCart();

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
