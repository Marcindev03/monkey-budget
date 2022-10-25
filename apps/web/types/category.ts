import { ThemeTypings } from "@chakra-ui/react";

export type Category = {
  id: string;
  name: string;
  color: ThemeTypings["colorSchemes"];
};
