import React from 'react';
import { Container } from 'reactstrap';

import HeroBanner from './HeroBanner';
import TitleFirst from './Testament';

const Home = () => {
  return (
    <>
      <div>
        <HeroBanner />
      </div>
      <Container>
        <TitleFirst />
      </Container>
    </>
  );
};

export default Home;
