import { createSlice } from "@reduxjs/toolkit";
import { updateCategory } from "./reducer";
const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    categories: {},
  },
  reducers: {
    updateCategory,
  },
});
export const categoriesAction = categoriesSlice.actions;

export default categoriesSlice;
