import { SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Income } from "../../types/income";

type IncomeCardProps = {
  income: Income;
};

const IncomeCard: FC<IncomeCardProps> = ({ income }) => {
  return (
    <SimpleGrid
      columns={3}
      w="2xl"
      shadow="md"
      rounded={"full"}
      bgColor="green.100"
      justifyContent={"space-between"}
      py="2"
      px="4"
    >
      <Text>+ {income.value}</Text>
      <Text>{income.description}</Text>
      <Text>{format(parseISO(income.date), "dd.M.yyyy")}</Text>
    </SimpleGrid>
  );
};

export default IncomeCard;
