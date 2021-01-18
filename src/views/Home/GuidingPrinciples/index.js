import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import GuidingPrinciples from 'src/components/GuidingPrinciples';

const GuidingPrinciple = () => {
  const data = useSelector((store) => store.guidings);
  return (
    <Row>
      <Col md={12}>
        <h2 className="text-center py-5">Our Guiding Principles</h2>
      </Col>
      <Col md={12}>
        {data && data.map((item, i) => <GuidingPrinciples key={i} {...item} />)}
      </Col>
    </Row>
  );
};

export default GuidingPrinciple;
