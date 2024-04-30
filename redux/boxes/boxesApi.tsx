import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boxesApi = createApi({
  reducerPath: "boxesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBoxes: builder.mutation({
      query: ({ page, limit, filters }) => ({
        url: `/boxes?page=${page}&limit=${limit}`,
        method: "POST",
        body: filters,
      }),
    }),
  }),
});

export const { useGetBoxesMutation } = boxesApi;
