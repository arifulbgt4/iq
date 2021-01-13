import React from 'react';
import { Card, CardHeader, CardBody, CardImg } from 'reactstrap';
import cardhead from 'src/assets/image/cardhead.png';
const ValuesCard = () => {
  return (
    <div className="hover-cd mt-4">
      <Card className="values-card">
        <CardImg top width="100%" src={cardhead} alt="Card image cap" />
        <CardHeader className="cd-header">Investing</CardHeader>
        <CardBody className="text-secondary">
          Wide diversification is only required when investors do not understand
          what they are doing.
        </CardBody>
      </Card>
    </div>
  );
};

export default ValuesCard;
