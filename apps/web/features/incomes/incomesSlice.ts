import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Income } from "../../types/income";
import { AppState } from "../../app/store";
import { INCOMES } from "../../mocks/data";

interface IncomesState {
  incomes: Income[];
}

const initialState: IncomesState = {
  incomes: INCOMES,
};

const incomesSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addIncome: {
      reducer(state, action: PayloadAction<Income>) {
        state.incomes.push(action.payload);
      },
      prepare(value: number, description: string, date: Date) {
        return {
          payload: {
            id: nanoid(),
            value,
            date: date.toISOString(),
            description,
          },
        };
      },
    },
  },
});

export const selectAllIncomes = (state: AppState) => state.incomes.incomes;

export const { addIncome } = incomesSlice.actions;

export default incomesSlice.reducer;
