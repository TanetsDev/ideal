import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Box {
  id: string;
  name: string;
  price: number;
  type: string;
}

export interface BoxesState {
  boxes: Box[];
}

export const initialState: BoxesState = {
  boxes: [],
};

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    addBox: (state, action: PayloadAction<Box>) => {
      state.boxes.push(action.payload);
    },
    deleteBox: (state, action: PayloadAction<{ id: string }>) => {
      state.boxes = state.boxes.filter((box) => box.id !== action.payload.id);
    },
  },
});

export const { addBox, deleteBox } = boxesSlice.actions;
export default boxesSlice.reducer;
