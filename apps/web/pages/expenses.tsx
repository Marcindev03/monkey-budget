import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Heading,
  SimpleGrid,
  Link,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ExpensesList } from "../components/Expenses";
import ExpensesAddModal from "../components/Expenses/ExpenseAddModal";

const ExpensesPage: NextPage = () => {
  const modalControls = {
    add: useDisclosure({ defaultIsOpen: false }),
    edit: useDisclosure({ defaultIsOpen: false }),
  };

  return (
    <>
      <Heading>Monkey Budget - Expenses</Heading>

      <SimpleGrid columns={2}>
        <NextLink href="/" passHref>
          <Link> {`<<`} back</Link>
        </NextLink>
      </SimpleGrid>

      <Button colorScheme={"red"} my="4" onClick={modalControls.add.onOpen}>
        Add Expense
      </Button>

      <ExpensesList />

      <ExpensesAddModal {...modalControls.add} />
    </>
  );
};

export default ExpensesPage;
