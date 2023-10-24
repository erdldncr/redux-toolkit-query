import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { getArtDetailsApi } from './api/getAllArtDetails';
import { getArtDetailsByIdApi } from './api/getArtDetailsById';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [getArtDetailsApi.reducerPath]: getArtDetailsApi.reducer,
    [getArtDetailsByIdApi.reducerPath]: getArtDetailsByIdApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getArtDetailsApi.middleware)
      .concat(getArtDetailsByIdApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
