import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import contactimg from 'src/assets/image/undraw.png';
import ContactForm from 'src/components/ContactForm';

const ContactUs = () => {
  return (
    <Container className="contact">
      <Row className="my-5 align-items-center">
        <Col lg={6} md={12} className="my-4 my--0">
          <img src={contactimg} alt="img" className="img-fluid" />
        </Col>
        <ContactForm />
      </Row>
    </Container>
  );
};

export default ContactUs;
