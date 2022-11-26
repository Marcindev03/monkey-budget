import type { NextPage } from "next";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const DashboardPage: NextPage = () => {
  const supabase = useSupabaseClient();

  return (
    <Box minH="100vh" p="5">
      <Heading>User Dashboard</Heading>

      <Button onClick={() => supabase.auth.signOut()} colorScheme="red">
        Log out
      </Button>
    </Box>
  );
};

export default DashboardPage;
