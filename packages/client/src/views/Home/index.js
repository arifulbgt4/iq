import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { ParallaxProvider } from 'react-skrollr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.addEventListener('scroll', checkScrollTop);

  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 900,
        smoothScrolling: true,
        forceHeight: false,
      }}
      getScrollTop={(scrollTop) => console.log('scrollTop', scrollTop)}
    >
      <HeroBanner />
      <WhyChooseUs />
      <GuidingPrinciple />
      <OurFounder />
      <OurTechnology />
      <AboutUs />
      <OurProducts />
      <BlogSection />
      <Testimonial />
      <ContactUs />
      <div className="d-flex justify-content-end me-5">
        <Button
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
