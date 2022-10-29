export const updateBudget = (state, action) => {
  state.budget = Number(action.payload);
};
