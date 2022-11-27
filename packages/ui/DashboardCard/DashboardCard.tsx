import { Box, Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
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
  const dashboardRowStyle: FlexProps = {
    justifyContent: "space-between",
    w: "full",
  };

  return (
    <Card mt="6">
      <Heading fontSize="xl" fontWeight={"semibold"}>
        {month} status
      </Heading>

      <Flex pt="4" justifyContent={"space-between"}>
        <Box
          width={"40%"}
          rounded="full"
          height={"100px"}
          bgColor="red.400"
        ></Box>
        <Box w="50%">
          <Flex {...dashboardRowStyle}>
            <Text>Income:</Text>
            <Text color="green.500">{monthIncome}</Text>
          </Flex>
          <Flex {...dashboardRowStyle}>
            <Text>Expense:</Text>
            <Text color="red.500">{monthExpense}</Text>
          </Flex>
          <Flex {...dashboardRowStyle} mt="5">
            <Text fontSize={"xl"}>Balance:</Text>
            <Text fontSize={"xl"}>{totalBalance}</Text>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};
