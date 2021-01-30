import React, { useState } from 'react';

import TabsNavigation from './TabsNavigation';

const OurTechnologyTabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <TabsNavigation toggle={toggle} activeTab={activeTab} />
    </>
  );
};

export default OurTechnologyTabs;
