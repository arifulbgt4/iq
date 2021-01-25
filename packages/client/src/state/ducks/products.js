import { createSlice } from '@reduxjs/toolkit';

import { getProducts,getProductsHeader } from 'src/api';

function startLoading(state) {
  state.loading = true;
}

function loadingFailed(state, { payload }) {
  state.data = [];
  state.loading = false;
  state.error = payload;
}

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getProductsStart: startLoading,

    getProductsSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getProductsFailure: loadingFailed,
  },
});

const productHeaderSlice = createSlice({
  name: 'productsHeader',
  initialState: {
    data: {},
    loading: true,
    error: null,
  },
  reducers: {
    getProductsHeaderStart: startLoading,

    getProductsHeaderSuccess: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },

    getProductsHeaderFailure: loadingFailed,
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} = productSlice.actions;

export const {
  getProductsHeaderStart,
  getProductsHeaderSuccess,
  getProductsHeaderFailure,
} = productHeaderSlice.actions;

export default {
  products: productSlice.reducer,
  productsHeader: productHeaderSlice.reducer,
};

export const fatchProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsStart());

    const { data } = await getProducts();

    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(getProductsFailure(error.toString()));
  }
};

export const fatchProductsHeader = () => async (dispatch) => {
  try {
    dispatch(getProductsHeaderStart());

    const { data } = await getProductsHeader();

    dispatch(getProductsHeaderSuccess(data));
  } catch (error) {
    dispatch(getProductsHeaderFailure(error.toString()));
  }
};
