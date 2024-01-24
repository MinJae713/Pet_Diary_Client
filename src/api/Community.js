import { api } from "./API";

export const getNotesAPI = async (userId, screenTitle) => {
  const url = `/getNotes?userId=${userId}&screenTitle=${screenTitle}`;
  return api("community").get(url);
};

export const submitNoteAPI = async (form) => {
  const url = `/submitNote`;
  return api("community").post(url, form);
};

export const editNoteAPI = async (form) => {
  const url = `/editNote`;
  return api("community").patch(url, form);
};

export const deleteNoteAPI = async (id, userId) => {
  const url = `/deleteNote?id=${id}&userId=${userId}`;
  return api("community").delete(url);
};

export const getScreenTitlesAPI = async (screenType) => {
  const url = `/screenTitles?type=${screenType}`;
  return api("community").get(url);
};
