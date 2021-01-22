import React from 'react';
import { Row, Col } from 'reactstrap';
import Contact from 'src/assets/image/contactUs/Contact.png';
const index = () => {
  return (
    <>
      <Row className="align-items-center text-center text-md-start mt-4 mt-md-0">
        <Col lg={8} md={8} sm={12}>
          <div className="tuch-text-area d-flex py-5 py-md-0">
            <div>
              <h1>Get in touch</h1>
              <p>
                Want to get in touch? We'd love to hear from you. Here's how you
                can reach us...
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12} className="d-none d-sm-flex">
          <div>
            <img src={Contact} alt="contact img-fluid" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default index;
