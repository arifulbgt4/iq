import React from 'react';
import { Container } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import StepsToChoose from 'src/containers/StepsToChoose';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5">
      <Container>
        <SectionTitle
          title="why choose us"
          color="primary"
          description="Diligently striving towards excellence, we are here to get the most for your money."
        />
        <StepsToChoose />
      </Container>
    </section>
  );
};

export default WhyChooseUs;
