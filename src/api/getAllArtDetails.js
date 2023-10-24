// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const getArtDetailsApi = createApi({
  reducerPath: 'allArtDetails',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1/artworks',
  }),
  endpoints: (builder) => ({
    getAllArtDetails: builder.query({
      query: (page) => `?page=${page}`,
    }),
  }),
  keepUnusedDataFor: 30 * 60,
});

console.log(getArtDetailsApi);
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllArtDetailsQuery } = getArtDetailsApi;
