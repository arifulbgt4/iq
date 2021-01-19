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
import OurTechnology from './OurTechnology';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <WhyChooseUs />
      <GuidingPrinciple />
      <OurFounder />
      <OurTechnology />
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
