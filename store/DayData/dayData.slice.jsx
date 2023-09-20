import { createSlice } from "@reduxjs/toolkit";

import { getDay, postDay, deleteDay } from "./dayData.operations";

const handlePending = (state) => {
  state.isLoading = "pending";
};

const handleRejected = (state, action) => {
  state.isLoading = "false";
  state.error = action.payload;
};

const initialState = {
  day: {
    date: "",
    products: [],
    daily: {
      left: 0,
      consumed: 0,
      total: 0,
      normal: 0,
    },
    user: "",
  },
  isLoading: false,
  error: null,
};

const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    restoreDay: (state, action) => {
      state.day = initialState.day;
    },
    updateDay: (state, action) => {
      state.day = action.payload;
    },
    addProduct: (state, action) => {
      // ?This validate if product exists but i dont know if is necesary
      // const productExist = state.day.products.find(
      //   (product) => product._id === action.payload._id
      // );
      // if (productExist) return;

      state.day.products.push(action.payload);
    },
  },
  extraReducers: {
    //* GET DAY
    [getDay.pending]: handlePending,
    [getDay.fulfilled]: (state, action) => {
      //si no se encontro dia se regresa al estado inicial
      if (!action.payload) {
        state.day = initialState.day;
        state.isLoading = false;
        return;
      }
      //si se encontro dia se actualiza el estado
      state.day = action.payload;
      state.isLoading = false;
    },
    [getDay.rejected]: handleRejected,
    //* POST DAY
    [postDay.pending]: handlePending,
    [postDay.fulfilled]: (state, action) => {
      state.day = action.payload;
      state.isLoading = false;
    },
    [postDay.rejected]: handleRejected,
    //* DELETE DAY
    [deleteDay.pending]: handlePending,
    [deleteDay.fulfilled]: (state, action) => {

      state.day = action.payload;
      state.isLoading = false;
    },
    [deleteDay.rejected]: handleRejected,
  },
});

export const dayReducer = daySlice.reducer;
export const dayActions = daySlice.actions;
