import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const boxesApi = createApi({
  reducerPath: "boxesApi",

  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBoxes: builder.query({
      query: ({ filters }) => ({
        url: "/boxes?limit=10&page=0",
        method: "POST",
        body: filters,
      }),
    }),
    getBoxTypes: builder.query({
      query: () => "/box-types",
    }),
  }),
});

export const { useGetBoxesQuery, useGetBoxTypesQuery } = boxesApi;
