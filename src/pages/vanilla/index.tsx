import { Card } from "../../components/card";
import { SPageWrapper, SProductsWrapper } from "../../styles";
import { VanillaData } from "../../data/vanillaData";
import { useCartStore } from "../../store/cartStore";

export const VanillaPage = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  return (
    <SPageWrapper>
      <h1>VANILLA PAGE</h1>
      <SProductsWrapper>
        {VanillaData.map((product) => (
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
