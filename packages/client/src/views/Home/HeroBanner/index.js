import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import HeroContent from 'src/components/HeroContent';

import stock1 from 'src/assets/image/heroBanner/Asset1.png';
import stock3 from 'src/assets/image/heroBanner/Asset3.png';
import stock4 from 'src/assets/image/heroBanner/Asset4.png';
import stock5 from 'src/assets/image/heroBanner/Asset5.png';
import stock6 from 'src/assets/image/heroBanner/Asset6.png';
import stock7 from 'src/assets/image/heroBanner/Asset7.png';
import stock8 from 'src/assets/image/heroBanner/Asset8.png';
import stock9 from 'src/assets/image/heroBanner/Asset9.png';
import hero from 'src/assets/image/hero.png';

import Slider from 'src/components/Slider';

const HeroBanner = () => {
  const { data } = useSelector((store) => store.heroBanner);

  return (
    <section className="hero-banner position-relative">
      <Container fluid>
        <Row className="align-items-center">
          <Col sm={12} md={6} lg={6} xl={6}>
            <Slider>
              {data &&
                data.map((items) => {
                  return (
                    <HeroContent
                      key={items.id}
                      title={items.title}
                      description={items.description}
                    />
                  );
                })}
            </Slider>
          </Col>
          <Col
            xs={{ size: 11, offset: 1 }}
            sm={{ size: 10, offset: 2 }}
            md={{ size: 6, offset: 0 }}
            className=" d-block stock-img-content justify-content-center"
          >
            <div className="stock-img-animation position-relative">
              <img src={hero} alt="stock" className="stock-main img-fluid" />
              <div className="line-wrapper2">
                <span className="line1" />
                <span className="line2" />
                <span className="line3" />
                <span className="line4" />
                <span className="line5" />
              </div>
              <img src={stock7} alt="img-fluid" className="stock7 " />
              <img src={stock1} alt="img-fluid" className="stock1 " />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="cloud-img d-block ml-1 position-relative" />
    </section>
  );
};

export default HeroBanner;
