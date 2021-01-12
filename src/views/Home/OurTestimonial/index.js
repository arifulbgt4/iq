import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Team from './Team';
import dottetline from 'src/assets/image/testimonial/dottetline.png';
const OurTestimonial = () => {
  return (
    <>
      <Team />
      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          <div className="text-center mt-4">
            <img src={dottetline} alt="dottetline" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OurTestimonial;
