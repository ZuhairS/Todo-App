
export const allTodos = (state) => {
  const newArr = [];
  Object.keys(state.todos).forEach(key => {
    newArr[parseInt(key) - 1] = state.todos[key];
  });
  return newArr;
};
