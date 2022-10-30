import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AppState } from "../../app/store";
import { CATEGORIES } from "../../mocks/data";
import { Category } from "../../types/category";

const categoriesAdapter = createEntityAdapter<Category>({});
const emptyInitialState = categoriesAdapter.getInitialState({
  pickedCategoryId: "",
});
const filledState = categoriesAdapter.upsertMany(emptyInitialState, CATEGORIES);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: filledState,
  reducers: {
    addCategory: categoriesAdapter.addOne,
    updateCategory(state, action: PayloadAction<{ name: string }>) {
      categoriesAdapter.updateOne(state, {
        id: state.pickedCategoryId,
        changes: action.payload,
      });
    },
    deleteCategory(state) {
      categoriesAdapter.removeOne(state, state.pickedCategoryId);
    },
    setPickedCategoryId(state, action: PayloadAction<string>) {
      state.pickedCategoryId = action.payload;
    },
  },
});

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
} = categoriesAdapter.getSelectors<AppState>((state) => state.categories);

export const selectEditedCategory = (state: AppState) =>
  categoriesAdapter
    .getSelectors()
    .selectById(state.categories, state.categories.pickedCategoryId);

export const getPickedCategoryId = (state: AppState) =>
  state.categories.pickedCategoryId;

export const {
  addCategory,
  updateCategory,
  deleteCategory,
  setPickedCategoryId,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
