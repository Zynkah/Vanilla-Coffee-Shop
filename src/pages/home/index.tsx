import { ProductSection } from "../../components/productSection";
import { FeaturedItemsData } from "../../data/featuredItemsData";
import { SPageWrapper} from "../../styles";
import { Hero } from "./hero";

export const Home = () => {
  return (
    <SPageWrapper>
      <Hero />
      <ProductSection title="Featured Products" products={FeaturedItemsData} />
    </SPageWrapper>
  );
};
