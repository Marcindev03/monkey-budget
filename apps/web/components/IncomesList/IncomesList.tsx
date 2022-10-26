import { SimpleGrid, VStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectAllIncomes } from "../../features/incomes/incomesSlice";
import IncomeCard from "../IncomeCard/IncomeCard";

type IncomesListProps = {
  openEditModal: () => void;
};

export const IncomesList: FC<IncomesListProps> = ({ openEditModal }) => {
  const incomes = useSelector(selectAllIncomes);

  return (
    <VStack mt="4" display="block">
      <SimpleGrid columns={3} w="xl">
        <Text>Amout</Text>
        <Text>Description</Text>
        <Text>Date</Text>
      </SimpleGrid>
      {incomes.map((income) => (
        <IncomeCard
          key={income.id}
          income={income}
          openEditModal={openEditModal}
        />
      ))}
    </VStack>
  );
};

export default IncomesList;
