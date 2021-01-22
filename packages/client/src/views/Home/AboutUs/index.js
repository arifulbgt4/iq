import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SectionTitle from 'src/components/SectionTitle';

const AboutUs = () => {
  return (
    <Container className="about-us">
      <SectionTitle
        title="About US"
        description="We are an active investment management firm focused on delivering
          premier integrated financial client portfolio solutions, deploying the
          latest technology to ensure we stay at the forefront of our evolving
          industry."
        border={false}
        color="primary"
      />
      <Row className="mt-2 mt-xl-0 mb-5 mb-xl-0 about-us-row">
        <Col md={12}>
          <div className="d-flex justify-content-center">
            <iframe
              height="330"
              width="530"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              className="my-2 my-md-5 my-xl-0 rounded"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
