import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const instaApi = createApi({
  reducerPath: "instaApi",

  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),

  endpoints: (builder) => ({
    getInsta: builder.query({
      query: () => "/insta",
    }),
  }),
});

export const { useGetInstaQuery } = instaApi;
