import { UnorderedList } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../../features/categories/categoriesSlice";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <UnorderedList spacing={"2"} mt="4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </UnorderedList>
  );
};

export default CategoriesList;
