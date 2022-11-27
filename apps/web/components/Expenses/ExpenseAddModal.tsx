import { ModalProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { CustomModal } from "../common/UI/CustomModal";
import ExpenseAddForm from "./ExpenseAddForm";

export const ExpensesAddModal: FC<Omit<ModalProps, "children">> = (props) => {
  return (
    <CustomModal {...props} modalTitle="Add Expense" size="full">
      <ExpenseAddForm onFormSubmit={props.onClose} />
    </CustomModal>
  );
};

export default ExpensesAddModal;
