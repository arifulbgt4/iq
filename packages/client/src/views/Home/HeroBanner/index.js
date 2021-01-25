import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';

import cloudImg from 'src/assets/image/heroBanner/cloud.png';
import triangleImg from 'src/assets/image/heroBanner/triangle.png';
import starImg from 'src/assets/image/heroBanner/star.png';
import plusImg from 'src/assets/image/heroBanner/plus.png';
import eggShapeImg from 'src/assets/image/heroBanner/egg-shape.png';
import triangleBlankImg from 'src/assets/image/heroBanner/triangle-blank.png';
import Slider from 'src/components/Slider';
import { fatchHeroBanner } from 'src/state/ducks/herobanner';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const translate = (x, y) => `translate3d(${x / 10}px, ${y / 10}px,0)`;

const HeroBanner = () => {
  const dispatch = useDispatch();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 160 },
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
        <Slider>
          {data &&
            data.map((items) => {
              const image = process.env.API_URL + items.image.url;
              return (
                <Row className="hero-banner-item" key={items.id}>
                  <Col
                    md={{ size: 5, offset: 1 }}
                    lg={{ size: 5, offset: 1 }}
                    xl={{ size: 6, offset: 0 }}
                    className="text-center text-md-start"
                  >
                    <div className="banner-content">
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
                  <Col
                    md={6}
                    lg={5}
                    xl={6}
                    className="position-relative d-none d-md-block"
                  >
                    <animated.img
                      src={image}
                      alt="stock"
                      className="stock-img img-fluid"
                      style={{ transform: props.xy.interpolate(translate) }}
                    />
                  </Col>
                  <Col xs={12}>
                    <div className="cloud-img d-block ml-1 position-relative" />
                  </Col>
                </Row>
              );
            })}
        </Slider>
      </Container>
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
