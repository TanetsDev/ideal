import { BoxDTO, BoxTypes } from "@/types/sanityData.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoxesState {
  data: BoxDTO[] | null;
  types: BoxTypes[] | null;
}

const initialState: BoxesState = {
  data: null,
  types: null,
};

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<BoxDTO[]>) => {
      state.data = action.payload;
    },
    setTypes: (state, action: PayloadAction<BoxTypes[]>) => {
      state.types = action.payload;
    },
  },
});

export const { setData, setTypes } = boxesSlice.actions;

export default boxesSlice.reducer;
