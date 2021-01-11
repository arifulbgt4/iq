import React from 'react';
import VCard from './VCard';
import { Container, Row, Col } from 'reactstrap';
const ValuesCard = () => {
  return (
    <Container>
      <Row>
        <Col md="3">
          <VCard />
        </Col>
        <Col md="3">
          <VCard />
        </Col>
        <Col md="3">
          <VCard />
        </Col>
        <Col md="3">
          <VCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ValuesCard;
