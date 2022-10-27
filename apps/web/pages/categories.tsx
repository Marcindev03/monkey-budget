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
import CategoriesList from "../components/Categories/CategoriesList";
import { NextSeo } from "next-seo";
import CategoriesModal from "../components/Categories/CategoriesModal";

const CategoriesPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Your Categories" />
      <Heading>Monkey Budget - Categories</Heading>

      <SimpleGrid columns={2}>
        <NextLink href="/" passHref>
          <Link> {`<<`} back</Link>
        </NextLink>
      </SimpleGrid>

      <CategoriesList />
    </>
  );
};

export default CategoriesPage;
