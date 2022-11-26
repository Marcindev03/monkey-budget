import type { NextPage } from "next";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { DashboardCard } from "ui";

const DashboardPage: NextPage = () => {
  const session = useSession();

  return (
    <Box minH="100vh" p="5">
      <Heading>Dashboard</Heading>

      <Text>Welcome, {session?.user?.email}</Text>

      <DashboardCard
        month={"November"}
        monthIncome={3500}
        monthExpense={2000}
        totalBalance={1500}
      />
    </Box>
  );
};

export default DashboardPage;
