import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectOrdersData = (state: RootState) => state.orders.data;

export const selectIsLoading = (state: RootState) => state.orders.isLoading;

export const selectOrdersState = createSelector(
  selectOrdersData,

  (data) => ({ data })
);
