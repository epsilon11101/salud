import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setAuthHeader,
  unsetAuthHeader,
  saveToken,
  getToken,
  configureAxios,
} from "../Auth/token";
import axios from "axios";

(function () {
  configureAxios();
})();

//POST @/daily
export const getDailyRate = createAsyncThunk(
  "/daily/post",
  async (body, thunkAPI) => {
    try {
      setAuthHeader(getToken());

      const { data } = await axios.post("/daily", body);
      body.dailyRate = data.dailyCalories;
      body.notAllowedProducts = data.notAllowedProducts;

      return body;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("error in post daily");
    }
  }
);

//PATCH @/daily
export const updateDailyRate = createAsyncThunk(
  "/daily/patch",
  async (body, thunkAPI) => {
    try {
      setAuthHeader(getToken());

      const { data } = await axios.patch("/daily", body);

      return data.user.userData;
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      return thunkAPI.rejectWithValue("error in patch daily");
    }
  }
);

//POST @/auth/signup
export const signUp = createAsyncThunk(
  "/auth/signup",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/signup", body);
      setAuthHeader(data.user.token);
      saveToken(data.user.token);
      data.user.isAuth = data.user.token ? true : false;

      return data.user;
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      return thunkAPI.rejectWithValue(error.response.data.errors[0].msg);
    }
  }
);

//POST @/auth/login
export const logIn = createAsyncThunk("/auth/login", async (body, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/login", body);

    setAuthHeader(data.user.token);
    saveToken(data.user.token);
    data.user.isAuth = data.user.token ? true : false;

    return data.user;
  } catch (error) {
    console.log(error.response.data.errors[0].msg);
    return thunkAPI.rejectWithValue(error.response.data.errors[0].msg);
  }
});

//POST @/auth/logout
// /api/auth/logout
export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    setAuthHeader(getToken());
    await axios.post("/auth/logout");
    unsetAuthHeader();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue("error in logout");
  }
});
