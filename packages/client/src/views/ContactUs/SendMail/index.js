import React from 'react';
import { Col, Row } from 'reactstrap';
import ContactAddr from './ContactAddr';

import ContactForm from './ContactForm';
const SendMail = () => {
  return (
    <Row className="my-5">
      <Col sm={12} md={6} lg={6} className="ms-md-auto">
        <ContactAddr />
      </Col>
      <Col sm={12} md={6} lg={6} className="px-5">
        <p className="fs-1 text-primary ">
          Have doubts? Don't Worry just <b>Contact Us.</b>
        </p>
        <ContactForm />
      </Col>
    </Row>
  );
};

export default SendMail;
