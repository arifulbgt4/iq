import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';

import PostCard from './components/PostCard';
import ValuCardDoc from './components/ValuCardDoc';

const Theme = () => {
  const list = ['postCard', 'valueCard'];
  return (
    <DocMain list={list}>
      <PostCard />
      <ValuCardDoc />
    </DocMain>
  );
};

export default Theme;
