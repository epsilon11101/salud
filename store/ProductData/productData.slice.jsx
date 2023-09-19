import { createSlice } from "@reduxjs/toolkit";

import { getProducts } from "./productData.operations";

const handlePending = (state) => {
  state.isLoading = "pending";
};

const handleRejected = (state, action) => {
  state.isLoading = "false";
  state.error = action.payload;
};

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    // GET PRODUCTS
    [getProducts.pending]: handlePending,
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [getProducts.rejected]: handleRejected,
  },
});

export const productReducer = productSlice.reducer;
