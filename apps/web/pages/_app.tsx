import type { AppProps } from "next/app";

import { wrapper } from "../app/store";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box p="4">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
