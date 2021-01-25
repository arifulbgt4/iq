import { createSlice } from '@reduxjs/toolkit';

import { getTechnologies, getTechnologiesHeader } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const technologySlice = createSlice({
  name: 'technology',
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

const technologyHeaderSlice = createSlice({
  name: 'technologyHeader',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getTechnologyHeaderStart: startLoading,

    getTechnologyHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getTechnologyHeaderFailure: loadingFailed,
  },
});

export const {
  getTechnologyStart,
  getTechnologySuccess,
  getTechnologyFailure,
} = technologySlice.actions;

export const {
  getTechnologyHeaderStart,
  getTechnologyHeaderSuccess,
  getTechnologyHeaderFailure,
} = technologyHeaderSlice.actions;

export default {
  technology: technologySlice.reducer,
  technologyHeader: technologyHeaderSlice.reducer,
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

export const fatchTechnologyHeader = () => async (dispatch) => {
  try {
    dispatch(getTechnologyHeaderStart());

    const { data } = await getTechnologiesHeader();

    dispatch(getTechnologyHeaderSuccess(data));
  } catch (error) {
    dispatch(getTechnologyHeaderFailure(error.toString()));
  }
};
