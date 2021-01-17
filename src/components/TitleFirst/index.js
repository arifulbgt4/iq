import React from 'react';
import { Col } from 'reactstrap';

const TitleFirst = (props) => {
  const { title } = props;
  return (
    <Col className="section-title" md={12}>
      <h1 className="text-center my-4 text-primary">{title}</h1>
    </Col>
  );
};

export default TitleFirst;
