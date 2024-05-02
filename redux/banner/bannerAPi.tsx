import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannerAPi = createApi({
  reducerPath: "bannerAPi",

  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),

  endpoints: (builder) => ({
    getBanner: builder.query({
      query: () => "/banner",
    }),
  }),
});

export const { useGetBannerQuery } = bannerAPi;
