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
import { faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BlogCard = (props) => {
  const { id, img, title, description, bloggerName, createDate } = props;
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
      className="blog-card shadow"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: property.xys.interpolate(trans) }}
    >
      <CardImg
        top
        width="100%"
        src={img}
        alt="blog image"
        className="blog-card-img"
      />
      <CardBody className="blog-card-body">
        <CardTitle
          tag="h3"
          className="blog-card-body_title border-bottom text-capitalize pb-2 m-0 fw-bold"
        >
          {title}
        </CardTitle>
        <CardText className="blog-card-body_description pt-2 text-capitalize">
          {description}
        </CardText>
        <div className="blog-card-body_details mb-4">
          <CardSubtitle tag="span" className="me-5">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            <small className="name text-capitalize ms-2">{bloggerName}</small>
          </CardSubtitle>
          <CardSubtitle tag="span" className="ps-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <small className="date text-capitalize ms-2">{createDate}</small>
          </CardSubtitle>
        </div>
        <div className="blog-card-button d-flex justify-content-end">
          <Link to="#" className="btn btn-primary">
            Read More
          </Link>
        </div>
      </CardBody>
    </animated.div>
  );
};

export default BlogCard;
