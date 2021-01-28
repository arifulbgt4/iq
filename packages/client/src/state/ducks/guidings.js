import { createSlice } from '@reduxjs/toolkit';

const guidingSlice = createSlice({
  name: 'gudings',
  initialState: {
    data: {},
  },
  reducers: {
    getGuidSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

const guidingHeaderSlice = createSlice({
  name: 'gudingsHeader',
  initialState: {
    data: {},
  },
  reducers: {
    getGuidHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { getGuidSuccess } = guidingSlice.actions;

export const { getGuidHeaderSuccess } = guidingHeaderSlice.actions;

export default {
  guidings: guidingSlice.reducer,
  guidingsHeader: guidingHeaderSlice.reducer,
};
