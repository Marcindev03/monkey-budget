import { nanoid } from "@reduxjs/toolkit";
import { Category } from "../types/category";
import { Expense } from "../types/expense";
import { Income } from "../types/income";

export const CATEGORIES: Category[] = [
  {
    id: nanoid(),
    name: "Food",
    color: "green",
  },
  {
    id: nanoid(),
    name: "Transport",
    color: "blue",
  },
  {
    id: nanoid(),
    name: "Beer",
    color: "gray",
  },
];

export const INCOMES: Income[] = [
  {
    id: nanoid(),
    value: 1000,
    description: "Salary",
    date: new Date().toISOString(),
  },
  {
    id: nanoid(),
    value: 200,
    description: "Bonus",
    date: new Date().toISOString(),
  },
  {
    id: nanoid(),
    value: 150,
    description: "Investment",
    date: new Date().toISOString(),
  },
];

export const EXPENSES: Expense[] = [
  {
    id: nanoid(),
    value: 50,
    categoryId: CATEGORIES[0].id,
    date: new Date().toISOString(),
    description: "FOOD",
  },
  {
    id: nanoid(),
    value: 20,
    categoryId: CATEGORIES[1].id,
    date: new Date().toISOString(),
    description: "Bus",
  },
  {
    id: nanoid(),
    value: 30,
    categoryId: CATEGORIES[1].id,
    date: new Date().toISOString(),
    description: "Train",
  },
];
