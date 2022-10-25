import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import IncomesAddForm from "../IncomesForm/IncomesAddForm";

export const IncomesAddModal: FC<Omit<ModalProps, "children">> = ({
  onClose,
  isOpen,
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Income</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <IncomesAddForm onFormSubmit={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default IncomesAddModal;
