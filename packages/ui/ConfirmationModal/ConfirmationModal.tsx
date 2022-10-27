import { FC, ReactNode } from "react";
import { Button, HStack } from "@chakra-ui/react";
import { CustomModal } from "../CustomModal";
import { ModalWithoutChildren } from "../types/moda";

type ConfirmationModalProps = {
  onConfirm: () => void;
  onReject: () => void;
  modalTitle?: string;
  children?: ReactNode;
} & ModalWithoutChildren;

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  onConfirm,
  onReject,
  modalTitle = "Are you sure ?",
  children,
  ...rest
}) => {
  const handleChoice = (func: () => void) => {
    rest.onClose();
    func();
  };

  return (
    <CustomModal modalTitle={modalTitle} {...rest}>
      <>
        {children}
        <HStack justifyContent={"flex-end"}>
          <Button colorScheme={"green"} onClick={() => handleChoice(onConfirm)}>
            Yes
          </Button>
          <Button colorScheme={"red"} onClick={() => handleChoice(onReject)}>
            No
          </Button>
        </HStack>
      </>
    </CustomModal>
  );
};
