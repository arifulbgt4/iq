import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';

import PostCard from './components/PostCard';
import ProductCardDoc from './components/ProductCardDoc';
import ValuCardDoc from './components/ValuCardDoc';

const Theme = () => {
  const list = ['postCard', 'valueCard', 'ProductCard'];
  return (
    <DocMain list={list}>
      <PostCard />
      <ValuCardDoc />
      <ProductCardDoc />
    </DocMain>
  );
};

export default Theme;
