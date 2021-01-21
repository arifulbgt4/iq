import React from 'react';
import { Col, Row } from 'reactstrap';

import contactimg from 'src/assets/image/undraw.png';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <Row className="my-5 align-items-center">
      <Col lg={6} md={6} className="my-4 my-lg-0">
        <img src={contactimg} alt="img" className="img-fluid" />
      </Col>
      <Col lg={6} md={6} className="px-2 px-lg-5">
        <p className="fs-1 text-primary">
          Have doubts? Don't Worry just <b>Contact Us.</b>
        </p>
        <ContactForm />
      </Col>
    </Row>
  );
};

export default ContactUs;
