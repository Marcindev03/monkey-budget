import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Heading,
  SimpleGrid,
  Link,
  useDisclosure,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import IncomesList from "../components/IncomesList/IncomesList";
import IncomesAddModal from "../components/IncomesModal/IncomesAddModal";

const IncomesPage: NextPage = () => {
  const modalControls = {
    add: useDisclosure({ defaultIsOpen: false }),
    edit: useDisclosure({ defaultIsOpen: false }),
  };

  return (
    <>
      <Heading>Monkey Budget - Incomes</Heading>

      <SimpleGrid columns={2}>
        <NextLink href="/" passHref>
          <Link> {`<<`} back</Link>
        </NextLink>
      </SimpleGrid>

      <HStack>
        <Heading size="lg">All Incomes</Heading>
        <Button variant="solid" onClick={modalControls.add.onOpen}>
          Add Income
        </Button>
      </HStack>

      <IncomesList />

      <IncomesAddModal {...modalControls.add} />
    </>
  );
};

export default IncomesPage;
