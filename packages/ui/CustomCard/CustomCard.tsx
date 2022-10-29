import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export type CustomCardProps = BoxProps;

export const CustomCard: FC<CustomCardProps> = ({ children, ...rest }) => {
  return (
    <Box
      rounded={"16"}
      border="2px"
      shadow="lg"
      p="4"
      _hover={{ shadow: "xl" }}
      {...rest}
    >
      {children}
    </Box>
  );
};
