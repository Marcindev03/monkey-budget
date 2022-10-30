import {
  Button,
  Heading,
  HStack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getPickedCategoryId,
  selectAllCategories,
} from "../../features/categories/categoriesSlice";
import CategoriesModal from "./CategoriesModal";
import CategoryCard from "./CategoryCard";
import { ConfirmationModal, WarningModal } from "ui";
import { removeRelationWithCategory } from "../../features/expenses/expensesSlice";

const CategoriesList: FC = () => {
  const categories = useSelector(selectAllCategories);
  const pickedCategoryId = useSelector(getPickedCategoryId);

  const dispatch = useDispatch();

  const modalControls = {
    add: useDisclosure({ defaultIsOpen: false }),
    edit: useDisclosure({ defaultIsOpen: false }),
    confirm: useDisclosure({ defaultIsOpen: false }),
    warn: useDisclosure({ defaultIsOpen: false }),
  };

  const handleCategoryWithExpensesDelete = () => {
    dispatch(deleteCategory());
    dispatch(removeRelationWithCategory(pickedCategoryId));
  };

  return (
    <>
      <HStack>
        <Heading size="lg">All Categories</Heading>
        <Button colorScheme={"purple"} onClick={modalControls.add.onOpen}>
          Add Category
        </Button>
      </HStack>

      <UnorderedList spacing={"2"} mt="4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            openEditModal={modalControls.edit.onOpen}
            openConfirmationModal={modalControls.confirm.onOpen}
            openWarningModal={modalControls.warn.onOpen}
          />
        ))}
      </UnorderedList>

      <CategoriesModal
        modalTitle={"Add Category"}
        type={"add"}
        {...modalControls.add}
      />

      <CategoriesModal
        modalTitle={"Edit Category"}
        type={"edit"}
        {...modalControls.edit}
      />

      <ConfirmationModal
        onConfirm={() => dispatch(deleteCategory())}
        onReject={() => {}}
        {...modalControls.confirm}
      />

      <WarningModal
        // TODO delete other expenses on confirm
        onConfirm={handleCategoryWithExpensesDelete}
        onReject={() => {}}
        {...modalControls.warn}
      >
        <Text>
          There are some expenses related to this category. If you delete this
          category, expenses will lost relation with category
        </Text>
      </WarningModal>
    </>
  );
};

export default CategoriesList;
