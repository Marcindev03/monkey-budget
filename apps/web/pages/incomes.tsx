import type { NextPage } from "next";
import NextLink from "next/link";
import {
  Heading,
  SimpleGrid,
  Link,
  useDisclosure,
  Button,
  HStack,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { IncomesList } from "../components/IncomesList";
import { IncomesModal } from "../components/Incomes";

const IncomesPage: NextPage = () => {
  const modalControls = {
    add: useDisclosure({ defaultIsOpen: false }),
    edit: useDisclosure({ defaultIsOpen: false }),
  };

  return (
    <>
      <NextSeo title="Your Incomes" />

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

      <IncomesList openEditModal={modalControls.edit.onOpen} />

      <IncomesModal
        modalTitle={"Add Income"}
        type={"add"}
        {...modalControls.add}
      />

      <IncomesModal
        modalTitle={"Edit Income"}
        type={"edit"}
        {...modalControls.edit}
      />
    </>
  );
};

export default IncomesPage;
