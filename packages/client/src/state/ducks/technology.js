import { createSlice } from '@reduxjs/toolkit';

import { getTechnologies } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const technologySlice = createSlice({
  name: 'Technology',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getTechnologyStart: startLoading,

    getTechnologySuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getTechnologyFailure: loadingFailed,
  },
});

export const {
  getTechnologyStart,
  getTechnologySuccess,
  getTechnologyFailure,
} = technologySlice.actions;

export default {
  technology: technologySlice.reducer,
};

export const fatchTechnology = () => async (dispatch) => {
  try {
    dispatch(getTechnologyStart());

    const { data } = await getTechnologies();

    dispatch(getTechnologySuccess(data));
  } catch (error) {
    dispatch(getTechnologyFailure(error.toString()));
  }
};
