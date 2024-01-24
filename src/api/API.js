import axios from "axios";

export const api = (path) => {
  return axios.create({
    baseURL: `http://192.168.35.53:8081/${path}`,
    withCredentials: true,
  });
};
