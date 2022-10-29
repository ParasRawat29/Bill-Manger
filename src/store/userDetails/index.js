import { createSlice } from "@reduxjs/toolkit";
import { updateBudget } from "./reducer";

const budget = localStorage.getItem("budget");
const userDetailsSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    budget: budget,
  },
  reducers: {
    updateBudget,
  },
});
export const userDetailsAction = userDetailsSlice.actions;

export default userDetailsSlice;
