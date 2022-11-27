import { FC } from "react";
import { VStack, Text, Button, HStack } from "@chakra-ui/react";
import { ModalWithoutChildren } from "../../types/modal";
import { CustomModal } from "../common/UI/CustomModal";

type ChoseModalProps = {
  onFirstOpen: () => void;
  onSecondOpen: () => void;
} & ModalWithoutChildren;

export const ChoseModal: FC<ChoseModalProps> = ({
  onFirstOpen,
  onSecondOpen,
  ...props
}) => {
  const handleFirstOpen = () => {
    onFirstOpen();
    props.onClose();
  };

  const handleSecondOpen = () => {
    onSecondOpen();
    props.onClose();
  };

  return (
    <CustomModal {...props} size="full" modalTitle="">
      <VStack w="full" h="100vh" justifyContent={"center"} alignItems="center">
        <Text fontSize="xl">Chose entity type</Text>
        <HStack>
          <Button colorScheme={"green"} onClick={handleFirstOpen}>
            Income
          </Button>
          <Button colorScheme={"red"} onClick={handleSecondOpen}>
            Expense
          </Button>
        </HStack>
      </VStack>
    </CustomModal>
  );
};
