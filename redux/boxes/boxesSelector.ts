import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectBoxesData = (state: RootState) => state.boxes.data;

export const selectBoxesState = createSelector(
  selectBoxesData,

  (data) => ({ data })
);
