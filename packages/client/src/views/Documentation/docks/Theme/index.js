import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';
import BlogCardDoc from './components/BlogCardDoc';
import ProductCardDoc from './components/ProductCardDoc';
import ValuCardDoc from './components/ValuCardDoc';
import GuidingPrinciplesDoc from './components/GuidingPrinciplesDoc';
import ChooseCardDoc from './components/ChooseCardDoc';

const Theme = () => {
  const list = [
    'valueCard',
    'chooseCard',
    'GuidingPrinciples',
    'blogCard',
    'ProductCard',
  ];

  return (
    <DocMain list={list}>
      <ValuCardDoc />
      <ChooseCardDoc />
      <GuidingPrinciplesDoc />
      <BlogCardDoc />
      <ProductCardDoc />
    </DocMain>
  );
};

export default Theme;
