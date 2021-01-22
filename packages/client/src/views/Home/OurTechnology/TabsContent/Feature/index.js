import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';


const Feature = (props) => {
  const { title } = props;
  return (
    <div className="feature">
      <Card
        body
        className="feature-left text-capitalize bg-transparent border-0 text-center text-lg-start"
      >
        <CardSubtitle
          tag="h5"
          className="feature-left-subtitle mb-2 pb-1 text-white"
        >
          {title}
        </CardSubtitle>
        <CardTitle tag="h1" className="feature-left-title pb-1 text-white">
          Example @
        </CardTitle>
        <CardText className="feature-left-text text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's
        </CardText>
        <div className="feature-left-button d-flex mt-3 justify-content-center justify-content-lg-start">
          <Link to="#" className="btn btn-secondary text-white">
            contact us
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Feature;
