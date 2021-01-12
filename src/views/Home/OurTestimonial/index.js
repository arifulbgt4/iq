import React from 'react';
import Team from './Team';
import dottetline from 'src/assets/image/testimonial/dottetline.png';
const OurTestimonial = () => {
  return (
    <>
      <Team />
      <div className="text-center">
        <img src={dottetline} alt="" />
      </div>
    </>
  );
};

export default OurTestimonial;
