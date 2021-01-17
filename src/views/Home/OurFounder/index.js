import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import founder from 'src/assets/image/founder.png';
const OurFounder = () => {
  return (
    <div>
      <h3 className="text-center text-primary">Few Words From Our Founder</h3>
      <Row>
        <Col md={4}>
          <img className="w-100" src={founder} alt="founder" />
        </Col>
        <Col md={8}>
          <div className="text-primary">
            <h1 className="mt-5">"</h1>
            <p className="m-0 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </p>
            <h6>-Narotam</h6>

            <h5 className="text-center mt-4">How It Started / Our History</h5>
            <div className="d-flex justify-content-center">
              <div className="textbottomboder  " />
              <div className="textbottomboder " />
            </div>
            <p className="mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's Lorem Ipsum has been the industry's
              . Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
            <div className="d-flex justify-content-end m-4">
              <Button color="primary">Read more</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurFounder;
