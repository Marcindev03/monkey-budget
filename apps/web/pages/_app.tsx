import type { AppProps } from "next/app";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

import { useState } from "react";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";

import { wrapper } from "../app/store";

import "@fontsource/raleway/100.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

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
