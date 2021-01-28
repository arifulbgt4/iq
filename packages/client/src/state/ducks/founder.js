import { createSlice } from '@reduxjs/toolkit';

const founderSlice = createSlice({
  name: 'founder',
  initialState: {
    data: {},
  },
  reducers: {
    getFounderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { getFounderSuccess } = founderSlice.actions;

export default {
  founder: founderSlice.reducer,
};
