import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
  data: any;
}

const initialState: BannerState = {
  data: null,
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = bannerSlice.actions;

export default bannerSlice.reducer;
