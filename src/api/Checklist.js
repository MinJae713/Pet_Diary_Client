import { api } from "./API";

export const addTodoCheckAPI = async (form) => {
  const url = "/addTodoCheck";
  return await api("checklist").post(url, form);
};

export const delelteTodoCheckAPI = async (id, userId, writeDate) => {
  const url = `/deleteTodoCheck?todoId=${id}&userId=${userId}&writeDate=${writeDate}`;
  return await api("checklist").delete(url);
};

export const toggleTodoCheckAPI = async (id, userId, writeDate) => {
  const url = `/toggleTodoCheck?todoId=${id}&userId=${userId}&writeDate=${writeDate}`;
  return await api("checklist").get(url);
};

export const loadTodosCheckAPI = async (userId, writeDate) => {
  const url = `/loadTodosCheck?userId=${userId}&writeDate=${writeDate}`;
  return await api("checklist").get(url);
};
