import { createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Income } from "../../types/income";
import { AppState } from "../../app/store";
import { INCOMES } from "../../mocks/data";

const incomesAdapter = createEntityAdapter<Income>();
const emptyInitialState = incomesAdapter.getInitialState({
  editIncomeId: "",
});
const filledState = incomesAdapter.upsertMany(emptyInitialState, INCOMES);

const incomesSlice = createSlice({
  name: "incomes",
  initialState: filledState,
  reducers: {
    addIncome: {
      reducer(state, action: PayloadAction<Income>) {
        incomesAdapter.addOne(state, action.payload);
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
    setEditIncomeId(state, action: PayloadAction<string>) {
      state.editIncomeId = action.payload;
    },
    updateIncome: incomesAdapter.updateOne,
    deleteIncome: incomesAdapter.removeOne,
  },
});

export const { selectAll: selectAllIncomes } =
  incomesAdapter.getSelectors<AppState>((state) => state.incomes);

export const { addIncome, deleteIncome, updateIncome, setEditIncomeId } =
  incomesSlice.actions;

export default incomesSlice.reducer;
