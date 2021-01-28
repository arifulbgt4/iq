import { createSlice } from '@reduxjs/toolkit';

const bannerSlice = createSlice({
  name: 'heroBanner',
  initialState: {
    data: {},
  },
  reducers: {
    getHeroBannerSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getHeroBannerSuccess } = bannerSlice.actions;

export default {
  heroBanner: bannerSlice.reducer,
};
