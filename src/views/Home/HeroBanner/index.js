import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import stockImg from 'src/assets/image/stock.png';
import cloudImg from 'src/assets/image/cloud.png';

import BannerContent from './BannerContent';

const HeroBanner = () => {
  return (
    <section className="hero-banner position-relative">
      <Container>
        <Row>
          <Col md={4}>
            <BannerContent />
          </Col>
          <Col md={8}>
            <img src={stockImg} alt="stock" className="stock-img" />
          </Col>
        </Row>
      </Container>
      <img src={cloudImg} alt="cloud" className="cloud-img" />
    </section>
  );
};

export default HeroBanner;
