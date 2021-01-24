import React from 'react';
import { Col, Row } from 'reactstrap';
import ContactAddr from './ContactAddr';

import ContactForm from 'src/components/ContactForm';
const SendMail = () => {
  return (
    <Row className="my-3 my-md-5">
      <Col sm={12} md={6} lg={6} className="ms-md-auto">
        <ContactAddr />
      </Col>
      <Col sm={12} md={6} lg={6} className="px-3 px-sm-5 px-md-0 px-lg-5">
        <p className="fs-1 text-center">
          Have doubts? Don't Worry just <b>Contact Us.</b>
        </p>
        <ContactForm />
      </Col>
    </Row>
  );
};

export default SendMail;
