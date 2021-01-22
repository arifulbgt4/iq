import React, { useState } from 'react';

// import TabsContent from './TabsContent';
import TabsNavigation from './TabsNavigation';

const OurTechnologyTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <TabsNavigation toggle={toggle} activeTab={activeTab} />
      {/* <TabsContent activeTab={activeTab} /> */}
    </>
  );
};

export default OurTechnologyTabs;
