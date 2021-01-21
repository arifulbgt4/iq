import { createSlice } from '@reduxjs/toolkit';

import { getChooseUs } from 'src/api';

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

export const {
  getchooseUsStart,
  getchooseUsSuccess,
  getchooseUsFailure,
} = chooseUsSlice.actions;

export default {
  chooseUs: chooseUsSlice.reducer,
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
