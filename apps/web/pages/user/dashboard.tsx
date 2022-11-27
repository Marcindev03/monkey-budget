import type { GetServerSideProps, NextPage } from "next";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { DashboardCard } from "ui";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

type DashboardPageProps = {
  // TODO fetch types from database
  expenses: any;
};

const DashboardPage: NextPage<DashboardPageProps> = ({ expenses }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const supabase = createServerSupabaseClient(context);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: expenses } = await supabase.from("expenses").select("value");

  return {
    props: {
      initialSession: session,
      user: session?.user,
      expenses,
    },
  };
};
