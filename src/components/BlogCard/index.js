import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const BlogCard = (props) => {
  const { id, img, title, description, bloggerName, createDate } = props;
  return (
    <Card className="blog-card">
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
          className="blog-card-body_title border-bottom text-capitalize fw-bold"
        >
          {title}
        </CardTitle>
        <CardText className="blog-card-body_description">
          {description}
        </CardText>
        <div className="blog-card-body_details">
          <CardSubtitle tag="span">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            <small className="name text-capitalize">{bloggerName}</small>
          </CardSubtitle>
          <CardSubtitle tag="span">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <small className="date text-capitalize">{createDate}</small>
          </CardSubtitle>
        </div>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
