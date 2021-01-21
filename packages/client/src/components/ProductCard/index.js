import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

import calc from 'src/utils/calc';

const trans = (x, y, s) =>
  `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProductCard = (props) => {
  const { title, text } = props;
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
        <CardTitle tag="h2">Product</CardTitle>
        <CardSubtitle tag="h1" className="my-5 ">
          {title}
        </CardSubtitle>
        <h2 className="fw-normal">Details</h2>
        <CardText className="details">{text}</CardText>
        <Button color="primary" outline className="rounded-pill mt-3 px-4">
          Shedule an appointment
        </Button>
      </CardBody>
    </animated.div>
  );
};

export default ProductCard;
