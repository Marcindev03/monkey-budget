import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const IndexPage: NextPage = () => {
  const router = useRouter();

  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.push("/user/dashboard");
    }
  }, [session]);

  return (
    <Box minH="100vh" p="5">
      <Heading fontWeight={"semibold"}>Monkey Budget</Heading>

      <RegisterForm supabase={supabase} />
    </Box>
  );
};

export default IndexPage;
