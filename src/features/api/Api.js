import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceHolderApiSlice = createApi({
  reducerPath: "jsonPlaceHolderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getList: builder.query({
      query: (resource) => resource,
    }),
    getOneById: builder.query({
      query: ({ resource, id }) => `${resource}/${id}`,
    }),
  }),
});

export const { useGetListQuery, useGetOneByIdQuery } = jsonPlaceHolderApiSlice;
