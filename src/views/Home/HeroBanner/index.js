import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import stockImg from 'src/assets/image/stock.png';
import cloudImg from 'src/assets/image/cloud.png';
import triangleImg from 'src/assets/image/triangle.png';
import starImg from 'src/assets/image/star.png';
import plusImg from 'src/assets/image/plus.png';
import eggShapeImg from 'src/assets/image/egg-shape.png';
import triangleBlankImg from 'src/assets/image/triangle-blank.png';

import BannerContent from './BannerContent';

const HeroBanner = () => {
  return (
    <section
      className="hero-banner position-relative"
      data-scroll
      data-scroll-speed={6}
    >
      <img src={triangleImg} alt="triangle" className="triangle1-img" />
      <img src={starImg} alt="star" className="star1-img" />
      <img src={plusImg} alt="plus" className="plus1-img" />
      <img src={eggShapeImg} alt="" className="egg-shape-img" />
      <img src={triangleBlankImg} alt="" className="triangle-blank-img" />
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
      <img src={triangleImg} alt="triangle" className="triangle2-img" />
      <img src={plusImg} alt="plus" className="plus2-img" />
      <img src={starImg} alt="star" className="star2-img" />
      <img src={starImg} alt="star" className="star3-img" />
    </section>
  );
};

export default HeroBanner;
