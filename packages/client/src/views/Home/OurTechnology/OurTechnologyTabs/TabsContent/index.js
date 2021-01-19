import React from 'react';
import { TabContent, TabPane } from 'reactstrap';

import Feature from './Feature';

const TabsContent = (props) => {
  const { activeTab } = props;
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Feature />
      </TabPane>
      <TabPane tabId="2">
        <Feature />
      </TabPane>
    </TabContent>
  );
};

export default TabsContent;
