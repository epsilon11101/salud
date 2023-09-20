import axios from "axios";
import Cookies from "js-cookie";

export const configureAxios = () => {
  axios.defaults.baseURL = "http://localhost:8081/api";
};

//ADD JWT TOKEN TO AXIOS HEADER
export const setAuthHeader = (token) => {
  axios.defaults.headers.common["x-token"] = `${token}`;
};

//REMOVE JWT FROM AUTH HEADER
export const unsetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
  localStorage.removeItem("token");
  Cookies.remove("token");
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
  createCookie(token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

const createCookie = (token) => {
  Cookies.set("token", token, { expires: 7 });
};
