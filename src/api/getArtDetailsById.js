// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const getArtDetailsByIdApi = createApi({
  reducerPath: 'artDetailsById',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1/artworks',
  }),
  endpoints: (builder) => ({
    getArtDetailsById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetArtDetailsByIdQuery } = getArtDetailsByIdApi;
