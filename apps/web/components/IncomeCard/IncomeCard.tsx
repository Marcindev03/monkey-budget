import { SimpleGrid, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Income } from "../../types/income";
import { useDispatch } from "react-redux";
import { deleteIncome } from "../../features/incomes/incomesSlice";

type IncomeCardProps = {
  income: Income;
};

const IncomeCard: FC<IncomeCardProps> = ({ income }) => {
  const dispatch = useDispatch();

  const handleIncomeDelete = () => dispatch(deleteIncome(income.id));

  return (
    <SimpleGrid
      columns={4}
      w="2xl"
      shadow="md"
      rounded={"full"}
      bgColor="green.100"
      py="2"
      px="4"
    >
      <Text>+ {income.value}</Text>
      <Text>{income.description}</Text>
      <Text>{format(parseISO(income.date), "dd.M.yyyy")}</Text>
      <DeleteIcon cursor="pointer" onClick={handleIncomeDelete} />
    </SimpleGrid>
  );
};

export default IncomeCard;
