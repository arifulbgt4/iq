import React from 'react';

import DocMain from 'src/views/Documentation/components/DocMain';

import PostCard from './components/PostCard';
import ValuCardDoc from './components/ValuCardDoc';
import GuidingPrinciplesDoc from './components/GuidingPrinciplesDoc';
import OurFounderDoc from './components/OurFounderDoc';

const Theme = () => {
  const list = ['postCard', 'valueCard', 'GuidingPrinciples', 'OurFounder'];
  return (
    <DocMain list={list}>
      <PostCard />
      <ValuCardDoc />
      <GuidingPrinciplesDoc />
      <OurFounderDoc />
    </DocMain>
  );
};

export default Theme;
