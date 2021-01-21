import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const Apply = () => {
  return (
    <Row className="px-5 py-5">
      <Col>
        <h2>How To Apply</h2>
        <p className="text-primary">
          Click the link below to fill the application form. Our applications
          are reviewed every week/every 2 weeks/every month. If you seem like
          the right fit for us, we'll contact you through email regarding
          further details!
        </p>
        <Button color="primary" className=" d-block ms-auto rounded-pill px-5">
          Apply Now
        </Button>
      </Col>
    </Row>
  );
};

export default Apply;
