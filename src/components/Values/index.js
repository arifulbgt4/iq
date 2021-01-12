import React from 'react';
import ValuesCard from './ValuesCard';
import { Container, Row, Col } from 'reactstrap';
import piler from 'src/assets/image/piler.png';
import piler2 from 'src/assets/image/piler2.png';
const Values = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
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
                <img className="w-100" src={piler2} alt="piler" />
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
