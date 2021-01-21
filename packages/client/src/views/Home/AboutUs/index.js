import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SectionTitle from 'src/components/SectionTitle';

import bgimg1 from 'src/assets/image/vidbg1.png';
import bgimg2 from 'src/assets/image/vidbg2.png';

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
      <Row>
        <Col md={12} className="my-5">
          <div className="d-flex justify-content-center  vdsec ">
            <iframe
              src="https://www.youtube.com/embed/0TImic4N1ko"
              className="border border-0 rounded my-5"
            />
            <img src={bgimg1} alt="bg" className="bgtop" />
            <img src={bgimg2} alt="bg" className="bgbtm" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
