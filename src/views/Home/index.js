import React from 'react';
import { Container } from 'reactstrap';

// import Values from 'src/components/Values';
// import OurTeam from './OurTeam';
// import TitleFirst from './Testament';
// import OurSoftware from './OurSoftware';
// import BlogPost from './BlogPost';

import OurFounder from './OurFounder';
import GuidingPrinciple from './GuidingPrinciples';
import HeroBanner from './HeroBanner';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import BlogSection from './BlogSection';
import OurProducts from './OurProducts';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container>
        <GuidingPrinciple />
        <OurFounder />
        <AboutUs />
      </Container>
      <OurProducts />
      <BlogSection />
      <Container>
        <ContactUs />
      </Container>

      {/* <Container>
        <TitleFirst />
        <div>
          <h2 className="text-center my-4 titlef">Our Valus</h2>
        </div>
        <Values />
        <OurSoftware />
        <OurTeam />
        <BlogPost />
      </Container>
        <BlogPost />
      </Container> */}
    </>
  );
};

export default Home;
