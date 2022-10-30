import { SimpleGrid, Tag, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../app/store";
import { selectCategoryById } from "../../features/categories/categoriesSlice";
import { Category } from "../../types/category";
import { Expense } from "../../types/expense";

type ExpenseCardProps = {
  expense: Expense;
};

export const ExpenseCard: FC<ExpenseCardProps> = ({ expense }) => {
  const category = useSelector<AppState>((state) =>
    selectCategoryById(state, expense.categoryId)
  ) as Category;

  return (
    <SimpleGrid
      columns={4}
      w="2xl"
      shadow="md"
      rounded={"full"}
      bgColor="red.100"
      py="2"
      px="4"
    >
      {category ? (
        <Tag colorScheme={category.color}>{category.name}</Tag>
      ) : (
        <Tag>No category</Tag>
      )}
      <Text>- {expense.value}</Text>
      <Text>{expense.description}</Text>
      <Text>{format(parseISO(expense.date), "dd.M.yyyy")}</Text>
    </SimpleGrid>
  );
};

export default ExpenseCard;
