import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authApi } from "./authApi";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const initialState = {
  user: {
    name: null,
    phone: null,
    id: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.user.phone = payload.user.phone;
        state.user.name = payload.user.name;
        state.user.id = payload.user.id;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
  },
});

const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { clearToken } = authSlice.actions;
export default persisteAuthReducer;
