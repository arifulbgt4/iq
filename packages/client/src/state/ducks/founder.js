import { createSlice } from '@reduxjs/toolkit';

import { getFounder } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const founderSlice = createSlice({
  name: 'Founder',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getFounderStart: startLoading,

    getFounderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getFounderFailure: loadingFailed,
  },
});

export const {
  getFounderStart,
  getFounderSuccess,
  getFounderFailure,
} = founderSlice.actions;

export default {
  founder: founderSlice.reducer,
};

export const fatchFounder = () => async (dispatch) => {
  try {
    dispatch(getFounderStart());

    const { data } = await getFounder();

    dispatch(getFounderSuccess(data));
  } catch (error) {
    dispatch(getFounderFailure(error.toString()));
  }
};
