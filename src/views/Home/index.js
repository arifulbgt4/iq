import React from 'react';
import { Container } from 'reactstrap';

// import Values from 'src/components/Values';
// import AboutUs from './AboutUs';
// import OurTeam from './OurTeam';
// import TitleFirst from './Testament';
// import OurSoftware from './OurSoftware';
// import BlogPost from './BlogPost';
import HeroBanner from './HeroBanner';
import BlogSection from './BlogSection';
import OurProducts from './OurProducts';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <OurProducts />
      <Container>
        <BlogSection />
      </Container>

      {/* <Container>
        <TitleFirst />
        <div>
          <h2 className="text-center my-4 titlef">Our Valus</h2>
        </div>
        <Values />
        <AboutUs />
        <OurSoftware />
        <OurTeam />
      </Container>
        <BlogPost />
      </Container> */}
    </>
  );
};

export default Home;
