import { createSlice } from "@reduxjs/toolkit";
import { markPaid, deleteBill, updateBill, addBill } from "./reducers";

// const initState = JSON.parse(localStorage.getItem("bills"));

const billSlice = createSlice({
  name: "billDetails",
  initialState:
    // initState,
    {
      bills: [
        {
          id: 1,
          description: "Dominoes",
          category: "FoodNDining",
          amount: "430",
          date: "01-02-2020",
          paid: false,
        },
        {
          id: 2,
          description: "Car wash",
          category: "utility",
          amount: "500",
          date: "01-06-2020",
          paid: false,
        },
        {
          id: 3,
          description: "Amazon",
          category: "shopping",
          amount: "2030",
          date: "01-07-2020",
          paid: false,
        },
        {
          id: 4,
          description: "House rent",
          category: "Food & Dining",

          amount: "35900",
          date: "01-03-2020",
          paid: false,
        },
        {
          id: 5,
          description: "Tuition",
          category: "education",
          amount: "2200",
          date: "01-12-2020",
          paid: false,
        },
        {
          id: 6,
          description: "Laundry",
          category: "Personal Care",
          amount: "320",
          date: "01-14-2020",
          paid: false,
        },
        {
          id: 7,
          description: "Vacation",
          category: "Travel",
          amount: "3430",
          date: "01-18-2020",
          paid: false,
        },
      ],
    },

  reducers: {
    markPaid,
    deleteBill,
    updateBill,
    addBill,
  },
});
export const billActions = billSlice.actions;
export default billSlice;
