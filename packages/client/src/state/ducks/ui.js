import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {},
});

const websiteSlice = createSlice({
  name: 'websiteDetails',
  initialState: {
    data: {},
  },
  reducers: {
    getWebsiteDetailsSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getWebsiteDetailsSuccess } = websiteSlice.actions;

export default {
  uiModal: modalSlice.reducer,
  websiteDetails: websiteSlice.reducer,
};
