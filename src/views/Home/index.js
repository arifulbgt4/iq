import React, { useEffect } from 'react';

import { Container } from 'reactstrap';
import Values from 'src/components/Values';
import LocomotiveScroll from 'locomotive-scroll';
import AboutUs from './AboutUs';
import HeroBanner from './HeroBanner';
import OurTeam from './OurTeam';
import TitleFirst from './Testament';
import OurSoftware from './OurSoftware';

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.App'),
      // lerp: 0.1,
      smooth: true,
      // getSpeed: true,
      // repeat: true,
      reloadOnContextChange: true,
    });
    console.log(scroll);
  });

  return (
    <>
      <HeroBanner />
      <Container className="App" data-scroll data-scroll-speed={3}>
        <TitleFirst />
        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          <h2 className="text-center my-4 titlef">Our Valus</h2>
        </div>
        <Values />
        <AboutUs />
        <OurSoftware />
        <OurTeam />
      </Container>
    </>
  );
};

export default Home;
