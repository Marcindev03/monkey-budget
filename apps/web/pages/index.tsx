import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const IndexPage: NextPage = () => {
  const supabase = useSupabaseClient();

  return (
    <Box minH="100vh" p="5">
      <Heading fontWeight={"semibold"}>Monkey Budget</Heading>

      <RegisterForm supabase={supabase} />
    </Box>
  );
};

export default IndexPage;
