import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';

import PostCard from './components/PostCard';
import ValuCardDoc from './components/ValuCardDoc';
import GuidingPrinciplesDoc from './components/GuidingPrinciplesDoc';

const Theme = () => {
  const list = ['postCard', 'valueCard', 'GuidingPrinciples'];
  return (
    <DocMain list={list}>
      <PostCard />
      <ValuCardDoc />
      <GuidingPrinciplesDoc />
    </DocMain>
  );
};

export default Theme;
