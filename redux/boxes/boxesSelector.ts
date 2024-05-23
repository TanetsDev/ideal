import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectBoxesData = (state: RootState) => state.boxes.data;

export const selectBoxesState = createSelector(
  selectBoxesData,

  (data) => ({ data })
);

export const selectBoxTypes = (state: RootState) => state.boxes.types;

export const selectBoxTypesData = createSelector(selectBoxTypes, (types) => ({
  types,
}));
