import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 1,
    title: 'Product 1',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem',
  },
  {
    id: 2,
    title: 'Product 1',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem Ipsum is simply',
  },
  {
    id: 3,
    title: 'Product 1',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys Lorem',
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState: data,
  reducers: {},
});

export default {
  products: productSlice.reducer,
};
