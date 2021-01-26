import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import MoreDetails from 'src/components/ReadMore';

const BlogItem = (props) => {
  const { image, date, title, description, id } = props;

  const { url } = useRouteMatch();

  return (
    <Card className="mb-6 blog-item">
      <CardImg
        top
        src={image}
        alt="blog"
        className="img-fluid"
        height="200px"
      />
      <CardBody className="px-6 py-7">
        <CardText className="text-primary mb-3 text-uppercase">{date}</CardText>
        <CardTitle tag="h3" className="font-weight-normal text-capitalize mb-4">
          {title}
        </CardTitle>
        <MoreDetails text={description} maxLength={100} id={id} />
      </CardBody>
    </Card>
  );
};

export default BlogItem;
