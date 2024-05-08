import { createSelector } from "@reduxjs/toolkit";

export const selectOrdersData = (state: any) => state.orders.data;

export const selectOrdersState = createSelector(
  selectOrdersData,

  (data) => ({ data })
);
