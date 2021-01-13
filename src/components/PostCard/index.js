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
    <Card>
      {/* <figure className="h-50 overflow-hidden"> */}
      <CardImg top width="100%" src={img} alt="post-image" />
      {/* </figure> */}
      <CardBody>
        <CardTitle className="text-capitalize" tag="h5">
          {title}
        </CardTitle>
        <CardText className="d-flex justify-content-between">
          <CardSubtitle tag="span">
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;
            <small>{date}</small>
          </CardSubtitle>
          <CardSubtitle tag="span">
            <FontAwesomeIcon icon={faEye} />
            &nbsp;
            <small>{kFormatter(views)}</small>
          </CardSubtitle>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default PostCard;
