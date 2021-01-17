import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';
import BlogCardDoc from './components/BlogCardDoc';
import ProductCardDoc from './components/ProductCardDoc';
import ValuCardDoc from './components/ValuCardDoc';
import GuidingPrinciplesDoc from './components/GuidingPrinciplesDoc';

const Theme = () => {
  const list = ['valueCard', 'GuidingPrinciples', 'blogCard', 'ProductCard'];

  return (
    <DocMain list={list}>
      <ValuCardDoc />
      <GuidingPrinciplesDoc />
      <BlogCardDoc />
      <ProductCardDoc />
    </DocMain>
  );
};

export default Theme;
