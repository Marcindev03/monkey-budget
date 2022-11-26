import type { AppProps } from "next/app";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

import { useState } from "react";
import { DefaultSeo } from "next-seo";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { wrapper } from "../app/store";

import { theme } from "../styles/theme";

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
      <ChakraProvider theme={theme}>
        <DefaultSeo
          defaultTitle="Monkey Budget - Manage Your Finance"
          titleTemplate="Monkey Budget | %s"
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
}

export default wrapper.withRedux(MyApp);
