import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { Parallax } from 'react-skrollr';

import calc from 'src/utils/calc';

const trans = (x, y, s) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; transform: translate(10%, -50%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(-10%, 20%);',
  },
  data2: {
    'data-top-bottom': 'opacity: 1; transform: translate(-5%, 0%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(10%, 0%);',
  },
  data3: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, 50%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 0%);',
  },
  data4: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, 0%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 50%);',
  },
};

const Founder = (props) => {
  const { name, description, history, image } = props;
  const [property, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 10,
      tension: 350,
      friction: 40,
    },
  }));

  return (
    <Row className="align-items-center">
      <Col xl={4} sm={12} xs={12}>
        {image && (
          <Parallax data={scroll.data}>
            <figure className="our-founder-image m-0">
              <animated.img
                className="img-fluid"
                src={image}
                alt="founder"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: property.xys.interpolate(trans) }}
              />
            </figure>
          </Parallax>
        )}
      </Col>
      <Col xl={8} sm={12} xs={12} className="text-center text-xl-start">
        <img
          className="img-cortetion"
          src="https://antor.thememaster.net/AllImage/cotetion.png"
          alt="a"
        />
        {description && (
          <Parallax data={scroll.data3}>
            {' '}
            <p className="m-0  info-text ">{description}</p>{' '}
          </Parallax>
        )}
        {name && (
          <Parallax data={scroll.data4}>
            {' '}
            <p className="fw-bold">- {name}</p>{' '}
          </Parallax>
        )}

        <div className="text-center mt-3">
          <Parallax data={scroll.data2}>
            <p className="history-heading fw-bold">
              How It Started / Our History
            </p>
          </Parallax>
        </div>
        {history && (
          <div className="more-details-item">
            <Parallax data={scroll.data4}>
              <p>{history} </p>
              <Link to="#" className="bg-primary p-1 p-sm-2">
                Read Nore
              </Link>
            </Parallax>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Founder;
