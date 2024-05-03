import { createSelector } from "@reduxjs/toolkit";

export const selectBoxesData = (state: any) => state.boxes.data;

export const selectBoxesState = createSelector(
  selectBoxesData,

  (data) => ({ data })
);
