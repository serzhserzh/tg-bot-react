import { createSlice } from "@reduxjs/toolkit";

export type CartItems = {
  id: number;
  name: string;
  price: number;
  size: number[];
  img: string;
  color: string[];
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
    upQuantity(state, action) {
      const itemFind = state.cartItems.find((i) => i.id === action.payload);
      if (itemFind && itemFind.quantity < 10) {
        itemFind.quantity++;
      }
    },
    downQuantity(state, action) {
      const itemFind = state.cartItems.find((i) => i.id === action.payload);
      if (itemFind && itemFind.quantity > 1) {
        itemFind.quantity--;
      }
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  upQuantity,
  downQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
