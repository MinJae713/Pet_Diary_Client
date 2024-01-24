export const addTodoCheckForm = (id, textValue, checked, writeDate, userId) => {
  return {
    newTask: {
      id: id,
      textValue: textValue,
      checked: checked,
      writeDate: writeDate,
    },
    userId: userId,
  };
};
