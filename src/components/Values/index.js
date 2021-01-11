import React from 'react';
import ValuesCard from './ValuesCard';
import { Container, Row, Col } from 'reactstrap';
const Values = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Row>
            <Col md={6}>
              <ValuesCard />
            </Col>
            <Col md={6}>
              <ValuesCard />
            </Col>
            <Col md={6}>
              <ValuesCard />
            </Col>
            <Col md={6}>
              <ValuesCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Values;
