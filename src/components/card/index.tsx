import {
  SCardFooter,
  SCardHeartBanner,
  SCardImage,
  SCardWrapper,
} from "./styles";
import cartIcon from "../../assets/cart.svg";
import heartIcon from "../../assets/heart.svg";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  productName: string;
  price: string;
  onAddToCart?: () => void;
  onAddToFavorites?: () => void;
}

export const Card = ({
  imageSrc,
  imageAlt,
  productName,
  price,
  onAddToCart,
  onAddToFavorites,
}: CardProps) => {
  return (
    <SCardWrapper>
      <SCardImage src={imageSrc} alt={imageAlt} width={350} />
      <SCardHeartBanner>
        <button
          type="button"
          aria-label="Add to favorites"
          onClick={onAddToFavorites}
        >
          <img src={heartIcon} alt="Heart Banner" width={24} />
        </button>
      </SCardHeartBanner>
      <SCardFooter>
        <span>{productName}</span>
        <span>{price}</span>
        <button type="button" aria-label="Add to cart" onClick={onAddToCart}>
          <img src={cartIcon} alt="Add to cart" width={24} />
        </button>
      </SCardFooter>
    </SCardWrapper>
  );
};
