import { createSlice } from '@reduxjs/toolkit';

const chooseUsSlice = createSlice({
  name: 'chooseUs',
  initialState: {
    data: {},
  },
  reducers: {
    getchooseUsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
  },
});

const chooseUsHeaderSlice = createSlice({
  name: 'chooseUsHeader',
  initialState: {
    data: {},
  },
  reducers: {
    getchooseUsHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
  },
});

export const { getchooseUsSuccess } = chooseUsSlice.actions;

export const { getchooseUsHeaderSuccess } = chooseUsHeaderSlice.actions;

export default {
  chooseUs: chooseUsSlice.reducer,
  chooseUsHeader: chooseUsHeaderSlice.reducer,
};
