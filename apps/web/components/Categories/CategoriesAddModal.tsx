import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { CategoriesAddForm } from "./CategoriesAddForm";

export const CategoriesAddModal: FC<Omit<ModalProps, "children">> = ({
  onClose,
  isOpen,
  ...rest
}) => (
  <Modal isOpen={isOpen} onClose={onClose} {...rest}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add Category</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <CategoriesAddForm onFormSubmit={onClose} />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default CategoriesAddModal;
