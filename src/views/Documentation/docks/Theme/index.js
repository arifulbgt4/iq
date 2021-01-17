import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';
import BlogCardDoc from './components/BlogCardDoc';
import ProductCardDoc from './components/ProductCardDoc';
import ValuCardDoc from './components/ValuCardDoc';

const Theme = () => {
  const list = ['valueCard', 'ProductCard', 'blogCard'];

  return (
    <DocMain list={list}>
      <ValuCardDoc />
      <BlogCardDoc />
      <ProductCardDoc />
    </DocMain>
  );
};

export default Theme;
