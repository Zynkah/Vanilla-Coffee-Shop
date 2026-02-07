import { ProductSection } from "../../components/productSection";
import { useFavStore } from "../../store/favStore";
import { SPageWrapper } from "../../styles";

export const ProfilePage = () => {
  const favItems = useFavStore((state: any) => state.favItems);

  return (
    <SPageWrapper>
      {/* <ProductSection title="Your Past Orders" products={[]} /> */}
      <ProductSection title="Your Favorites" products={favItems} />
    </SPageWrapper>
  );
};
