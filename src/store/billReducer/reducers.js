export const markPaid = (state, action) => {
  const id = action.payload.id;
  const paid = action.payload.paid;
  state.bills.forEach((item) => {
    if (item.id === id) {
      item.paid = paid;
    }
  });
};
export const deleteBill = (state, action) => {
  const id = action.payload;
  const temp = state.bills.filter((item) => item.id !== id);
  state.bills = temp;
};
export const updateBill = (state, action) => {
  const id = action.payload.id;
  const newData = action.payload.data;

  const temp = state.bills.map((item) => {
    if (item.id === id) {
      item.description = newData.description;
      item.category = newData.category;
      item.amount = newData.amount;
      item.date = newData.date;
      item.paid = newData.paid;
    }
    return item;
  });

  state.bills = temp;
};

export const addBill = (state, action) => {
  const data = action.payload;
  state.bills.push(data);
};
