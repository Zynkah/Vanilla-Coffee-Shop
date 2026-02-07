import { SHeroContent, SHeroWrapper } from "./hero.styles";
import CoffeeHeart from "../../assets/coffee_heart.webp";

export const Hero = () => {
  return (
    <SHeroWrapper>
      <SHeroContent>
        <div>
          <h1>SAL'S VANILLA & COFFEE</h1>
          <p>
            Welcome to Sal's Vanilla & Coffee! Explore our premium extracts.
          </p>
        </div>
        <img
          src={CoffeeHeart}
          alt="Coffee cup with heart-shaped latte art"
          width={250}
        />
      </SHeroContent>
    </SHeroWrapper>
  );
};
