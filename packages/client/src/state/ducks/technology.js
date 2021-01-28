import { createSlice } from '@reduxjs/toolkit';

const technologySlice = createSlice({
  name: 'technology',
  initialState: {
    data: {},
  },
  reducers: {
    getTechnologySuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

const technologyHeaderSlice = createSlice({
  name: 'technologyHeader',
  initialState: {
    data: {},
  },
  reducers: {
    getTechnologyHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getTechnologySuccess } = technologySlice.actions;

export const { getTechnologyHeaderSuccess } = technologyHeaderSlice.actions;

export default {
  technology: technologySlice.reducer,
  technologyHeader: technologyHeaderSlice.reducer,
};
