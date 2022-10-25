import { Button, Input, VStack } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { categoryAdded } from "../../features/categories/categoriesSlice";
import { useForm } from "react-hook-form";
import { CustomFormControl } from "../common";

type CategoriesAddFormProps = {
  onFormSubmit?: () => void;
};

type CategoriesAddFormFormData = {
  name: string;
};

// TODO select color input
export const CategoriesAddForm: FC<CategoriesAddFormProps> = ({
  onFormSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const isButtonDisabled = errors.name;

  const dispatch = useDispatch();

  const handleFormSubmit = ({ name }: CategoriesAddFormFormData) => {
    dispatch(categoryAdded({ id: nanoid(), name, color: "white" }));

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

export default CategoriesAddForm;
