import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { selectAllCategories } from "../../features/categories/categoriesSlice";
import { addExpense } from "../../features/expenses/expensesSlice";
import { Expense } from "../../types/expense";
import { nanoid } from "@reduxjs/toolkit";
import { CustomFormControl } from "../common";
import { FieldValues, useForm } from "react-hook-form";

type ExpenseAddFormProps = {
  onFormSubmit?: () => void;
};

type ExpenseAddFormFormData = {
  categoryId: string;
  amout: number;
  description: string;
};

const ExpenseAddForm: FC<ExpenseAddFormProps> = ({ onFormSubmit }) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectAllCategories);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      categoryId: categories?.[0].id,
      amout: null,
      description: "",
    },
  });

  const [date, setDate] = useState(new Date());

  const handleFormSubmit = (data: FieldValues) => {
    const { categoryId, amout, description } = data as ExpenseAddFormFormData;

    const expense: Expense = {
      id: nanoid(),
      value: amout,
      categoryId: categoryId,
      date: date.toISOString(),
      description: description ?? "",
    };

    dispatch(addExpense(expense));

    onFormSubmit?.();
  };

  const isButtonDisabled = errors.amout;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack>
        <CustomFormControl labelTitle="Category">
          <Select {...register("categoryId")}>
            {categories.map((category) => (
              <option key={category.name} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </CustomFormControl>
        <CustomFormControl
          labelTitle="Amout"
          isInvalid={Boolean(errors.amout)}
          errorMessage={errors.amout?.message as string}
        >
          <Input
            type="number"
            {...register("amout", {
              required: { value: true, message: "Amout is required" },
              min: { value: 0.01, message: "Minimal amout is 0.01" },
            })}
          />
        </CustomFormControl>
        <CustomFormControl labelTitle="Description">
          <Textarea {...register("description")} />
        </CustomFormControl>
        <CustomFormControl labelTitle="Date">
          <SingleDatepicker date={date} onDateChange={setDate} />
        </CustomFormControl>
        <Button
          colorScheme={"green"}
          type="submit"
          isDisabled={Boolean(isButtonDisabled)}
        >
          Save
        </Button>
      </VStack>
    </form>
  );
};

export default ExpenseAddForm;
