import React, { FC } from "react";
import { ModalWithoutChildren } from "../../types/modal";
import { TypeOfAction } from "../../utils";
import { CustomModal } from "../common/UI/CustomModal";
import { IncomesForm } from "./IncomesForm";

type IncomesModalProps = {
  modalTitle: string;
  type: TypeOfAction;
} & ModalWithoutChildren;

export const IncomesModal: FC<IncomesModalProps> = (props) => {
  const { modalTitle, type, onClose } = props;

  return (
    <CustomModal {...props} modalTitle={modalTitle}>
      <IncomesForm type={type} onFormSubmit={onClose} />
    </CustomModal>
  );
};

export default IncomesModal;
