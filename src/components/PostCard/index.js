import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

const PostCard = (props) => {
  const { id, img, title, date, views } = props;
  return (
    <Card className="post-card">
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
    </Card>
  );
};

export default PostCard;
