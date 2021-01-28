import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';

import contactimg from 'src/assets/image/undraw.png';
import ContactForm from 'src/components/ContactForm';

const scroll = {
  data2: {
    'data-top-bottom': 'opacity: 1;',
    'data-center-center': 'opacity: 1;transform: translate(0, 0)',
    'data-bottom-top': 'opacity: 0;transform: translate(-20%, 0%);',
  },
};

const ContactUs = () => {
  return (
    <Container className="contact">
      <Row className="my-5 align-items-center">
        <Col lg={6} md={12} className="my-4 my--0">
          <Parallax data={scroll.data2}>
            <img src={contactimg} alt="img" className="img-fluid" />
          </Parallax>
        </Col>
        <ContactForm />
      </Row>
    </Container>
  );
};

export default ContactUs;
