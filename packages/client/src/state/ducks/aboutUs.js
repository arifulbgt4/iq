import { createSlice } from '@reduxjs/toolkit';

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState: {
    data: {},
  },
  reducers: {
    getAboutUsSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getAboutUsSuccess } = aboutUsSlice.actions;

export default {
  aboutUs: aboutUsSlice.reducer,
};
