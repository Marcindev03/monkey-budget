import React, { FC } from "react";
import { ModalWithoutChildren } from "../../types/modal";
import { TypeOfAction } from "../../types/action";
import { CustomModal } from "../common/UI/CustomModal";
import { CategoriesAddForm } from "./CategoriesAddForm";
import { CategoriesEditForm } from "./CategoriesEditForm";

type CategoriesModalProps = {
  modalTitle: string;
  type: TypeOfAction;
} & ModalWithoutChildren;

export const CategoriesModal: FC<CategoriesModalProps> = (props) => {
  const { modalTitle, type, onClose } = props;

  return (
    <CustomModal {...props} modalTitle={modalTitle}>
      {type === "add" ? (
        <CategoriesAddForm onFormSubmit={onClose} />
      ) : (
        <CategoriesEditForm onFormSubmit={onClose} />
      )}
    </CustomModal>
  );
};

export default CategoriesModal;
