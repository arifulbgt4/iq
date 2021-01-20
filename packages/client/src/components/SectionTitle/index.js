import React from 'react';
import { Col, Row } from 'reactstrap';

const SectionTitle = (props) => {
  const { color, title, description, border = true } = props;
  return (
    <Row>
      <Col className="section-title" md={12}>
        <h1
          className={`text-center text-capitalize fw-bold ${
            border ? 'position-relative border-line' : 'mb-0 pb-2'
          } ${description ? 'heading' : 'mb-5'} text-${color}`}
        >
          {title}
        </h1>
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
