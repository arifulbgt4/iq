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

import stockImg from 'src/assets/image/heroBanner/stock.png';
const data = [
  {
    id: 1,
    title: '  Trust. Trade. Triumph.',
    text:
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem Ipsum is simply',
    image: stockImg,
  },
  {
    id: 2,
    title: '  Trust. Trade. Triumph.',
    text:
      ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem Ipsum is simply',
    image: stockImg,
  },
];
const bannerSlice = createSlice({
  name: 'modal',
  initialState: data,
  reducers: {},
});

export default {
  herobanner: bannerSlice.reducer,
};
