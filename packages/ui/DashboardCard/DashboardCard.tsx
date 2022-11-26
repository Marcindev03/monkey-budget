import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Card } from "../Card";

type DashboardCardProps = {
  month: string;
  monthIncome: number;
  monthExpense: number;
  totalBalance: number;
};

export const DashboardCard: FC<DashboardCardProps> = ({
  month,
  monthExpense,
  monthIncome,
  totalBalance,
}) => {
  return (
    <Card mt="6">
      <Heading fontSize="xl" fontWeight={"semibold"}>
        {month} balance
      </Heading>

      <Flex pt="4" justifyContent={"space-between"}>
        <Box
          width={"40%"}
          rounded="full"
          height={"100px"}
          bgColor="red.400"
        ></Box>
        <Box w="50%">
          <Flex justifyContent={"space-between"} w="full">
            <Text>Income:</Text>
            <Text color="green.500">{monthIncome}</Text>
          </Flex>
          <Flex justifyContent={"space-between"} w="full">
            <Text>Expense:</Text>
            <Text color="red.500">{monthExpense}</Text>
          </Flex>
          <Flex justifyContent={"space-between"} w="full" mt="5">
            <Text fontSize={"xl"}>Total:</Text>
            <Text fontSize={"xl"}>{totalBalance}</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};
