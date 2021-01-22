import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import { Link, Element } from 'react-scroll';
import { Sticky } from 'react-sticky';
import { StickyContainer } from 'react-sticky';
import Feature from './TabsContent/Feature';
import featureRightImg from 'src/assets/image/ourTechnology/iMac.png';

const categories = [
  { id: 1, name: 'Feature1', title: 'Feature 1' },
  { id: 2, name: 'Feature2', title: 'Feature 2' },
  { id: 3, name: 'Feature3', title: 'Feature 3' },
  { id: 4, name: 'Feature4', title: 'Feature 4' },
];
export default class OurTechnology extends Component {
  constructor(props) {
    super(props);
    categories.forEach((category) => {
      this[category.id] = React.createRef();
    });
  }

  scrollToCategory = (id) => {
    this[id].current.scrollIntoView({ inline: 'center' });
  };

  render() {
    return (
      <section className="our-technology py-5 my-5">
        <Container className="py-5">
          <SectionTitle color="white" title="our technology" />
          <Row>
            <Col md={12}>
              <StickyContainer>
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
                <StickyContainer>
                  <Row>
                    <Col md={6}>
                      <div>
                        {categories.map((category) => (
                          <div
                            name={category.id.toString()}
                            className={category.id}
                            key={'display' + category.id}
                          >
                            {<Feature title={category.title} />}
                          </div>
                        ))}
                      </div>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                      <Sticky disableCompensation topOffset={10}>
                        {({ style, isSticky }) => (
                          <div
                            style={style}
                            className={`feature-image mt-4 ${
                              isSticky ? 'sticky-image' : 'non-sticky'
                            }`}
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
              </StickyContainer>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
