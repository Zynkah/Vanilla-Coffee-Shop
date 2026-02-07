import { CoffeeData } from "../../data/coffeeData";
import { SPageWrapper } from "../../styles";
import { ProductSection } from "../../components/productSection";

export const CoffeePage = () => {
  return (
    <SPageWrapper>
      <ProductSection title="Our Coffee Selection" products={CoffeeData} />
    </SPageWrapper>
  );
};
