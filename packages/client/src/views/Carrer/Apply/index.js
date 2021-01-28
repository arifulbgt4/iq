import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';

import ApplyForm from './ApplyForm';

const scroll = {
  data: {
    'data-top-bottom': '',
    'data-center-center': 'opacity: 1; transform: translate(0%, 0%); ',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 70%);',
  },
};
const Apply = () => {
  return (
    <Row className="px-0 px-md-5 py-5 text-center text-md-start">
      <Col>
        <Parallax data={scroll.data}>
          <h2>How To Apply</h2>
          <p>
            Click the link below to fill the application form. Our applications
            are reviewed every week/every 2 weeks/every month. If you seem like
            the right fit for us, we'll contact you through email regarding
            further details!
          </p>
          <ApplyForm />
        </Parallax>
      </Col>
    </Row>
  );
};

export default Apply;
