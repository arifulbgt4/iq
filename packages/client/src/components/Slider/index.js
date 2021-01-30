import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = (props) => {
  const {
    children,
    desktop = 1,
    tablet = 1,
    mobile = 1,
    infinite = true,
    className = '',
  } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: desktop,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 576 },
      items: tablet,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: mobile,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      className={className}
      responsive={responsive}
      infinite={infinite}
      autoPlaySpeed={4000}
      slidesToSlide={1}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={1000}
      arrows={true}
      showDots={false}
      itemClass=" justify-content-center"
    >
      {children}
    </Carousel>
  );
};

export default Slider;
