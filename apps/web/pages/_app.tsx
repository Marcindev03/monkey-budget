import type { AppProps } from "next/app";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { wrapper } from "../app/store";
import { useState } from "react";

type MyAppProps = {
  initialSession: Session;
};

function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider>
        <DefaultSeo
          defaultTitle="Monkey Budget - Manage Your Finance"
          titleTemplate="Monkey Budget | %s"
        />
        <Box p="4">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </SessionContextProvider>
  );
}

export default wrapper.withRedux(MyApp);
