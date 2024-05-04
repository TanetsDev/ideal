import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoxesState {
  data: any;
}

const initialState: BoxesState = {
  data: null,
};

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = boxesSlice.actions;

export default boxesSlice.reducer;
