import React from 'react';
import {
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const PostCard = (props) => {
  const { id, img, title, date, views } = props;
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
      className="post-card card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: property.xys.interpolate(trans) }}
    >
      <figure className="overflow-hidden position-relative">
        <CardImg top width="100%" src={img} alt="post-image" />
      </figure>
      <CardBody>
        <CardTitle className="text-capitalize" tag="h3">
          {title}
        </CardTitle>
        <CardText className="d-flex justify-content-between">
          <CardSubtitle tag="span">
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;
            <small className="date">{date}</small>
          </CardSubtitle>
          <CardSubtitle tag="span">
            <FontAwesomeIcon icon={faEye} />
            &nbsp;
            <small className="views">{kFormatter(views)}</small>
          </CardSubtitle>
        </CardText>
      </CardBody>
    </animated.div>
  );
};

export default PostCard;
