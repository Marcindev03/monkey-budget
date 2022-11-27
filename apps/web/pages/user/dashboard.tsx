import type { GetServerSideProps, NextPage } from "next";
import { Box, Heading, Text, useDisclosure, Button } from "@chakra-ui/react";
import { useSession } from "@supabase/auth-helpers-react";
import { DashboardCard } from "ui";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  Database,
  getServerSession,
  getUsersExpensesValues,
  getUsersIncomesValues,
} from "core";
import { ExpensesAddModal } from "../../components/Expenses/ExpenseAddModal";
import { IncomesAddModal } from "../../components/IncomesModal";
import { ChoseModal } from "../../components/ChoseModal";

type DashboardPageProps = {
  monthExpense: number;
  monthIncome: number;
};

const DashboardPage: NextPage<DashboardPageProps> = ({
  monthExpense,
  monthIncome,
}) => {
  const session = useSession();

  const modalControls = {
    chose: useDisclosure({ defaultIsOpen: false }),
    income: useDisclosure({ defaultIsOpen: false }),
    expense: useDisclosure({ defaultIsOpen: false }),
  };

  return (
    <Box minH="100vh" p="5">
      <Heading>Dashboard</Heading>

      <Text>Welcome, {session?.user?.email}</Text>

      <DashboardCard
        month={"November"}
        monthIncome={monthIncome}
        monthExpense={monthExpense}
        totalBalance={monthIncome - monthExpense}
      />

      <ChoseModal
        onFirstOpen={modalControls.income.onOpen}
        onSecondOpen={modalControls.expense.onOpen}
        {...modalControls.chose}
      />

      <IncomesAddModal {...modalControls.income} />
      <ExpensesAddModal {...modalControls.expense} />

      <Button
        colorScheme={"blue"}
        position="fixed"
        bottom="20"
        right="5"
        size="lg"
        rounded={"full"}
        onClick={modalControls.chose.onOpen}
      >
        Add
      </Button>

      {/* TODO bottom navigation */}
    </Box>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps<
  DashboardPageProps
> = async (context) => {
  const supabase = createServerSupabaseClient<Database>(context);

  const [{ session }, { usersExpensesValues }, { usersIncomesValues }] =
    await Promise.all([
      getServerSession(supabase),
      getUsersExpensesValues(supabase),
      getUsersIncomesValues(supabase),
    ]);

  return {
    props: {
      initialSession: session,
      user: session?.user,
      monthExpense: usersExpensesValues.reduce((a, b) => a + b.value, 0),
      monthIncome: usersIncomesValues.reduce((a, b) => a + b.value, 0),
    },
  };
};
