import { createSelector } from "@reduxjs/toolkit";

export const selectBoxesData = (state: any) => state.boxes.data;
export const selectBoxesError = (state: any) => state.boxes.error;
export const selectBoxesLoading = (state: any) => state.boxes.isLoading;

export const selectBoxesState = createSelector(
  selectBoxesData,
  selectBoxesError,
  selectBoxesLoading,
  (data, error, isLoading) => ({ data, error, isLoading })
);
