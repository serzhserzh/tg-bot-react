import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("fetchPizzas", async () => {
  const { data } = await axios.get("https://be8239fbb54389dd.mokky.dev/items");
  return data;
});
// export interface ItemSlice {
//   id: number;
//   name: string;
//   price: number;
//   sizes: number[];
//   img: string;
// }

const initialState = [];

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, () => {})
      .addCase(fetchItems.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(fetchItems.rejected, (state) => {
        console.log("Ощибка", state);
      });
  },
});
export default itemSlice.reducer;
