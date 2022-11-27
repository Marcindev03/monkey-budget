import type { GetServerSideProps, NextPage } from "next";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { DashboardCard } from "ui";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database, getServerSession, getUsersExpensesValues } from "core";

type DashboardPageProps = {
  monthExpense: number;
};

const DashboardPage: NextPage<DashboardPageProps> = ({ monthExpense }) => {
  const session = useSession();

  return (
    <Box minH="100vh" p="5">
      <Heading>Dashboard</Heading>

      <Text>Welcome, {session?.user?.email}</Text>

      <DashboardCard
        month={"November"}
        monthIncome={3500}
        monthExpense={monthExpense}
        totalBalance={1500}
      />
    </Box>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps<
  DashboardPageProps
> = async (context) => {
  const supabase = createServerSupabaseClient<Database>(context);

  const { session } = await getServerSession(supabase);
  const { usersExpensesValues } = await getUsersExpensesValues(supabase);

  return {
    props: {
      initialSession: session,
      user: session?.user,
      monthExpense: usersExpensesValues.reduce((a, b) => a + b.value, 0),
    },
  };
};
