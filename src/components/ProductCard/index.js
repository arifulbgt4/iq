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
    <Card className="product shadow">
      <CardBody className="text-center">
        <CardTitle tag="h3" className="">
          Product
        </CardTitle>
        <CardSubtitle tag="h1" className="my-5 ">
          {title}
        </CardSubtitle>
        <h3 className="fw-normal">Details</h3>
        <CardText className="details">{text}</CardText>
        <Button color="primary" outline className="rounded-pill mt-3 px-4">
          Shedule an appointment
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
