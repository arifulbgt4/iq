import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const ChooseCard = (props) => {
  const { id, img, title, description } = props;
  return (
    <div className="choose-card">
      <div className="choose-card-img text-center">
        <img src={img} alt="choose card image" />
      </div>
      <CardBody>
        <CardTitle tag="h4" className="text-capitalize text-center">
          {title}
        </CardTitle>
        <CardText tag="p" className="text-capitalize position-relative">
          {description}
        </CardText>
      </CardBody>
    </div>
  );
};

export default ChooseCard;
