import { createSlice } from "@reduxjs/toolkit";

export type CartItems = {
  id: number;
  name: string;
  price: number;
  size: number[];
  img: string;
  color: string;
  quantity: number;
};

const initialState: { cartItems: CartItems[] } = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
