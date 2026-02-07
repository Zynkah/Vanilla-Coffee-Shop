import { useAddToCart } from "../../hooks/useAddToCart";
import { useAddToFavs } from "../../hooks/useAddToFavs";
import { SProductsWrapper, SSectionTitle } from "../../styles";
import { Card } from "../card";

interface ProductSectionProps {
  title: string;
  products: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    productName: string;
    price: string;
  }[];
}

export const ProductSection = ({ title, products }: ProductSectionProps) => {
  const { handleAddToCart } = useAddToCart();
  const { handleAddToFavs } = useAddToFavs();

  return (
    <>
      <SSectionTitle>{title}</SSectionTitle>
      <SProductsWrapper>
        {products.map((item) => (
          <Card
            key={item.id}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            productName={item.productName}
            price={item.price}
            onAddToCart={() => handleAddToCart(item)}
            onAddToFavorites={() => handleAddToFavs(item)}
          />
        ))}
      </SProductsWrapper>
    </>
  );
};
