import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./billReducer";
import categoriesSlice from "./categoriesReducer";
import userDetailsSlice from "./userDetails";

const store = configureStore({
  reducer: {
    bill: billSlice.reducer,
    categories: categoriesSlice.reducer,
    userDetails: userDetailsSlice.reducer,
  },
});
export default store;
