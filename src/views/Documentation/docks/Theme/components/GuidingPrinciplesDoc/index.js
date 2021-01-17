import React from 'react';
import DocCard from 'src/views/Documentation/components/DocCard';
import GuidingPrinciples from 'src/components/GuidingPrinciples';
const data = [
  {
    id: 1,
    style: '',
    img: 'https://antor.thememaster.net/AllImage/goal.png',
    title: 'Excellence',
    description:
      'Good is not enough; we strive to be excellent in all we do. We seek to be differentiated and original in our thinking. We focus on achieving superior risk-adjusted-performance.',
  },
  {
    id: 2,
    style: 'justify-content-end',
    img: 'https://antor.thememaster.net/AllImage/united.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
  {
    id: 3,
    style: '',
    img: 'https://antor.thememaster.net/AllImage/handshake.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
  {
    id: 2,
    style: 'justify-content-end',
    img: 'https://antor.thememaster.net/AllImage/idea.png',
    title: 'Innovation',
    description:
      'Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable.',
  },
];
const GuidingPrinciplesDoc = () => {
  return (
    <DocCard title="Guiding Principles" id="GuidingPrinciples">
      {data && data.map((item, i) => <GuidingPrinciples key={i} {...item} />)}
    </DocCard>
  );
};

export default GuidingPrinciplesDoc;
