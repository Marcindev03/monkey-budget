import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllIncomes,
  selectEditIncome,
  updateIncome,
} from "../../features/incomes/incomesSlice";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { CustomFormControl } from "../common";
import { FieldValues, useForm } from "react-hook-form";
import { TypeOfAction } from "../../types/action";

type IncomesEditFormProps = {
  type: TypeOfAction;
  onFormSubmit?: () => void;
};

type IncomesEditFormFormData = {
  amout: number;
  description: string;
};

export const IncomesEditForm: FC<IncomesEditFormProps> = ({
  type,
  onFormSubmit,
}) => {
  const incomes = useSelector(selectAllIncomes);
  const editIncomeId = useSelector(selectEditIncome);
  const income = incomes.find((income) => income.id === editIncomeId);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      amout: income?.value,
      description: income?.description,
    },
  });

  const [date, setDate] = useState(new Date(income?.date ?? Date.now()));

  const dispatch = useDispatch();

  const handleFormSubmit = (data: FieldValues) => {
    const { amout, description } = data as IncomesEditFormFormData;

    dispatch(
      updateIncome({
        id: editIncomeId,
        changes: {
          value: amout,
          description: description,
          date: date.toISOString(),
        },
      })
    );

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

export default IncomesEditForm;
