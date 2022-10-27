import { DeleteIcon } from "@chakra-ui/icons";
import { HStack, ListItem, Tag } from "@chakra-ui/react";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPickedCategoryId } from "../../features/categories/categoriesSlice";
import { selectAllExpenses } from "../../features/expenses/expensesSlice";
import { Category } from "../../types/category";

type CategoryCardProps = {
  category: Category;
  openEditModal: () => void;
  openConfirmationModal: () => void;
  openWarningModal: () => void;
};

const CategoryCard: FC<CategoryCardProps> = ({
  category,
  openEditModal,
  openConfirmationModal,
  openWarningModal,
}) => {
  const expenses = useSelector(selectAllExpenses);
  const dispatch = useDispatch();

  const hasCategoryExpenses = () => {
    return expenses.find(({ categoryId }) => categoryId === category.id);
  };

  const handleCategoryEdit = () => {
    dispatch(setPickedCategoryId(category.id));
    openEditModal();
  };

  const handleCategoryDelete = () => {
    dispatch(setPickedCategoryId(category.id));

    if (hasCategoryExpenses()) {
      openWarningModal();
    } else {
      openConfirmationModal();
    }
  };

  return (
    <ListItem>
      <HStack spacing="8">
        <Tag
          colorScheme={category.color}
          onClick={handleCategoryEdit}
          cursor="pointer"
        >
          {category.name}
        </Tag>
        <DeleteIcon cursor={"pointer"} onClick={handleCategoryDelete} />
      </HStack>
    </ListItem>
  );
};

export default CategoryCard;
