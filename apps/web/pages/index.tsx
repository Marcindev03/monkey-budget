import type { NextPage } from "next";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { LinkedCard } from "ui";

const IndexPage: NextPage = () => {
  return (
    <>
      <Heading>Monkey Budget</Heading>

      <SimpleGrid columns={2} w="xl" gap="6" mt="4">
        <LinkedCard href="/expenses">
          <Text>Expenses</Text>
        </LinkedCard>
        <LinkedCard href="/incomes">
          <Text>Incomes</Text>
        </LinkedCard>
        <LinkedCard href="/categories">
          <Text>Categories</Text>
        </LinkedCard>
      </SimpleGrid>
    </>
  );
};

export default IndexPage;
