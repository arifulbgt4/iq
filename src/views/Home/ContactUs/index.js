import React from 'react';
import { Col, Row } from 'reactstrap';

import ContactForm from './ContactForm';
import contactimg from 'src/assets/image/undraw.png';

const ContactUs = () => {
  return (
    <Col md={{ size: 10, offset: 1 }}>
      <Row>
        <Col md={6}>
          <img src={contactimg} alt="img" className="w-100 pe-4 " />
        </Col>
        <Col md={6}>
          <p className="fs-1 text-primary">
            {' '}
            Have doubts? Don't Worry just <b>Contact Us.</b>
          </p>
          <ContactForm />
        </Col>
      </Row>
    </Col>
  );
};

export default ContactUs;
