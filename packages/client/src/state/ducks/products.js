import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: {},
  },
  reducers: {
    getProductsSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

const productHeaderSlice = createSlice({
  name: 'productsHeader',
  initialState: {
    data: {},
  },
  reducers: {
    getProductsHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
      };
    },
  },
});

export const { getProductsSuccess } = productSlice.actions;

export const { getProductsHeaderSuccess } = productHeaderSlice.actions;

export default {
  products: productSlice.reducer,
  productsHeader: productHeaderSlice.reducer,
};
