import { billActions } from "./store/billReducer";
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

export const calculateCanBePaid = () => {
  const dispatch = store.dispatch;
  const { bills } = store.getState().bill;
  const { budget } = store.getState().userDetails;
  const table = [];
  for (let i = 0; i <= bills.length; i++) {
    table.push(Array(Number(budget) + 1).fill(0));
  }

  bills.forEach((item, index) => {
    for (let cap = 1; cap <= Number(budget); cap++) {
      const preRow = table[index][cap];
      if (!item.paid) {
        if (Number(item.amount) <= cap) {
          table[index + 1][cap] = Math.max(
            preRow,
            Number(item.amount) + table[index][cap - Number(item.amount)]
          );
        } else {
          table[index + 1][cap] = preRow;
        }
      }
    }
  });

  var solution = [];
  var cap = Number(budget);
  for (let i = bills.length; i > 0; i--) {
    if (table[i][cap] !== table[i - 1][cap] && bills[i - 1].paid === false) {
      solution.push(bills[i - 1]);
      cap -= Number(bills[i - 1].amount);
    }
  }
  dispatch(billActions.updateSelectedBillsToPay(solution));
};
