import { createSlice } from '@reduxjs/toolkit';

import { getWebsiteDetails } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {},
});

const websiteSlice = createSlice({
  name: 'websiteDetails',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getWebsiteDetailsStart: startLoading,

    getWebsiteDetailsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getWebsiteDetailsFailure: loadingFailed,
  },
});

export const {
  getWebsiteDetailsStart,
  getWebsiteDetailsSuccess,
  getWebsiteDetailsFailure,
} = websiteSlice.actions;

export default {
  uiModal: modalSlice.reducer,
  websiteDetails: websiteSlice.reducer,
};

export const fatchWebsiteDetails = () => async (dispatch) => {
  try {
    dispatch(getWebsiteDetailsStart());

    const { data } = await getWebsiteDetails();

    dispatch(getWebsiteDetailsSuccess(data));
  } catch (error) {
    dispatch(getWebsiteDetailsFailure(error.toString()));
  }
};
