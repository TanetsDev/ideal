import { createSelector } from "@reduxjs/toolkit";
import { AddToCartPayload, ICartBoxWeight } from "./cartSlice";

export const selectCart = (state: any) => state.cart;

export const selectTotalPrice = createSelector(selectCart, (cart) =>
  cart.reduce((total: number, item: AddToCartPayload) => {
    return total + item.price * item.count;
  }, 0)
);

export const selectTotalWeight = createSelector(selectCart, (cart) =>
  cart.reduce((total: number, item: ICartBoxWeight) => {
    return total + item.weight * item.count;
  }, 0)
);
