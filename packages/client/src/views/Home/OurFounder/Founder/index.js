import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

import calc from 'src/utils/calc';
import MoreDetails from 'src/components/ReadMore';

const trans = (x, y, s) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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
        )}
      </Col>
      <Col xl={8} sm={12} xs={12} className='text-center text-xl-start'>
        <img
          className="img-cortetion"
          src="https://antor.thememaster.net/AllImage/cotetion.png"
          alt="a"
        />
        {description && <p className="m-0  info-text ">{description}</p>}
        {name && <p className="fw-bold">- {name}</p>}

        <div className="text-center mt-3">
          <p className="history-heading fw-bold">
            How It Started / Our History
          </p>
        </div>
        {history && <MoreDetails text={history} maxLength={4} />}
      </Col>
    </Row>
  );
};

export default Founder;
