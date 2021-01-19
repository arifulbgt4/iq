import React from 'react';
import {
  TabContent,
  TabPane,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';

const TabsContent = (props) => {
  const { activeTab } = props;
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <h4>Tab 1 Contents</h4>
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </TabPane>
    </TabContent>
  );
};

export default TabsContent;
