import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../../features/incomes/incomesSlice";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { CustomFormControl } from "../common";
import { FieldValues, useForm } from "react-hook-form";

type IncomesAddFormProps = {
  onFormSubmit?: () => void;
};

type IncomesAddFormFormData = {
  amout: number;
  description: string;
};

export const IncomesAddForm: FC<IncomesAddFormProps> = ({ onFormSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const handleFormSubmit = (data: FieldValues) => {
    const { amout, description } = data as IncomesAddFormFormData;

    dispatch(addIncome(amout, description, date));

    onFormSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack>
        <CustomFormControl
          labelTitle="Amout"
          isInvalid={Boolean(errors.amout)}
          errorMessage={errors.amout?.message as string}
        >
          <Input
            type={"number"}
            {...register("amout", {
              required: { value: true, message: "Amout is required" },
              min: { value: 0.01, message: "Amout must be at least 0.01" },
            })}
          />
        </CustomFormControl>
        <CustomFormControl labelTitle="Description">
          <Textarea {...register("description")} />
        </CustomFormControl>
        <CustomFormControl labelTitle="Date">
          <SingleDatepicker date={date} onDateChange={setDate} />
        </CustomFormControl>
        <Button colorScheme={"green"} type="submit" isLoading={isSubmitting}>
          Save
        </Button>
      </VStack>
    </form>
  );
};

export default IncomesAddForm;
