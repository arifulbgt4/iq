import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ValuesCard from './ValuesCard';

import piler from 'src/assets/image/piler.png';
import bitcoin from 'src/assets/image/bitcoin.png';

const Values = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 10, offset: 2 }}>
          <Row>
            <Col md={4}>
              <ValuesCard />
            </Col>
            <Col md={4}>
              <ValuesCard />
            </Col>
            <Col md={4}>
              <div className="h-100 d-flex align-items-center">
                <img className="w-100" src={piler} alt="piler" />
              </div>
            </Col>
            <Col md={4}>
              <div className="h-100 d-flex align-items-center">
                <img className="w-100" src={bitcoin} alt="piler" />
              </div>
            </Col>
            <Col md={4}>
              <ValuesCard />
            </Col>
            <Col md={4}>
              <ValuesCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Values;
