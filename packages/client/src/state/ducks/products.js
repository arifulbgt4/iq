import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 1,
    title: 'Product 1',
    text:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 2,
    title: 'Product 1',
    text:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 3,
    title: 'Product 1',
    text:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
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
