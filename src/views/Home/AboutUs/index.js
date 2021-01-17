import React from 'react';
import { Col, Row } from 'reactstrap';

import TitleFirst from 'src/components/TitleFirst';
import Slider from 'src/components/Slider';

const AboutUs = () => {
  return (
    <Row className="my-5 about-us">
      <TitleFirst title="About US" />
      <Col md={{ size: 10, offset: 1 }}>
        <p className="text-center fs-4 mx-5 text-primary">
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
        <Slider className="about-us-slider pt-4 pb-5">
          <div className="slider-content">
            <h4>Education and research</h4>
            <h5 className="fw-normal mt-5">
              That is another testament to the fact that investing without an
              education and research will ultimately ledebts that seem sensible
              during periods of prosperity. When a crisis comes, individuals,
              companies, and even governments that ran up debts during the boom
              usually suffer the most.
            </h5>
          </div>
          <div className="slider-content">
            <h4>Education and research</h4>
            <h5 className="fw-normal mt-5">
              That is another testament to the fact that investing without an
              education and research will ultimately ledebts that seem sensible
              during periods of prosperity. When a crisis comes, individuals,
              companies, and even governments that ran up debts during the boom
              usually suffer the most.
            </h5>
          </div>
          <div className="slider-content">
            <h4>Education and research</h4>
            <h5 className="fw-normal mt-5">
              That is another testament to the fact that investing without an
              education and research will ultimately ledebts that seem sensible
              during periods of prosperity. When a crisis comes, individuals,
              companies, and even governments that ran up debts during the boom
              usually suffer the most.
            </h5>
          </div>
        </Slider>
      </Col>
    </Row>
  );
};

export default AboutUs;
