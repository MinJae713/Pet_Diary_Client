import { api } from "./API";

export const loginAPI = async (form) => {
  const url = "/login";
  return await api("authenticate").post(url, form);
};

export const joinAPI = async (form) => {
  const url = "/join";
  return await api("authenticate").post(url, form);
};
