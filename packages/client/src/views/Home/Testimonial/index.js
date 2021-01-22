import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CustomDot from 'src/components/CustomDots';
import SectionTitle from 'src/components/SectionTitle';
import { useSelector } from 'react-redux';

const Testimonial = () => {
  const data = useSelector((store) => store.testimonial);
  console.log(data);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 576 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="testimonial position-relative">
      <Container>
        <SectionTitle
          title="Testimonial"
          description='"Our vectory is in our client contentment and success"'
          border={false}
        />
        <Row className="mb-0 mb-md-5">
          <Col md={{ size: 8, offset: 2 }}>
            <Carousel
              className="testimonial-slider"
              responsive={responsive}
              infinite
              // autoPlay
              autoPlaySpeed={4000}
              slidesToSlide={1}
              customTransition="transform 1000ms ease-in-out"
              transitionDuration={1000}
              arrows={true}
              showDots
              itemClass="justify-content-center"
              customDot={<CustomDot />}
            >
              {data &&
                data.map((items, i) => (
                  <div
                    key={i}
                    className="team-member position-relative text-center pt-5"
                  >
                    <h1 className="text-center position-relative mb-5 mt-3" />
                    <p className="pt-5 px-3 px-sm-5">{items.text}</p>
                    <h3>{items.name}</h3>
                  </div>
                ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
