import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import calc from 'src/utils/calc';
import Calendly from '../Calendly';

const trans = (x, y, s) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProductCard = (props) => {
  const { title, description, name, url, id } = props;

  const [property, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 10,
      tension: 350,
      friction: 40,
    },
  }));

  return (
    <animated.div
      className="product shadow bg-white"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: property.xys.interpolate(trans) }}
    >
      <CardBody className="text-center">
        <CardTitle tag="h2">{name}</CardTitle>
        <CardSubtitle tag="h1" className="my-2 my-sm-3 my-md-5 ">
          {title}
        </CardSubtitle>
        <h2 className="fw-normal">Details</h2>
        <CardText className="details">
          {description}
          <Link
            to={`/product/${id}`}
            className="btn btn-link p-0 color-primary ps-1"
          >
            Read more
          </Link>
        </CardText>
        <Calendly className="shedule-btn" outline url={url} />
      </CardBody>
    </animated.div>
  );
};

export default ProductCard;
