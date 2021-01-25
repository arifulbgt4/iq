import React from 'react';
import { Col, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 0.5;transform: scale(1.5);',
    'data-center-center': 'opacity: 0.8;transform: scale(1.2)',
    'data-bottom-top': 'opacity:0.2;transform: scale(0.8);',
  },
};
const SectionTitle = (props) => {
  const { color, title, description, border = true } = props;
  return (
    <Row className="section-title">
      <Col md={12}>
        <Parallax data={scroll.data}>
          <h1
            className={`text-center text-capitalize fw-bold ${
              border ? 'position-relative border-line' : 'mb-0 pb-2'
            } ${description ? 'heading' : 'mb-3 mb-sm-5'} text-${color}`}
          >
            {title}
          </h1>
        </Parallax>
      </Col>

      {description && (
        <Col md={{ size: 10, offset: 1 }}>
          <p className={`text-${color} text-capitalize text-center PX-5`}>
            {description}
          </p>
        </Col>
      )}
    </Row>
  );
};

export default SectionTitle;
