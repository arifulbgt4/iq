import React from 'react';
import idea from 'src/assets/image/idea.png';
const GuidingPrinciples = () => {
  return (
    <div className="d-flex mx-2">
      <img className="px-4" src={idea} alt="idea" />
      <div>
        <h1>Innovation</h1>
        <p>
          Innovation is the cornerstone of our business. We never settle for
          mediocre solutions. It is in our essence to use our initiation and
          think unconventionally. We undertake careful analysis, research, and
          develop custom solutions that not only resolve your challenges, but
          also project you to be remarkable.
        </p>
      </div>
    </div>
  );
};

export default GuidingPrinciples;
