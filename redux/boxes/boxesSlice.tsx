import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoxesState {
  data: any;
  error: string | null;
  isLoading: boolean;
}

const initialState: BoxesState = {
  data: null,
  error: null,
  isLoading: false,
};

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setError, setLoading } = boxesSlice.actions;

export default boxesSlice.reducer;
