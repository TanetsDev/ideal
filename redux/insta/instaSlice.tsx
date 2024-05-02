import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InstaSlice {
  data: any;
  error: string | null;
  isLoading: boolean;
}

const initialState: InstaSlice = {
  data: null,
  error: null,
  isLoading: false,
};

export const instaSlice = createSlice({
  name: "insta",
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

export const { setData, setError, setLoading } = instaSlice.actions;

export default instaSlice.reducer;
