import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import OurTechnologyTabs from './OurTechnologyTabs';

const OurTechnology = () => {
  return (
    <section className="our-technology py-5">
      <Container>
        <SectionTitle color="white" title="our technology" />
        <Row>
          <Col>
            <OurTechnologyTabs />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurTechnology;
