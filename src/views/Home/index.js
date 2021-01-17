import React from 'react';
import { Container } from 'reactstrap';

import Values from 'src/components/Values';
import AboutUs from './AboutUs';
import HeroBanner from './HeroBanner';
import OurTeam from './OurTeam';
import TitleFirst from './Testament';
import OurSoftware from './OurSoftware';
import BlogPost from './BlogPost';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <TitleFirst />
        <div>
          <h2 className="text-center my-4 titlef">Our Valus</h2>
        </div>
        <Values />
        <AboutUs />
        <OurSoftware />
        <OurTeam />
        <BlogPost />
        <ContactUs />
      </Container>
    </>
  );
};

export default Home;
