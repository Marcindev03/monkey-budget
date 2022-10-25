import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import incomesReducer from "../features/incomes/incomesSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import expenseReducer from "../features/expenses/expensesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      incomes: incomesReducer,
      categories: categoriesReducer,
      expenses: expenseReducer,
    },
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;

export const wrapper = createWrapper<AppStore>(makeStore);
