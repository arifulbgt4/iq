import React from 'react';
import DocCard from 'src/views/Documentation/components/DocCard';
import OurFounder from 'src/views/Home/OurFounder';
const OurFounderDoc = () => {
  return (
    <DocCard title="Post Card" id="OurFounder">
      <div>
        <OurFounder />
      </div>
    </DocCard>
  );
};

export default OurFounderDoc;
