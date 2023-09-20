import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader, getToken } from "../Auth/token";
import axios from "axios";

//*GET @day PARAMS:DATE
export const getDay = createAsyncThunk("/day/get", async (date, thunkAPI) => {
  try {
    setAuthHeader(getToken());
    const { data } = await axios.get(`/day/${date}`);

    return data.day;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("error in get day");
  }
});

//*POST @/day
export const postDay = createAsyncThunk("/day/post", async (body, thunkAPI) => {
  try {
    setAuthHeader(getToken());
  
    const { data } = await axios.post("/day", body);
    return data.day;
  } catch (error) {
    console.log(error.response.data);
    return thunkAPI.rejectWithValue("error in post day");
  }
});

// *DELETE @/day/:date query: {productId} params: {date}
export const deleteDay = createAsyncThunk(
  "/day/delete",
  async ({ product_id, date }, thunkAPI) => {
    try {
      setAuthHeader(getToken());
      const { data } = await axios.delete(
        `/day/${date}?product_id=${product_id}`
      );
      return data.day;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("error in delete day");
    }
  }
);
