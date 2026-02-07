import { Card } from "../../components/card";
import { FeaturedItemsData } from "../../data/featuredItemsData";
import { useAddToCart } from "../../hooks/useAddToCart";
import { SPageWrapper, SProductsWrapper } from "../../styles";
import { Hero } from "./hero";

export const Home = () => {
  const { handleAddToCart } = useAddToCart();

  return (
    <SPageWrapper>
      <Hero />
      <h2>Featured Products</h2>
      <SProductsWrapper>
        {FeaturedItemsData.map((item) => (
          <Card
            key={item.id}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            productName={item.productName}
            price={item.price}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </SProductsWrapper>
    </SPageWrapper>
  );
};
