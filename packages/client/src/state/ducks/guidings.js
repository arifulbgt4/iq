import { createSlice } from '@reduxjs/toolkit';

import { getGuids, getGuidsHeader } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const guidingSlice = createSlice({
  name: 'gudings',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getGuidStart: startLoading,

    getGuidSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getGuidFailure: loadingFailed,
  },
});

const guidingHeaderSlice = createSlice({
  name: 'gudingsHeader',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getGuidHeaderStart: startLoading,

    getGuidHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getGuidHeaderFailure: loadingFailed,
  },
});

export const {
  getGuidStart,
  getGuidSuccess,
  getGuidFailure,
} = guidingSlice.actions;

export const {
  getGuidHeaderStart,
  getGuidHeaderSuccess,
  getGuidHeaderFailure,
} = guidingHeaderSlice.actions;

export default {
  guidings: guidingSlice.reducer,
  guidingsHeader: guidingHeaderSlice.reducer,
};

export const fatchGuid = () => async (dispatch) => {
  try {
    dispatch(getGuidStart());

    const { data } = await getGuids();

    dispatch(getGuidSuccess(data));
  } catch (error) {
    dispatch(getGuidFailure(error.toString()));
  }
};

export const fatchGuidHeader = () => async (dispatch) => {
  try {
    dispatch(getGuidHeaderStart());

    const { data } = await getGuidsHeader();

    dispatch(getGuidHeaderSuccess(data));
  } catch (error) {
    dispatch(getGuidHeaderFailure(error.toString()));
  }
};
