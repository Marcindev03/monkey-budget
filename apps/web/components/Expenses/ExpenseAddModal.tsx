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
import ExpenseAddForm from "./ExpenseAddForm";

export const ExpensesAddModal: FC<Omit<ModalProps, "children">> = ({
  onClose,
  isOpen,
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Expense</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ExpenseAddForm onFormSubmit={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ExpensesAddModal;
