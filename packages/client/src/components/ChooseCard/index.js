import React from 'react';
import { CardBody, CardText, CardTitle } from 'reactstrap';

const ChooseCard = (props) => {
  const { id, img, title, description } = props;
  return (
    <div className="choose-card position-relative">
      <div className="choose-card-img d-flex justify-content-center align-items-center">
        <img src={img} alt="choose card image" />
      </div>
      <CardBody className="choose-card-body">
        <CardTitle
          tag="h4"
          className="choose-card-body_title text-capitalize text-center fw-bold"
        >
          {title}
        </CardTitle>
        <CardText className="choose-card-body_description text-capitalize position-relative">
          {description}
        </CardText>
      </CardBody>
    </div>
  );
};

export default ChooseCard;
