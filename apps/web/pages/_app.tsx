import type { AppProps } from "next/app";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { wrapper } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultSeo
        defaultTitle="Monkey Budget - Manage Your Finance"
        titleTemplate="Monkey Budget | %s"
      />
      <Box p="4">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
