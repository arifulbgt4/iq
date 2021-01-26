import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Sticky, StickyContainer } from 'react-sticky';

import SectionHeader from './SectionHeader';
import Feature from './TabsContent/Feature';

import featureRightImg from 'src/assets/image/ourTechnology/iMac.png';

const categories = [
  { id: 1, name: 'Feature1', title: 'Feature 1' },
  { id: 2, name: 'Feature2', title: 'Feature 2' },
  { id: 3, name: 'Feature3', title: 'Feature 3' },
  { id: 4, name: 'Feature4', title: 'Feature 4' },
];
const OurTechnology = () => {
  const prevScrollY = useRef(0);
  const ref = useRef();
  const [goingUp, setGoingUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (ref.current.offsetTop <= currentScrollY) {
        // window.scrollTo(0, ref.current.offsetTop + )
        // console.log('object', ref.current.offsetTop, currentScrollY);
      }
      // if (prevScrollY.current < currentScrollY && goingUp) {
      //   setGoingUp(false);
      // }
      // if (prevScrollY.current > currentScrollY && !goingUp) {
      //   setGoingUp(true);
      // }

      // prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY, ref]);

  return (
    <section ref={ref} className="our-technology py-5 my-5 stop-scrolling">
      <Container className="py-2 py-md-5">
        <SectionHeader />
        <Row>
          <Col md={12}>
            {/* <StickyContainer>
                <Sticky disableCompensation topOffset={0}>
                  {({ style, isSticky }) => (
                    <div
                      style={style}
                      className={`technology-nav  ${
                        isSticky ? 'sticky-nav' : 'non-sticky position-sticky'
                      }`}
                    >
                      <ul>
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            style={{
                              display: 'inline-block',
                            }}
                            ref={this[category.id]}
                          >
                            <Link
                              activeClass="activeCategoryLink"
                              className={category.id}
                              to={category.id.toString()}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={-50}
                              onSetActive={() =>
                                this.scrollToCategory(category.id)
                              }
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Sticky>
                <StickyContainer> */}
            <StickyContainer>
              <Row>
                <Col md={6} className="technology-scroll ">
                  <div style={{ position: 'relative' }}>
                    {categories.map((category) => (
                      <div
                        name={category.id.toString()}
                        className={category.id}
                        key={'display' + category.id}
                      >
                        {<Feature id={category.id} title={category.title} />}
                      </div>
                    ))}
                  </div>
                </Col>
                <Col md={6} className="d-none d-md-block">
                  <Sticky disableCompensation topOffset={10}>
                    {({ style, isSticky }) => (
                      <div
                        style={style}
                        className={`feature-image sticky-image`}
                      >
                        <figure className="feature-right m-0">
                          <img
                            src={featureRightImg}
                            alt="feature right image"
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    )}
                  </Sticky>
                </Col>
              </Row>
            </StickyContainer>
            {/* </StickyContainer>
              </StickyContainer> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurTechnology;
