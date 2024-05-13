import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { authApi } from "./authApi";
import { Users } from "@prisma/client";
import toasterService from "@/services/Toaster.service";

export interface IAuthState {
  user: Omit<Users, "createdAt" | "updatedAt" | "password"> | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

const initialState: IAuthState = {
  user: null,
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
    builder
      .addMatcher(
        authApi.endpoints.signUp.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.signIn.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        (action) => action.type === "auth/clearToken",
        (state) => {
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(authApi.endpoints.current.matchPending, (state) => {
        state.isRefreshing = true;
      })
      .addMatcher(
        authApi.endpoints.current.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(authApi.endpoints.current.matchRejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        authApi.endpoints.oAuth.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          toasterService.sucsess("Вітаємо! Вхід Успішно виконаний");
        }
      );
    // .addMatcher(authApi.endpoints.deleteUser.matchFulfilled, (state) => {
    //   state.name = null;
    //   state.email = null;
    //   state.lastName = null;
    //   state.address = null;
    //   state.phone = null;
    //   state.id = null;
    //   state.token = null;
    //   state.isLoggedIn = false;
    // });
  },
});

const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { clearToken } = authSlice.actions;
export default persisteAuthReducer;
