import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
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
    removeRelationWithCategory(state, action: PayloadAction<string>) {
      const expenses = expensesAdapter.getSelectors().selectAll(state);
      const expensesToUpdate = expenses
        .filter(({ categoryId }) => categoryId === action.payload)
        .map((expense) => ({
          id: expense.id,
          changes: { ...expense, categoryId: "" },
        }));

      expensesAdapter.updateMany(state, expensesToUpdate);
    },
  },
});

export const { selectAll: selectAllExpenses } =
  expensesAdapter.getSelectors<AppState>((state) => state.expenses);

export const { addExpense, removeRelationWithCategory } = expenseSlice.actions;

export default expenseSlice.reducer;
