import { categoriesAction } from "./store/categoriesReducer";
import store from "./store/rootReducer";
export const calculateCategories = () => {
  const { bills } = store.getState()?.bill;

  const dispatch = store.dispatch;
  const cat = {};
  bills &&
    bills.forEach((item) => {
      if (cat.hasOwnProperty(item.category) && !item.paid) {
        cat[item.category] = cat[item.category] + Number(item.amount);
      } else if (!cat.hasOwnProperty(item.category) && !item.paid) {
        cat[item.category] = Number(item.amount);
      } else if (cat.hasOwnProperty(item.category) && item.paid) {
      } else cat[item.category] = 0;
    });

  dispatch(categoriesAction.updateCategory(cat));
};

export const getDataMonthWise = (data) => {
  const newData = {};
  return newData;
};

export const convertObjToArray = (data) => {
  console.log(data);
  const res =
    data &&
    Object.keys(data).map((k) => ({
      name: k,
      value: Number(data[k]),
    }));

  return res;
};
