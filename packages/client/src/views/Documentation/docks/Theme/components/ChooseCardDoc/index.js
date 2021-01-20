import React from 'react';

import ChooseCard from 'src/components/ChooseCard';
import DocCard from 'src/views/Documentation/components/DocCard';

import contractImg from 'src/assets/image/whyChooseUs/contract.png';

const ChooseCardDoc = () => {
  return (
    <DocCard title="choose card" id="chooseCard">
      <div className="w-50">
        <ChooseCard
          img={contractImg}
          title="client-centered"
          description="Our clientele is at the heart of everything we do. We foster a work culture devoted to enhancing our client's satisfaction. We value team spirit and a constructive team that works together with our clients Less pricing."
        />
      </div>
    </DocCard>
  );
};

export default ChooseCardDoc;
