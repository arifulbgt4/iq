import React from 'react';
import { Col, Row } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CustomDot from 'src/components/CustomDots';
import SectionTitle from 'src/components/SectionTitle';
import { useSelector } from 'react-redux';

const Testimonail = () => {
  const data = useSelector((store) => store.testimonial);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 576 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <SectionTitle title="Our Team" />
      <Row className="mb-5">
        <Col md={{ size: 8, offset: 2 }}>
          <Carousel
            className="our-team py-5"
            responsive={responsive}
            infinite
            // autoPlay
            autoPlaySpeed={4000}
            slidesToSlide={1}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            showDots
            itemClass="ps-5 justify-content-center"
            yarn
            dev
            customDot={<CustomDot />}
          >
            {data &&
              data.map((items, i) => (
                <div
                  key={i}
                  className="team-member position-relative text-center pt-5"
                >
                  <p>{items.text}</p>
                  <h5>{items.name}</h5>
                </div>
              ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default Testimonail;
