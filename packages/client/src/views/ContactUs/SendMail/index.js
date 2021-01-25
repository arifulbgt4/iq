import React from 'react';
import { Col, Row } from 'reactstrap';
import ContactAddr from './ContactAddr';

import ContactForm from 'src/components/ContactForm';
const SendMail = () => {
  return (
    <Row className="my-3 my-md-5">
      <Col sm={12} md={12} lg={6} className="ms-md-auto">
        <ContactAddr />
      </Col>
      <ContactForm />
    </Row>
  );
};

export default SendMail;
