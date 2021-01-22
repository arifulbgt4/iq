import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import { Link, Element } from 'react-scroll';
import { Sticky } from 'react-sticky';
import { StickyContainer } from 'react-sticky';
import Feature from './TabsContent/Feature';

const categories = [
  { id: 1, name: 'Feature1' },
  { id: 2, name: 'Feature2' },
  { id: 3, name: 'Feature3' },
  { id: 4, name: 'Feature4' },
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
                      <ul
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          overflowY: 'hidden',
                          whiteSpace: 'nowrap',
                          listStyleType: 'none',
                          paddingLeft: '20px',
                          flexWrap: 'nowrap',
                          height: '70px',
                          justifyItems: 'center',
                        }}
                        className="sticky-nav"
                      >
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            style={{
                              display: 'inline-block',
                              margin: '20px',
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
                <div style={{ marginTop: '30px' }}>
                  {categories.map((category) => (
                    <Element
                      name={category.id.toString()}
                      className={category.id}
                      key={'display' + category.id}
                    >
                      <div md={6}>
                        {category.id === 1 && <Feature title="feature 1" />}
                        {category.id === 2 && <Feature title="feature 2" />}
                        {category.id === 3 && <Feature title="feature 3" />}
                        {category.id === 4 && <Feature title="feature 4" />}
                      </div>
                    </Element>
                  ))}
                </div>
              </StickyContainer>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
