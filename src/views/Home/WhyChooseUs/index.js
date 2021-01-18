import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <Container>
        <SectionTitle
          title="why choose us"
          color="primary"
          description="Diligently striving towards excellence, we are here to get the most for your money."
        />
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
