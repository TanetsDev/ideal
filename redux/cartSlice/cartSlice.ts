import { BoxMarkerType } from "@/types/products.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export interface AddToCartPayload {
  _id: string;
  title: { _key: string; value: string }[] | string;
  price: number;
  person: number;
  imageUrls: string | StaticImageData[];
  type: BoxMarkerType;
  count: number;
}
export interface ICartBoxWeight extends Omit<AddToCartPayload, "type"> {
  weight: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as AddToCartPayload[],
  reducers: {
    addToCart(state, action: PayloadAction<AddToCartPayload>) {
      const { _id } = action.payload;
      const existingItem = state.find((item) => item._id === _id);
      if (!existingItem) {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      return state.filter((item) => item._id !== itemId);
    },
    changeItemCount(
      state,
      action: PayloadAction<{ _id: string; delta: number }>
    ) {
      const { _id, delta } = action.payload;
      const existingItem = state.find((item) => item._id === _id);
      if (existingItem) {
        const newCount = Math.max(existingItem.count + delta, 1);
        existingItem.count = newCount;
      }
    },
  },
});

export const { addToCart, removeCart, changeItemCount } = cartSlice.actions;
export default cartSlice.reducer;
