import { createSlice } from '@reduxjs/toolkit';

const carrerSlice = createSlice({
  name: 'carrer',
  initialState: {
    data: {},
  },
  reducers: {
    getCarrerSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getCarrerSuccess } = carrerSlice.actions;

export default {
  carrer: carrerSlice.reducer,
};
