import React from 'react';
import { Col, Row } from 'reactstrap';

const SectionTitle = (props) => {
  const { color, title } = props;
  return (
    <Row>
      <Col className="section-title" md={12}>
        <h1
          className={`text-center text-capitalize position-relative mb-5 text-${color}`}
        >
          {title}
        </h1>
      </Col>
    </Row>
  );
};

export default SectionTitle;
