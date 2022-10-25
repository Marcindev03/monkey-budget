import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";
import { CATEGORIES } from "../../mocks/data";
import { Category } from "../../types/category";

const categoriesAdapter = createEntityAdapter<Category>({});
const emptyInitialState = categoriesAdapter.getInitialState();
const filledState = categoriesAdapter.upsertMany(emptyInitialState, CATEGORIES);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: filledState,
  reducers: {
    categoryAdded: categoriesAdapter.addOne,
  },
});

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoriesAdapter.getSelectors<AppState>((state) => state.categories);

export const { categoryAdded } = categoriesSlice.actions;

export default categoriesSlice.reducer;
