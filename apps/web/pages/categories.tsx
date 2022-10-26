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
import { CategoriesAddModal } from "../components/Categories";
import { NextSeo } from "next-seo";

const CategoriesPage: NextPage = () => {
  const modalControls = {
    add: useDisclosure({ defaultIsOpen: false }),
    edit: useDisclosure({ defaultIsOpen: false }),
  };

  return (
    <>
      <NextSeo title="Your Categories" />
      <Heading>Monkey Budget - Categories</Heading>

      <SimpleGrid columns={2}>
        <NextLink href="/" passHref>
          <Link> {`<<`} back</Link>
        </NextLink>
      </SimpleGrid>

      <HStack>
        <Heading size="lg">All Categories</Heading>
        <Button colorScheme={"purple"} onClick={modalControls.add.onOpen}>
          Add Category
        </Button>
      </HStack>

      <CategoriesList />

      <CategoriesAddModal {...modalControls.add} />
    </>
  );
};

export default CategoriesPage;
