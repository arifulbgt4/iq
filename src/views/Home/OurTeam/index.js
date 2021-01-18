import React from 'react';
import { Col, Row } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CustomDot from 'src/components/CustomDots';
import SectionTitle from 'src/components/SectionTitle';
import { useSelector } from 'react-redux';

const OurTeam = () => {
  const data = useSelector((store) => store.testimonial);
  console.log(data);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
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
    <Row className="mb-5">
      {/* <SectionTitle title="Our Team" /> */}
      <Col>
        <Carousel
          className="our-team"
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          slidesToSlide={1}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          arrows={false}
          showDots
          itemClass="ps-5 justify-content-center"
          // customButtonGroup={<CustomButtonGroupAsArrows />}
          customDot={<CustomDot />}
        >
          {data &&
            data.map((items, i) => (
              <div key={i} className="team-member position-relative">
                <div className="ripple" />
                <figure className="d-inline-block border p-2 rounded-circle position-relative">
                  <img
                    src={items.img}
                    alt="profile"
                    className="rounded-circle border p-1 bg-white"
                  />
                </figure>
                {/* <div className="member-info position-absolute shadow-sm p-3">
                  <div className="title d-flex justify-content-between position-relative">
                    <span>Hi</span>{' '}
                    <FontAwesomeIcon className="text-danger" icon={faHeart} />{' '}
                  </div>
                  <h6 className="mb-1">{items.name}</h6>
                  <p className="mb-0">{items.jobPosition}</p>
                </div> */}
              </div>
            ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default OurTeam;
