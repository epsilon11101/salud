import { createSlice } from "@reduxjs/toolkit";
import {
  updateDailyRate,
  getDailyRate,
  signUp,
  logIn,
  logOut,
} from "./userData.operations";

const handlePending = (state) => {
  state.isLoading = "pending";
};

const handleRejected = (state, action) => {
  state.isLoading = "false";
  state.error = action.payload;
};

const initialState = {
  user: {
    name: "",
    email: "",
    userData: {
      weight: 0,
      desiredWeight: 0,
      groupBlood: "1",
      height: 0,
      age: 0,
      dailyRate: 0,
      notAllowedProducts: [],
    },
    token: "",
    uid: "",
    isAuth: false,
  },

  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    // GET DAILY RATE FOR USERS WITHOUT ACCOUNT
    [getDailyRate.pending]: handlePending,
    [getDailyRate.fulfilled]: (state, action) => {
      state.user.userData = action.payload;
      state.isLoading = false;
    },
    [getDailyRate.rejected]: handleRejected,
    //
    // UPDATE DAILY RATE
    [updateDailyRate.pending]: handlePending,
    [updateDailyRate.fulfilled]: (state, action) => {
      state.user.userData = action.payload;
      state.isLoading = false;
    },
    [updateDailyRate.rejected]: handleRejected,
    // SIGNUP
    [signUp.pending]: handlePending,
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload;

      state.isLoading = false;
    },
    [signUp.rejected]: handleRejected,
    // LOGIN
    [logIn.pending]: handlePending,
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [logIn.rejected]: handleRejected,
    // LOGOUT
    [logOut.pending]: handlePending,
    [logOut.fulfilled]: (state, action) => {
      state.user = initialState.user;
      state.isLoading = false;
    },
    [logOut.rejected]: handleRejected,
  },
});

export const userReducer = userSlice.reducer;
