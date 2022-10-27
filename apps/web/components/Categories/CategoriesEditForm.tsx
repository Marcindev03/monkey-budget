import { Button, Input, VStack } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  selectEditedCategory,
  updateCategory,
} from "../../features/categories/categoriesSlice";
import { FieldValues, useForm } from "react-hook-form";
import { CustomFormControl } from "../common";

type CategoriesEditFormProps = {
  onFormSubmit?: () => void;
};

type CategoriesEditFormFormData = {
  name: string;
};

// TODO select color input
export const CategoriesEditForm: FC<CategoriesEditFormProps> = ({
  onFormSubmit,
}) => {
  const editedCategory = useSelector(selectEditedCategory);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: editedCategory?.name ?? "",
    },
  });

  const isButtonDisabled = errors.name;

  const dispatch = useDispatch();

  const handleFormSubmit = (data: FieldValues) => {
    const { name } = data as CategoriesEditFormFormData;

    dispatch(updateCategory({ name }));

    onFormSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack>
        <CustomFormControl
          labelTitle="Name"
          isInvalid={Boolean(errors.name)}
          errorMessage={errors.name?.message as string}
        >
          <Input
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: { value: 3, message: "Minimum length is 3" },
            })}
          />
        </CustomFormControl>
        <Button
          colorScheme={"purple"}
          type="submit"
          disabled={Boolean(isButtonDisabled)}
        >
          Save
        </Button>
      </VStack>
    </form>
  );
};

export default CategoriesEditForm;
