import { ModalProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ConfirmationModal } from "../ConfirmationModal";

type WarningModalProps = {
  onConfirm: () => void;
  onReject: () => void;
  modalTitle?: string;
} & ModalProps;

export const WarningModal: FC<WarningModalProps> = ({ children, ...rest }) => {
  return (
    <ConfirmationModal {...rest}>
      <Text>{children}</Text>
    </ConfirmationModal>
  );
};
