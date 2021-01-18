import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const OurTeam = () => {
  const [open, setOpen] = useState(null);
  const data = useSelector((store) => store.testimonial);
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      console.log(dots);
      return (
        <MagicSliderDots
          // dots={[
          //   <li>
          //     {dots && dots.map((item) =>
          //     )}
          //     {data &&
          //       data.map((items) => (
          //         <img
          //           src="https://image.shutterstock.com/image-vector/vector-simple-male-profile-icon-260nw-1388357696.jpg"
          //           alt=""
          //         />
          //       ))}
          //         <img
          //           src="https://image.shutterstock.com/image-vector/vector-simple-male-profile-icon-260nw-1388357696.jpg"
          //           alt=""
          //         />
          //   </li>,
          // ]}
          dots={dots}
          slick-active
          numDotsToShow={3}
          dotWidth={30}
        />
      );
    },
  };
  return (
    <Row className="mb-5">
      {/* <SectionTitle title="Our Team" /> */}
      <Col md={{ size: 8, offset: 2 }}>
        <Slider {...settings}>
          {data &&
            data.map((items, i) => (
              <div
                key={i}
                className="team-member position-relative text-center mx-5 px-5"
              >
                <p>{items.text}</p>
                <h6>{items.name}</h6>
              </div>
            ))}
        </Slider>
      </Col>
    </Row>
  );
};

export default OurTeam;
