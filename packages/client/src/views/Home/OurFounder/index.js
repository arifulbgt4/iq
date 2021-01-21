import React from 'react';
import { Container } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import Founder from './Founder';

const OurFounder = () => {
  return (
    <section className="our-founder">
      <Container>
        <SectionTitle title="Few Words From Our Founder" border={false} />
        <Founder />
      </Container>
    </section>
  );
};

export default OurFounder;
