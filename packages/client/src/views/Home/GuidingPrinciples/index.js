import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import GuidingPrinciples from 'src/components/GuidingPrinciples';
import SectionTitle from 'src/components/SectionTitle';

const GuidingPrinciple = () => {
  const data = useSelector((store) => store.guidings);
  return (
    <section className="guiding-principle">
      <Container>
        <SectionTitle title="Our Guiding Principles" border={false} />
        <Row>
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
