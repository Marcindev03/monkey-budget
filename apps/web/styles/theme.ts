import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "white",
        backgroundColor: "blackAlpha.800",
      },
    },
  },
});
