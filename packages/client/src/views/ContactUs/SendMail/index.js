import React from 'react';
import { Col, Row } from 'reactstrap';
import ContactAddr from './ContactAddr';

import ContactForm from './ContactForm';
const SendMail = () => {
  return (
    <Row className="my-5">
      <Col className="col-md-5 ms-md-auto">
        <ContactAddr />
      </Col>
      <Col className="px-5 col-md-5 me-md-auto">
        <p className="fs-1 text-primary ">
          Have doubts? Don't Worry just <b>Contact Us.</b>
        </p>
        <ContactForm />
      </Col>
    </Row>
  );
};

export default SendMail;
