import React, { FC } from "react";
import { ModalWithoutChildren } from "../../types/modal";
import { TypeOfAction } from "../../types/action";
import { CustomModal } from "../common/UI/CustomModal";
import { IncomesAddForm } from "./IncomesAddForm";
import { IncomesEditForm } from "./IncomesEditForm";

type IncomesModalProps = {
  modalTitle: string;
  type: TypeOfAction;
} & ModalWithoutChildren;

export const IncomesModal: FC<IncomesModalProps> = (props) => {
  const { modalTitle, type, onClose } = props;

  return (
    <CustomModal {...props} modalTitle={modalTitle}>
      {type === "add" ? (
        <IncomesAddForm type={type} onFormSubmit={onClose} />
      ) : (
        <IncomesEditForm type={type} onFormSubmit={onClose} />
      )}
    </CustomModal>
  );
};

export default IncomesModal;
