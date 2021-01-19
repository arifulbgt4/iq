import React from 'react';
import { Container } from 'reactstrap';

import OurFounder from './OurFounder';
import GuidingPrinciple from './GuidingPrinciples';
import HeroBanner from './HeroBanner';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import BlogSection from './BlogSection';
import OurProducts from './OurProducts';
import WhyChooseUs from './WhyChooseUs';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <WhyChooseUs />
      <Container>
        <GuidingPrinciple />
      </Container>
      <OurFounder />
      <Container>
        <AboutUs />
      </Container>
      <OurProducts />
      <BlogSection />
      <Testimonial />
      <Container>
        <ContactUs />
      </Container>
    </>
  );
};

export default Home;
