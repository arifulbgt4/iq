import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

import stockImg from 'src/assets/image/heroBanner/stock.png';
import cloudImg from 'src/assets/image/heroBanner/cloud.png';
import triangleImg from 'src/assets/image/heroBanner/triangle.png';
import starImg from 'src/assets/image/heroBanner/star.png';
import plusImg from 'src/assets/image/heroBanner/plus.png';
import eggShapeImg from 'src/assets/image/heroBanner/egg-shape.png';
import triangleBlankImg from 'src/assets/image/heroBanner/triangle-blank.png';

import BannerContent from './BannerContent';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const translate = (x, y) => `translate3d(${x / 10}px, ${y / 10}px,0)`;

const HeroBanner = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 160 },
  }));
  return (
    <section
      className="hero-banner position-relative"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.img
        src={triangleImg}
        alt="triangle"
        className="triangle1-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <animated.img
        src={starImg}
        alt="star"
        className="star1-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <animated.img
        src={plusImg}
        alt="plus"
        className="plus1-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />

      <animated.img
        src={eggShapeImg}
        alt=""
        className="egg-shape-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <animated.img
        src={triangleBlankImg}
        alt=""
        className="triangle-blank-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <Container>
        <Row>
          <Col md={4}>
            <BannerContent />
          </Col>
          <Col md={8}>
            <animated.img
              src={stockImg}
              alt="stock"
              className="stock-img"
              style={{ transform: props.xy.interpolate(translate) }}
            />
          </Col>
        </Row>
      </Container>
      <img src={cloudImg} alt="cloud" className="cloud-img" />
      <animated.img
        src={triangleImg}
        alt="triangle"
        className="triangle2-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <animated.img
        src={plusImg}
        alt="plus"
        className="plus2-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <animated.img
        src={starImg}
        alt="star"
        className="star2-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
      <animated.img
        src={starImg}
        alt="star"
        className="star3-img"
        style={{ transform: props.xy.interpolate(translate) }}
      />
    </section>
  );
};

export default HeroBanner;
