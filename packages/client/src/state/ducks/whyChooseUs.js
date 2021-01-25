import { createSlice } from '@reduxjs/toolkit';

import { getChooseUs, getChooseUsHeader } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const chooseUsSlice = createSlice({
  name: 'chooseUs',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getchooseUsStart: startLoading,

    getchooseUsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getchooseUsFailure: loadingFailed,
  },
});


const chooseUsHeaderSlice = createSlice({
  name: 'chooseUs',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getchooseUsHeaderStart: startLoading,

    getchooseUsHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getchooseUsHeaderFailure: loadingFailed,
  },
});

export const {
  getchooseUsStart,
  getchooseUsSuccess,
  getchooseUsFailure,
} = chooseUsSlice.actions;

export const {
  getchooseUsHeaderStart,
  getchooseUsHeaderSuccess,
  getchooseUsHeaderFailure,
} = chooseUsHeaderSlice.actions;

export default {
  chooseUs: chooseUsSlice.reducer,
  chooseUsHeader: chooseUsHeaderSlice.reducer,
};

export const fatchchooseUs = () => async (dispatch) => {
  try {
    dispatch(getchooseUsStart());

    const { data } = await getChooseUs();

    dispatch(getchooseUsSuccess(data));
  } catch (error) {
    dispatch(getchooseUsFailure(error.toString()));
  }
};

export const fatchchooseUsHeader = () => async (dispatch) => {
  try {
    dispatch(getchooseUsHeaderStart());

    const { data } = await getChooseUsHeader();

    dispatch(getchooseUsHeaderSuccess(data));
  } catch (error) {
    dispatch(getchooseUsHeaderFailure(error.toString()));
  }
};
