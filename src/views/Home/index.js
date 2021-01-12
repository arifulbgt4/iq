import React from 'react';
import { Container } from 'reactstrap';
import AboutUs from './AboutUs';

import HeroBanner from './HeroBanner';
import OurTeam from './OurTeam';
import TitleFirst from './Testament';
import OurSoftware from './OurSoftware';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <TitleFirst />
        <AboutUs />
        <OurSoftware />
        <OurTeam />
      </Container>
    </>
  );
};

export default Home;
