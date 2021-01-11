import React from 'react';
import { Container } from 'reactstrap';
import HeroBanner from './HeroBanner';
import TitleFirst from './Testament';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <TitleFirst />
      </Container>
    </>
  );
};

export default Home;
