import React from 'react';
import { Container } from 'reactstrap';

import HeroBanner from './HeroBanner';
import TitleFirst from './Testament';
import OurSoftware from './OurSoftware';
import OurTestimonial from './OurTestimonial';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <TitleFirst />
        <OurSoftware />
        <OurTestimonial />
      </Container>
    </>
  );
};

export default Home;
