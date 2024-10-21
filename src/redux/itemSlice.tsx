import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Items {
  id: number;
  name: string;
  price: number;
  sizes: number[];
  sizesCard: string;
  img: [string[]];
  colors: [string[]];
}

export const fetchItem = createAsyncThunk("fetchPizzas", async () => {
  const { data } = await axios.get("https://be8239fbb54389dd.mokky.dev/items");
  return data as Items;
});

const initialState: { items: Items[] } = {
  items: [],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export default itemSlice.reducer;
