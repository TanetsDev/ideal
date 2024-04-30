import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boxesApi = createApi({
  reducerPath: "boxesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBoxes: builder.query({
      query: ({ page, limit }) => `/boxes?page=${page}&limit=${limit}&type=all`,
    }),
  }),
});

export const { useGetBoxesQuery } = boxesApi;
