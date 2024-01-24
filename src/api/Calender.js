import { api } from "./API";

export const getTodosCalFromDateAPI = async (dateId, userId) => {
  const url = `/getTodosCalFromDate?dateId=${dateId}&userId=${userId}`;
  return await api("calender").get(url);
};

export const addTodosCalOfDateAPI = async (form) => {
  const url = "/addTodosCalOfDate";
  return await api("calender").post(url, form);
};

export const addTodoCalAPI = async (form) => {
  const url = "/addTodoCal";
  return await api("calender").post(url, form);
};

export const editTodoCalAPI = async (form) => {
  const url = "/editTodoCal";
  return await api("calender").patch(url, form);
};

export const editFeelIdxAPI = async (form) => {
  const url = "/editFeelIdx";
  return await api("calender").patch(url, form);
};

export const deleteTodoCalAPI = async (id) => {
  const url = `/deleteTodoCal?id=${id}`;
  return await api("calender").delete(url);
};
