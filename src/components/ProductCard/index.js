import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const ProductCard = (props) => {
  const { title, text } = props;
  return (
    <Card className="product">
      <CardBody className="text-center p-4">
        <CardTitle tag="h4" className="text-primary">
          Product
        </CardTitle>
        <CardSubtitle tag="h2" className="my-5 text-primary">
          {title}
        </CardSubtitle>
        <h4 className="fw-normal">Details</h4>
        <CardText className="details">{text}</CardText>
        <Button color="primary" outline className="rounded-pill mt-3 px-4">
          Shedule an appointment
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
