import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButtonGroupAsArrows from 'src/components/CustomArrows';

const Slider = (props) => {
  const {
    children,
    desktop = 1,
    tablet = 1,
    mobile = 1,
    infinite = true,
    autoPlay = true,
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
      autoPlay={autoPlay}
      autoPlaySpeed={4000}
      slidesToSlide={1}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={1000}
      arrows={false}
      showDots
      itemClass="px-2 justify-content-center"
      customButtonGroup={<CustomButtonGroupAsArrows />}
    >
      {children}
    </Carousel>
  );
};

export default Slider;