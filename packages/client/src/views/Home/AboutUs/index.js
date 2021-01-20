import React from 'react';
import { Col, Row } from 'reactstrap';

import bgimg1 from 'src/assets/image/vidbg1.png';
import bgimg2 from 'src/assets/image/vidbg2.png';

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
      <Col md={12} className="my-5">
        <div className="d-flex justify-content-center  vdsec ">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="border rounded my-5"
          />
          <img src={bgimg1} alt="bg" className="bgtop" />
          <img src={bgimg2} alt="bg" className="bgbtm" />
        </div>
      </Col>
    </Row>
  );
};

export default AboutUs;
