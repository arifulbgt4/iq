import React,{useState} from 'react';
import { ParallaxProvider } from 'react-skrollr';

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
  const [scrollData, setData] = useState(null);
  console.log('setdata',scrollData)
  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 900,
        smoothScrolling: true,
        forceHeight: false,
          render: function (data) {
            setData(data.curTop);
        },
      }}
      getScrollTop={(scrollTop) => console.log('scrollTop', scrollTop)}
    >
      <HeroBanner />
      <WhyChooseUs />
      <GuidingPrinciple />
      <OurFounder />
      <OurTechnology scrollData={ scrollData}/>
      <AboutUs />
      <OurProducts />
      <BlogSection />
      <Testimonial />
      <ContactUs />
    </ParallaxProvider>
  );
};

export default Home;
