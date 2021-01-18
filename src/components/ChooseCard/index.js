import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const ChooseCard = (props) => {
  const { id, img, title, description } = props;
  return (
    <Card className="choose-card">
      <div className="choose-card-img">
        <CardImg top width="100%" src={img} alt="choose card image" />
      </div>
      <CardBody>
        <CardTitle></CardTitle>
      </CardBody>
    </Card>
  );
};

export default ChooseCard;
