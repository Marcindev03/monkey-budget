import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";
import { EXPENSES } from "../../mocks/data";

import type { Expense } from "../../types/expense";

const expensesAdapter = createEntityAdapter<Expense>({});
const emptyInitialState = expensesAdapter.getInitialState();
const filledState = expensesAdapter.upsertMany(emptyInitialState, EXPENSES);

const expenseSlice = createSlice({
  name: "expenses",
  initialState: filledState,
  reducers: {
    addExpense: expensesAdapter.addOne,
  },
});

export const { selectAll: selectAllExpenses } =
  expensesAdapter.getSelectors<AppState>((state) => state.expenses);

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
