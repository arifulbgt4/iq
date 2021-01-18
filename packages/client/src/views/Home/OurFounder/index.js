import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import founder from 'src/assets/image/founder.png';

const OurFounder = () => {
  return (
    <Row className="align-items-center">
      <Col md={12}>
        <h3 className="text-center text-primary mb-0">
          Few Words From Our Founder
        </h3>
      </Col>
      <Col md={4}>
        <img className="img-fluid" src={founder} alt="founder" />
      </Col>
      <Col md={8}>
        <div className="text-primary">
          <h1 className="mt-5">"</h1>
          <p className="m-0 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's
          </p>
          <h6>-Narotam</h6>

          <h5 className="text-center mt-4">How It Started / Our History</h5>
          <div className="d-flex justify-content-center">
            <div className="textbottomboder  " />
            <div className="textbottomboder " />
          </div>
          <p className="mt-5 d-inline-block mb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's Lorem Ipsum has been the industry's . Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <div className="text-end">
            <Link to="#" className="ms-5 mt-2 text-white bg-primary px-4 py-2">
              Read more
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default OurFounder;
