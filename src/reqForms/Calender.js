export const addEditTodosCalOfDateForm = (dateId, feelIdx, userId) => {
  return {
    dateId: dateId,
    feelIdx: feelIdx,
    userId: userId,
  };
}; // addTodosCalOfDate, editFeelIdx 공용으로 사용 ㄱㄴ

export const addTodoCalForm = (id, text, dateId, userId) => {
  return {
    id: id,
    text: text,
    dateId: dateId,
    userId: userId,
  };
};

export const editTodoCalForm = (id, text) => {
  return {
    id: id,
    text: text,
  };
};
