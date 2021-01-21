import React from 'react';
import { Row, Col } from 'reactstrap';
import Contact from 'src/assets/image/contactUs/Contact.png';
const index = () => {
  return (
    <>
      <Row>
        <Col lg={8} md={8} sm={12}>
          <div className="tuch-text-area h-100 d-flex align-items-center">
            <div>
              <h1>Get in touch</h1>
              <p>
                Want to get in touch? We'd love to hear from you. Here's how you
                can reach us...
              </p>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <div>
            <img src={Contact} alt="contact" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default index;
