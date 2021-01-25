import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fatchchooseUsHeader } from 'src/state/ducks/whyChooseUs';
import SectionTitle from 'src/components/SectionTitle';
import StepsToChoose from 'src/containers/StepsToChoose';

const WhyChooseUs = () => {
  const { data, loading } = useSelector((store) => store.chooseUsHeader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchchooseUsHeader());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }

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
