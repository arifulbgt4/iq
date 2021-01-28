import React from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';

import SectionTitle from 'src/components/SectionTitle';
import StepsToChoose from 'src/containers/StepsToChoose';

const WhyChooseUs = () => {
  const { data } = useSelector((store) => store.chooseUsHeader);

  return (
    <section className="why-choose-us py-4 py-sm-5">
      <Container>
        <SectionTitle
          title={data?.title}
          color="primary"
          description={data?.description}
        />
        <StepsToChoose />
      </Container>
    </section>
  );
};

export default WhyChooseUs;
