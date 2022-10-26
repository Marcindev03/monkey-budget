import { SimpleGrid, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { format, parseISO } from "date-fns";
import { Income } from "../../types/income";
import { useDispatch } from "react-redux";
import {
  deleteIncome,
  setEditIncomeId,
} from "../../features/incomes/incomesSlice";

type IncomeCardProps = {
  income: Income;
  openEditModal: () => void;
};

const IncomeCard: FC<IncomeCardProps> = ({ income, openEditModal }) => {
  const dispatch = useDispatch();

  const handleIncomeDelete = () => dispatch(deleteIncome(income.id));

  const handleIncomeEdit = () => {
    dispatch(setEditIncomeId(income.id));
    openEditModal();
  };

  return (
    <SimpleGrid
      columns={5}
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
      <EditIcon cursor="pointer" onClick={handleIncomeEdit} />
    </SimpleGrid>
  );
};

export default IncomeCard;
