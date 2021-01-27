import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';

import stock from 'src/assets/image/heroBanner/stock.png';
import triangleImg from 'src/assets/image/heroBanner/triangle.png';
import starImg from 'src/assets/image/heroBanner/star.png';
import plusImg from 'src/assets/image/heroBanner/plus.png';
import eggShapeImg from 'src/assets/image/heroBanner/egg-shape.png';
import triangleBlankImg from 'src/assets/image/heroBanner/triangle-blank.png';
import stock1 from 'src/assets/image/heroBanner/Asset1.png';
import stock2 from 'src/assets/image/heroBanner/Asset2.png';
import stock3 from 'src/assets/image/heroBanner/Asset3.png';
import stock4 from 'src/assets/image/heroBanner/Asset4.png';
import stock5 from 'src/assets/image/heroBanner/Asset5.png';
import stock6 from 'src/assets/image/heroBanner/Asset6.png';
import stock7 from 'src/assets/image/heroBanner/Asset7.png';
import stock8 from 'src/assets/image/heroBanner/Asset8.png';
import stock9 from 'src/assets/image/heroBanner/Asset9.png';

import Slider from 'src/components/Slider';
import { fatchHeroBanner } from 'src/state/ducks/herobanner';

const calc = (x, y) => [
  x - window.innerWidth / 1.2,
  y - window.innerHeight / 2,
];

const translate = (x, y) => `translate3d(${x / 10}px, ${y / 10}px,0)`;
const trans1 = (x, y) => `translate3d(${x / 7}px,${y / 9}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 10}px,${y / 8 - 10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 10.5}px,${y / 7.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 7.5}px,${y / 7.5}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 5.5}px,${y / 4.8}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 6.5}px,${y / 8.5}px,0)`;

const HeroBanner = () => {
  const dispatch = useDispatch();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 500, friction: 80 },
  }));

  const { data, loading } = useSelector((store) => store.heroBanner);

  useEffect(() => {
    dispatch(fatchHeroBanner());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }

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
      <Container fluid>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Slider>
              {data &&
                data.map((items) => {
                  return (
                    <Row key={items.id}>
                      <Col
                        md={{ size: 5, offset: 1 }}
                        lg={{ size: 5, offset: 0 }}
                        xl={{ size: 6, offset: 0 }}
                        className="slider-left-content"
                      >
                        <div className="banner-content text-center text-md-start">
                          <h1 className="banner-content-heading text-capitalize fw-bolder">
                            {items.title}
                          </h1>
                          <p className="banner-content-description text-capitalize">
                            {items.description}
                          </p>
                          <Button className="rounded-pill px-4" color="primary">
                            Shedule an appointment
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
            </Slider>
          </Col>
          <Col
            xs={{ size: 11, offset: 1}}
            sm={{ size: 10, offset: 2 }}
            md={{ size: 6, offset: 0 }}

            className=" d-block stock-img-content justify-content-center"
          >
            <div className="stock-img-item">
              <animated.img
                src={stock4}
                alt="stock"
                className="stock-img4"

              />
              <animated.img
                src={stock5}
                alt="stock"
                className="stock-img5"

              />
              <animated.img
                src={stock1}
                alt="stock"
                className="stock-img1"

              />
              <div className="line-wrapper2 ">
                <span className="line1" />
                <span className="line2" />
                <span className="line3" />
                <span className="line4" />
                <span className="line5" />
              </div>
              <animated.img
                src={stock3}
                alt="stock"
                className="stock-img3"

              />

              <animated.img
                src={stock6}
                alt="stock"
                className="stock-img6"

              />
              <animated.img
                src={stock7}
                alt="stock"
                className="stock-img7"

              />
              <animated.img
                src={stock8}
                alt="stock"
                className="stock-img8"

              />
              <animated.img
                src={stock9}
                alt="stock"
                className="stock-img9"

              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="cloud-img d-block ml-1 position-relative" />
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
