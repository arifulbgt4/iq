import { createSlice } from '@reduxjs/toolkit';

import { getGuids } from 'src/api';

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

export const {
  getGuidStart,
  getGuidSuccess,
  getGuidFailure,
} = guidingSlice.actions;

export default {
  guidings: guidingSlice.reducer,
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
