import { createSlice } from "@reduxjs/toolkit";
import {
  markPaid,
  deleteBill,
  updateBill,
  addBill,
  updateSelectedBillsToPay,
} from "./reducers";

const initState = JSON.parse(localStorage.getItem("bills"));

const billSlice = createSlice({
  name: "billDetails",
  initialState: {
    bills: initState,
    selectedBillsToPay: [],
  },

  reducers: {
    markPaid,
    deleteBill,
    updateBill,
    addBill,
    updateSelectedBillsToPay,
  },
});
export const billActions = billSlice.actions;
export default billSlice;
