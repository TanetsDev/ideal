import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
  data: any;
  error: string | null;
  isLoading: boolean;
}

const initialState: BannerState = {
  data: null,
  error: null,
  isLoading: false,
};

export const bannerSlice = createSlice({
  name: "banner",
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

export const { setData, setError, setLoading } = bannerSlice.actions;

export default bannerSlice.reducer;
