import React from 'react';
import { Col } from 'reactstrap';

const SectionTitle = ({ title }) => {
  return (
    <Col className="section-title" md={12}>
      <h1 className="text-center text-capitalize position-relative">{title}</h1>
    </Col>
  );
};

export default SectionTitle;
