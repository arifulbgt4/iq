import React from 'react';
import { Col, Row } from 'reactstrap';

const SectionTitle = (props) => {
  const { color, title, description } = props;
  return (
    <Row>
      <Col className="section-title" md={12}>
        <h1
          className={`text-center text-capitalize fw-bold position-relative ${
            description ? 'heading' : 'mb-5'
          } text-${color}`}
        >
          {title}
        </h1>
        {description && (
          <p className={`text-${color} text-capitalize text-center`}>
            {description}
          </p>
        )}
      </Col>
    </Row>
  );
};

export default SectionTitle;
