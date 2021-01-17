import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';

import PostCard from './components/PostCard';

const Theme = () => {
  const list = ['postCard'];
  return (
    <DocMain list={list}>
      <PostCard />
    </DocMain>
  );
};

export default Theme;
