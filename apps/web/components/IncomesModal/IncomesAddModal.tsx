import React, { FC } from "react";
import { ModalWithoutChildren } from "../../types/modal";
import { CustomModal } from "../common/UI/CustomModal";
import IncomesAddForm from "../IncomesForm/IncomesAddForm";

export const IncomesAddModal: FC<ModalWithoutChildren> = (props) => (
  <CustomModal {...props} modalTitle="Add Income">
    <IncomesAddForm onFormSubmit={props.onClose} />
  </CustomModal>
);

export default IncomesAddModal;
