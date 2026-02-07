import { useFavStore } from "../store/favStore";

export const useAddToFavs = () => {
  const addToFavs = useFavStore((state: any) => state.addToFavs);

  const handleAddToFavs = (item: any) => {
    addToFavs(item);
  };

  return { handleAddToFavs };
};

