import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

type CardProps = {
  children: React.ReactNode;
} & BoxProps;

export const Card: FC<CardProps> = ({ children, ...rest }) => (
  <Box w="full" p="4" bgColor="whiteAlpha.50" rounded={"10"} {...rest}>
    {children}
  </Box>
);
