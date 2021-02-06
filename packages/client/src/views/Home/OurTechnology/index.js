import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useStickyroll } from '@stickyroll/hooks';
import Sticky from 'react-sticky-el';
import { useSelector } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import SectionHeader from './SectionHeader';
import Feature from './TabsContent/Feature';

import featureRightImg from 'src/assets/image/ourTechnology/iMac.png';

const headlines = [
  'Hello World!',
  'Hello React!',
  'Hello Stickyroll!',
  "Let's continue with the next lesson!",
];

const OurTechnology = () => {
  const { data } = useSelector((store) => store.technology);
  const [desktop, setDesktop] = useState(null);

  const [
    wrapper,
    { height, currentPage, pageCount, pageIndex, progress },
  ] = useStickyroll({
    pages: data,
  });

  const image = process.env.API_URL + data[pageIndex].image.url;
  return (
    <section
      ref={wrapper}
      style={{ height }}
      className="our-technology py-5 my-5 stop-scrolling sticky-wrap"
    >
      <Container className="py-2 py-md-5">
        <SectionHeader />
        <Sticky boundaryElement=".sticky-wrap">
          <Row>
            <Col md={6} className="technology-scroll ">
              <div style={{ position: 'relative' }}>
                <Feature
                  id={pageIndex}
                  title={data[pageIndex].title}
                  feature={data[pageIndex].feature}
                  description={data[pageIndex].description}
                  image={image}
                />
              </div>
            </Col>
            <Col className="col-md-6 d-none d-md-block">
              <div className={`feature-image sticky-image`}>
                <div className="feature-right m-0 position-relative">
                  <img
                    src={featureRightImg}
                    alt="feature right image"
                    className="img-fluid"
                  />

                  <div  className="desktop-item position-absolute">
                    <img src={image} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Sticky>
      </Container>
    </section>
  );
};

export default OurTechnology;
