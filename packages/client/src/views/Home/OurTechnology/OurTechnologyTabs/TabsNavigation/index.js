import React from 'react';
import { Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const TabsNavigation = (props) => {
  const { toggle, activeTab } = props;
  return (
    <Row>
      <Col sm={10}>
        <Nav tabs className="mb-2">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};

export default TabsNavigation;
