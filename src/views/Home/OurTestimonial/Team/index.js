import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import persionpic from 'src/assets/image/testimonial/persion_pic.png';
import colonicon from 'src/assets/image/testimonial/colonicon.png';
import playbutton from 'src/assets/image/testimonial/playbutton.png';
import stars from 'src/assets/image/testimonial/stars.png';

const Team = () => {
  return (
    <div className="card-area">
      <Row>
        <Col md={6}>
          <div className="prof-img">
            <img src={persionpic} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <div className="text-center p-3 text-area">
            <img className="pt-3 pb-4" src={stars} alt="stars" />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{' '}
            </p>
            <div className="d-flex justify-content-center mt-2 mb-2">
              <div className="txt-b-border"></div>
            </div>
            <h1 className="heading-txt">Jone Jaksion</h1>
            <p className="intro-text mb-1">CEO & Head of Digital Marketing </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
