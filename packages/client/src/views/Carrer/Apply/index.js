import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const Apply = () => {
  return (
    <Row className="px-0 px-md-5 py-5 text-center text-md-start">
      <Col>
        <h2>How To Apply</h2>
        <p>
          Click the link below to fill the application form. Our applications
          are reviewed every week/every 2 weeks/every month. If you seem like
          the right fit for us, we'll contact you through email regarding
          further details!
        </p>
        <Button
          color="primary"
          className=" d-inline-block d-md-block  ms-auto rounded-pill px-5"
        >
          Apply Now
        </Button>
      </Col>
    </Row>
  );
};

export default Apply;
