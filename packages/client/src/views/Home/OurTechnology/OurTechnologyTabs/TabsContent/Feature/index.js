import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Row, Col, CardSubtitle } from 'reactstrap';

import featureRightImg from 'src/assets/image/ourTechnology/iMac.png';

const Feature = () => {
  return (
    <div className="feature">
      <Row>
        <Col sm="6" className="d-flex align-items-center">
          <Card
            body
            className="feature-left text-capitalize bg-transparent text-white border-0"
          >
            <CardSubtitle tag="h5" className="feature-left-subtitle mb-2 pb-1">
              feature 1
            </CardSubtitle>
            <CardTitle tag="h1" className="feature-left-title pb-1">
              Example @
            </CardTitle>
            <CardText className="feature-left-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </CardText>
            <div className="feature-left-button d-flex mt-3">
              <Link to="#" className="btn btn-secondary text-white">
                contact us
              </Link>
            </div>
          </Card>
        </Col>
        <Col sm="6">
          <figure className="feature-right m-0">
            <img
              src={featureRightImg}
              alt="feature right image"
              className="img-fluid"
            />
          </figure>
        </Col>
      </Row>
    </div>
  );
};

export default Feature;
