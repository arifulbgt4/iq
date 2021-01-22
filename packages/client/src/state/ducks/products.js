import { createSlice } from '@reduxjs/toolkit';

import { getProducts } from 'src/api';

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

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} = productSlice.actions;

export default {
  products: productSlice.reducer,
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
