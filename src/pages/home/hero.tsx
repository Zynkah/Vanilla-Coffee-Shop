import { SHeroContent, SHeroWrapper, SMapWrapper } from "./styles";
import CoffeeHeart from "../../assets/coffee_heart.webp";

export const Hero = () => {
  return (
    <>
      <SHeroWrapper>
        <SHeroContent>
          <div>
            <h1>SAL'S VANILLA & COFFEE TRADING CO.</h1>
            <h2>Purveyors of Fine Extracts Since 1887</h2>
            <p>
              Sourcing the finest vanilla and coffee from historic Caribbean
              ports. Experience the taste of tradition.
            </p>
          </div>
          <img
            src={CoffeeHeart}
            alt="Coffee cup with heart-shaped latte art"
          />
        </SHeroContent>
      </SHeroWrapper>
      <SMapWrapper />
    </>
  );
};
