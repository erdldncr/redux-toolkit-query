import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const initialState = {
  artDetails: { title: 'test title' },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      console.log(payload);
      state.artDetails = { ...payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData } = counterSlice.actions;

export default counterSlice.reducer;
