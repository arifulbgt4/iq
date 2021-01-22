import { createSlice } from '@reduxjs/toolkit';

import { getAboutUs } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getAboutUsStart: startLoading,

    getAboutUsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getAboutUsFailure: loadingFailed,
  },
});

export const {
  getAboutUsStart,
  getAboutUsSuccess,
  getAboutUsFailure,
} = aboutUsSlice.actions;

export default {
  aboutUs: aboutUsSlice.reducer,
};

export const fatchAboutUs = () => async (dispatch) => {
  try {
    dispatch(getAboutUsStart());

    const { data } = await getAboutUs();

    dispatch(getAboutUsSuccess(data));
  } catch (error) {
    dispatch(getAboutUsFailure(error.toString()));
  }
};
