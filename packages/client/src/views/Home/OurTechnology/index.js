import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';
import { useSelector } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import SectionHeader from './SectionHeader';
import Feature from './TabsContent/Feature';

import featureRightImg from 'src/assets/image/ourTechnology/iMac.png';

const OurTechnology = () => {
  const ref = useRef();
  const { data } = useSelector((store) => store.technology);
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
                    <div
                      key={category.id}
                      className={category.id}
                      key={'display' + category.id}
                    >
                      {
                        <ScrollAnimation
                          delay={-500}
                          duration={0.0}
                          animateIn="flipInX"
                          afterAnimatedIn={function afterAnimatedIn() {
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
                {({ style }) => (
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
                              <div
                                key={item.id}
                                className="desktop-item position-absolute"
                              >
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
