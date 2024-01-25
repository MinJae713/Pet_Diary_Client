import axios from "axios";

export const api = (path) => {
  return axios.create({
    baseURL: `http://172.30.1.63:8081/${path}`,
    withCredentials: true,
  });
  // 우리집 IP : 192.168.35.53:8081
};
