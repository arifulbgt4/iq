import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';
import BlogCardDoc from './components/BlogCardDoc';
import ValuCardDoc from './components/ValuCardDoc';

const Theme = () => {
  const list = ['valueCard', 'blogCard'];
  return (
    <DocMain list={list}>
      <ValuCardDoc />
      <BlogCardDoc />
    </DocMain>
  );
};

export default Theme;
