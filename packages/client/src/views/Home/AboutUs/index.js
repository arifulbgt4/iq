import React from 'react';
import { Col, Row } from 'reactstrap';

import TitleFirst from 'src/components/TitleFirst';

const AboutUs = () => {
  return (
    <Row className="my-5 about-us">
      <TitleFirst title="About US" />
      <Col md={{ size: 10, offset: 1 }}>
        <p className="text-center fs-5 mx-5 text-primary">
          We are an active investment management firm focused on delivering
          premier integrated financial client portfolio solutions, deploying the
          latest technology to ensure we stay at the forefront of our evolving
          industry.
        </p>
      </Col>
      <Col md={12}>
        <div className="d-flex justify-content-center">
          <iframe
            height="330"
            width="530"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="my-5 rounded"
          />
        </div>
      </Col>
    </Row>
  );
};

export default AboutUs;
