import { Text, VStack } from "@chakra-ui/react";
import { SupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { FC } from "react";

type RegisterFormProps = {
  supabase: SupabaseClient<any, "public", any>;
};

export const RegisterForm: FC<RegisterFormProps> = ({ supabase }) => {
  return (
    <VStack mt="20">
      <Text fontSize={"xl"} textAlign="center">
        Start your journey
      </Text>

      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </VStack>
  );
};
