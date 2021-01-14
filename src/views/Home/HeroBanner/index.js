import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

import stockImg from 'src/assets/image/stock.png';
import cloudImg from 'src/assets/image/cloud.png';
import triangleImg from 'src/assets/image/triangle.png';
import starImg from 'src/assets/image/star.png';
import plusImg from 'src/assets/image/plus.png';
import eggShapeImg from 'src/assets/image/egg-shape.png';
import triangleBlankImg from 'src/assets/image/triangle-blank.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const translate4 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px,0)`;

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
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <animated.img
        src={starImg}
        alt="star"
        className="star1-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <animated.img
        src={plusImg}
        alt="plus"
        className="plus1-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />

      <animated.img
        src={eggShapeImg}
        alt=""
        className="egg-shape-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <animated.img
        src={triangleBlankImg}
        alt=""
        className="triangle-blank-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <Container>
        <Row>
          <Col md={4}>
            <animated.div
              className="banner-content"
              style={{ transform: props.xy.interpolate(translate4) }}
            >
              <h1 className="banner-content-heading text-capitalize">
                the stock market
              </h1>
              <p className="banner-content-description text-capitalize">
                Is filled with individuals who know the price everything,but the
                value of nothing.
              </p>
            </animated.div>
          </Col>
          <Col md={8}>
            <animated.img
              src={stockImg}
              alt="stock"
              className="stock-img"
              style={{ transform: props.xy.interpolate(translate4) }}
            />
          </Col>
        </Row>
      </Container>
      <img src={cloudImg} alt="cloud" className="cloud-img" />
      <animated.img
        src={triangleImg}
        alt="triangle"
        className="triangle2-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <animated.img
        src={plusImg}
        alt="plus"
        className="plus2-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <animated.img
        src={starImg}
        alt="star"
        className="star2-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
      <animated.img
        src={starImg}
        alt="star"
        className="star3-img"
        style={{ transform: props.xy.interpolate(translate4) }}
      />
    </section>
  );
};

export default HeroBanner;
