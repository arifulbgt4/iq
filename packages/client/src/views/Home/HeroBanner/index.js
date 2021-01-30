import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { useSelector } from 'react-redux';

import stock1 from 'src/assets/image/heroBanner/Asset1.png';
import stock3 from 'src/assets/image/heroBanner/Asset3.png';
import stock4 from 'src/assets/image/heroBanner/Asset4.png';
import stock5 from 'src/assets/image/heroBanner/Asset5.png';
import stock6 from 'src/assets/image/heroBanner/Asset6.png';
import stock7 from 'src/assets/image/heroBanner/Asset7.png';
import stock8 from 'src/assets/image/heroBanner/Asset8.png';
import stock9 from 'src/assets/image/heroBanner/Asset9.png';

import Slider from 'src/components/Slider';

import LargerText from './LergerText';

const HeroBanner = () => {
  const { data } = useSelector((store) => store.heroBanner);

  return (
    <section className="hero-banner position-relative">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Slider>
              {data &&
                data.map((items) => {
                  return (
                    <div key={items.id} className="banner-content text-center">
                      <LargerText text={items.title} maxLength={23} />
                      <p className="banner-content-description text-capitalize">
                        {items.description}
                      </p>
                      <Button className="rounded-pill px-4" color="primary">
                        Shedule an appointment
                      </Button>
                    </div>
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
            <div className="stock-img-item">
              <img src={stock4} alt="stock" className="stock-img4" />
              <img src={stock5} alt="stock" className="stock-img5" />
              <img src={stock1} alt="stock" className="stock-img1" />
              <div className="line-wrapper2 ">
                <span className="line1" />
                <span className="line2" />
                <span className="line3" />
                <span className="line4" />
                <span className="line5" />
              </div>
              <img src={stock3} alt="stock" className="stock-img3" />
              <img src={stock6} alt="stock" className="stock-img6" />
              <img src={stock7} alt="stock" className="stock-img7" />
              <img src={stock8} alt="stock" className="stock-img8" />
              <img src={stock9} alt="stock" className="stock-img9" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="cloud-img d-block ml-1 position-relative" />
    </section>
  );
};

export default HeroBanner;
