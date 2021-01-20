import { createSlice } from '@reduxjs/toolkit';

import { getHeroSlider } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const bannerSlice = createSlice({
  name: 'heroBanner',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getHeroBannerStart: startLoading,

    getHeroBannerSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getHeroBannerFailure: loadingFailed,
  },
});

export const {
  getHeroBannerStart,
  getHeroBannerSuccess,
  getHeroBannerFailure,
} = bannerSlice.actions;

export default {
  heroBanner: bannerSlice.reducer,
};

export const fatchHeroBanner = () => async (dispatch) => {
  try {
    dispatch(getHeroBannerStart());

    const { data } = await getHeroSlider();

    dispatch(getHeroBannerSuccess(data));
  } catch (error) {
    dispatch(getHeroBannerFailure(error.toString()));
  }
};
