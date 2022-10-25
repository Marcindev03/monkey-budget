import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FC } from "react";

type CustomFormControlProps = {
  isInvalid?: boolean;
  labelTitle?: string;
  errorMessage?: string;
  children: React.ReactNode;
};

export const CustomFormControl: FC<CustomFormControlProps> = ({
  isInvalid,
  labelTitle,
  errorMessage,
  children,
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{labelTitle}</FormLabel>
      {children}
      <FormErrorMessage>{isInvalid ? errorMessage : null}</FormErrorMessage>
    </FormControl>
  );
};
