import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { clearToken } from "./authSlice";
import store from "../store";

type RootState = ReturnType<typeof store.getState>;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: { token: string } }).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/auth/signUp",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["auth"],
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signIn",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["auth"],
    }),
    current: builder.query({
      query: () => "/user",

      onQueryStarted: (_, { dispatch, getState }) => {
        const token = (getState() as RootState).auth.token;
        if (!token) {
          dispatch(clearToken());
        }
      },
      providesTags: ["auth"],
    }),
    update: builder.mutation({
      query: (updates) => ({
        url: "/user",
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["auth"],
    }),
    // deleteUser: builder.mutation({
    //   query: () => ({
    //     url: "/user",
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useUpdateMutation,
  // useDeleteUserMutation,
} = authApi;
