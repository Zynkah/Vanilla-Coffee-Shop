import { SPageWrapper } from "../../styles";
import { VanillaData } from "../../data/vanillaData";
import { ProductSection } from "../../components/productSection";

export const VanillaPage = () => {
  return (
    <SPageWrapper>
      <ProductSection title="Our Vanilla Selection" products={VanillaData} />
    </SPageWrapper>
  );
};
