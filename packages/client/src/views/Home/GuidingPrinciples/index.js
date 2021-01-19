import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import GuidingPrinciples from 'src/components/GuidingPrinciples';

const GuidingPrinciple = () => {
  const data = useSelector((store) => store.guidings);
  return (
    <section className="guiding-principle">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center py-5">Our Guiding Principles</h2>
          </Col>
          <Col md={12}>
            {data &&
              data.map((item, i) => <GuidingPrinciples key={i} {...item} />)}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuidingPrinciple;
