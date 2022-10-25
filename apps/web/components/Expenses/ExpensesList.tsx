import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectAllExpenses } from "../../features/expenses/expensesSlice";
import ExpenseCard from "./ExpenseCard";

export const ExpensesList: FC = () => {
  const expenses = useSelector(selectAllExpenses);

  return (
    <VStack display={"block"}>
      <SimpleGrid columns={4} w="xl">
        <Text>Category</Text>
        <Text>Amout</Text>
        <Text>Description</Text>
        <Text>Date</Text>
      </SimpleGrid>
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </VStack>
  );
};
