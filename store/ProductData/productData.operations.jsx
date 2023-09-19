import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//GET @/search query:searchTerm

export const getProducts = createAsyncThunk(
  "/search/product",
  async (searchTerm, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/search/product?searchTerm=${searchTerm}`
      );
      return data.results;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("error in get products");
    }
  }
);
