import { createSlice } from '@reduxjs/toolkit';

const applaySlice = createSlice({
  name: 'applay',
  initialState: {
    data: {},
  },
  reducers: {
    getApplaySuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getApplaySuccess } = applaySlice.actions;

export default {
  applay: applaySlice.reducer,
};
