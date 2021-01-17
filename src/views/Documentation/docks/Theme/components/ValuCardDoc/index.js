import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';
import ValuesCard from 'src/components/Values/ValuesCard';

const ValuCardDoc = () => {
  return (
    <DocCard title="Value Card" id="valueCard">
      <div className="w-25">
        <ValuesCard />
      </div>
    </DocCard>
  );
};

export default ValuCardDoc;
