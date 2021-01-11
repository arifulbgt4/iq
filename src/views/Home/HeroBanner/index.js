import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import BannerContent from './BannerContent';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <Container>
        <Row>
          <Col md={4}>
            <BannerContent />
          </Col>
          <Col md={8}>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroBanner;
