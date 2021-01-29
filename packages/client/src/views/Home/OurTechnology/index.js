import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';
import { useDispatch, useSelector } from 'react-redux';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import SectionHeader from './SectionHeader';
import Feature from './TabsContent/Feature';

import featureRightImg from 'src/assets/image/ourTechnology/iMac.png';

// const categories = [
//   { id: 1, name: 'Feature1', title: 'Feature 1' },
//   { id: 2, name: 'Feature2', title: 'Feature 2' },
//   { id: 3, name: 'Feature3', title: 'Feature 3' },
//   { id: 4, name: 'Feature4', title: 'Feature 4' },
// ];

const OurTechnology = () => {
  const ref = useRef();
  const [imageID, setImageID] = useState(1);
  const { data, loading } = useSelector((store) => store.technology);
  const dispathc = useDispatch();
  // useEffect(() => {
  //   console.log('dd', ref.current.offsetTop);
  // }, [ref]);
  const [desktop, setDesktop] = useState(null);
  return (
    <section ref={ref} className="our-technology py-5 my-5 stop-scrolling">
      <Container className="py-2 py-md-5">
        <SectionHeader />
        <StickyContainer>
          <Row>
            <Col md={6} className="technology-scroll ">
              <div style={{ position: 'relative' }}>
                {data &&
                  data.map((category) => (
                    <div className={category.id} key={'display' + category.id}>
                      {
                        <ScrollAnimation
                          delay={-500}
                          animateIn="flipInX"
                          afterAnimatedIn={function afterAnimatedIn(v) {
                            setDesktop(category.id);
                          }}
                        >
                          <Feature
                            id={category.id}
                            title={category.title}
                            feature={category.feature}
                            description={category.description}
                          />
                        </ScrollAnimation>
                      }
                    </div>
                  ))}
              </div>
            </Col>
            <Col md={6} className="d-none d-md-block">
              <Sticky disableCompensation topOffset={10}>
                {({ style, isSticky }) => (
                  <div style={style} className={`feature-image sticky-image`}>
                    <div className="feature-right m-0 position-relative">
                      <img
                        src={featureRightImg}
                        alt="feature right image"
                        className="img-fluid"
                      />
                      {Array.isArray(data) &&
                        data.map((item) => {
                          const image = process.env.API_URL + item.image.url;
                          return (
                            item.id === desktop && (
                              <div className="desktop-item position-absolute">
                                <img src={image} alt="" />
                              </div>
                            )
                          );
                        })}
                    </div>
                  </div>
                )}
              </Sticky>
            </Col>
          </Row>
        </StickyContainer>
      </Container>
    </section>
  );
};

export default OurTechnology;
