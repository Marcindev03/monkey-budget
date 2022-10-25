import type { NextPage } from "next";
import NextLink from "next/link";
import { Text, Heading, SimpleGrid, Link } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  return (
    <>
      <Heading>Monkey Budget</Heading>

      <SimpleGrid columns={2} w="xl" gap="6">
        <NextLink href="/expenses" passHref>
          <Link>Expenses</Link>
        </NextLink>
        <NextLink href="/incomes" passHref>
          <Link>Incomes</Link>
        </NextLink>
        <NextLink href="/categories" passHref>
          <Link>Categories</Link>
        </NextLink>
      </SimpleGrid>
    </>
  );
};

export default IndexPage;
