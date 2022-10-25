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
import { useForm } from "react-hook-form";

type ExpenseAddFormProps = {
  onFormSubmit?: () => void;
};

const ExpenseAddForm: FC<ExpenseAddFormProps> = ({ onFormSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const isButtonDisabled = errors.amout;

  const categoryRef = useRef<HTMLSelectElement>();
  const amoutRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLTextAreaElement>();

  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const categories = useSelector(selectAllCategories);

  const handleFormSubmit = () => {
    const categoryId = categoryRef?.current?.value ?? "";
    const amout = parseFloat(amoutRef?.current?.value ?? "0");
    const description = descriptionRef?.current?.value;

    const expense: Expense = {
      id: nanoid(),
      value: amout,
      categoryId: categoryId,
      date: date.toISOString(),
      description,
    };

    dispatch(addExpense(expense));

    onFormSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack>
        <CustomFormControl labelTitle="Category">
          <Select {...register("categoryId")}>
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
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
          <Textarea />
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
