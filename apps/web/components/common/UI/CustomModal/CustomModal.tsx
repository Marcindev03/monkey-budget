import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalProps,
} from "@chakra-ui/react";
import React, { FC } from "react";

export type CustomModalProps = {
  children: React.ReactNode;
  modalTitle: string;
} & ModalProps;

export const CustomModal: FC<CustomModalProps> = (props) => {
  const { modalTitle, children } = props;

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent color="black">
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
