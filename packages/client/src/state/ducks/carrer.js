import { createSlice } from '@reduxjs/toolkit';

import { getCarrer } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const carrerSlice = createSlice({
  name: 'carrer',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getCarrerStart: startLoading,

    getCarrerSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getCarrerFailure: loadingFailed,
  },
});

export const {
  getCarrerStart,
  getCarrerSuccess,
  getCarrerFailure,
} = carrerSlice.actions;

export default {
  carrer: carrerSlice.reducer,
};

export const fatchCarrer = () => async (dispatch) => {
  try {
    dispatch(getCarrerStart());

    const { data } = await getCarrer();

    dispatch(getCarrerSuccess(data));
  } catch (error) {
    dispatch(getCarrerFailure(error.toString()));
  }
};
