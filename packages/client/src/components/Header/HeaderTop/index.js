import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import ContactAddress from 'src/components/ContactAddress';

import SocialLinks from 'src/components/SocialLinks';

const HeeaderTop = () => {
  return (
    <div className="header-top py-1">
      <Container>
        <Row className="align-items-center">
          <Col md={8} sm={12}>
            <ContactAddress textColor="text-white" />
          </Col>
          <Col md={4} sm={12}>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeeaderTop;
