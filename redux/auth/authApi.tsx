import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { clearToken } from "./authApiSlice";
// import store from "../store";

// type RootState = ReturnType<typeof store.getState>;

const baseQuery = fetchBaseQuery({ baseUrl: "/api/auth" });

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/signUp",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSignUpMutation } = authApi;
