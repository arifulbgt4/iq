import React from 'react';
import { Container } from 'reactstrap';
import AboutUs from './AboutUs';

import HeroBanner from './HeroBanner';
import OurTeam from './OurTeam';
import TitleFirst from './Testament';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <TitleFirst />
        <AboutUs />
        <OurTeam />
      </Container>
    </>
  );
};

export default Home;
