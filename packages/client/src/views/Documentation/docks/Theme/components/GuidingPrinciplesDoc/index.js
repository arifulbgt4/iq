import React from 'react';
import DocCard from 'src/views/Documentation/components/DocCard';
import GuidingPrinciples from 'src/components/GuidingPrinciples';

const GuidingPrinciplesDoc = () => {
  return (
    <DocCard title="Guiding Principles" id="GuidingPrinciples">
      <GuidingPrinciples
        style="justify-content-start"
        img="https://antor.thememaster.net/AllImage/idea.png"
        title="Innovation"
        description="Innovation is the cornerstone of our business. We never settle for mediocre solutions. It is in our essence to use our initiation and think unconventionally. We undertake careful analysis, research, and develop custom solutions that not only resolve your challenges, but also project you to be remarkable."
      />
    </DocCard>
  );
};

export default GuidingPrinciplesDoc;
