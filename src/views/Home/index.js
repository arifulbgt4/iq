import React from 'react';
import { Container } from 'reactstrap';

import HeroBanner from './HeroBanner';
import TitleFirst from './Testament';
import OurSoftware from './OurSoftware';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <TitleFirst />
        <OurSoftware />
      </Container>
    </>
  );
};

export default Home;
