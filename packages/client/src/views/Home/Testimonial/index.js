import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Slider from 'react-slick';

import { useSelector } from 'react-redux';
import { Parallax } from 'react-skrollr';

import SectionTitle from 'src/components/SectionTitle';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; ',
    'data-center-center': 'opacity: 1; transform: translate(0%, 0%);',
    'data-bottom-top': 'opacity: 0;transform: translate(-13%, 0%);',
  },
  data2: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, 0%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 100%);',
  },
  data3: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, 0%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 20%);',
  },
};

const Testimonial = () => {
  const { data } = useSelector((store) => store.testimonial);
  const { data: testimonialHeader } = useSelector(
    (store) => store.testimonialHeader
  );

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //  constructor(props) {
  //     super(props);
  //     this.state = {
  //       nav1: null,
  //       nav2: null
  //     };
  //   }

  useEffect(() => {
    setNav1(slider1.current);
  }, [slider1]);

  useEffect(() => {
    setNav2(slider2.current);
  }, [slider2]);

  return (
    <section className="testimonial position-relative">
      <Container>
        <SectionTitle
          title={testimonialHeader?.title}
          description={testimonialHeader?.description}
          border={false}
        />
        <Row className="mb-0 mb-md-5">
          <Col md={12} lg={{ size: 8, offset: 2 }}>
            <Slider
              asNavFor={nav2}
              ref={slider1}
              slidesToShow={3}
              centerMode
              className="center"
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
            </Slider>
            <Slider asNavFor={nav1} ref={slider2}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
            </Slider>
          </Col>
          {/* <Col md={12} lg={{ size: 8, offset: 2 }}>
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
            >
              {data &&
                data.map((items) => (
                  <div
                    key={items.id}
                    className="team-member position-relative text-center pt-5"
                  >
                    <Parallax data={scroll.data3}>
                      <h1 className="text-center position-relative mb-3 mb-sm-5 mt-3">
                        {items.title}
                      </h1>
                    </Parallax>
                    <Parallax data={scroll.data}>
                      <p className="pt-5 px-3 px-sm-5">{items.description}</p>
                    </Parallax>
                    <Parallax data={scroll.data2}>
                      <h3>{items.name}</h3>
                    </Parallax>
                  </div>
                ))}
            </Slider>
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {data &&
                data.map((item) => {
                  const image = process.env.API_URL + item.image.url;
                  return (
                    <div>
                      <img src={image} alt="" />
                    </div>
                  );
                })}
            </Slider>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
