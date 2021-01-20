import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import founder from 'src/assets/image/founder.png';
import SectionTitle from 'src/components/SectionTitle';

const Founder = () => {
  return (
    <>
      <SectionTitle title="Few Words From Our Founder" border={false} />
      <Row className="align-items-center">
        <Col md={4}>
          <img className="img-fluid" src={founder} alt="founder" />
        </Col>
        <Col md={8}>
          <div className="text-primary">
            {/* <h1 className="mt-0">"</h1> */}
            <img
              className="img-cortetion"
              src="https://antor.thememaster.net/AllImage/cotetion.png"
              alt="a"
            />
            <p className="m-0  info-text text-primary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </p>
            <p className="fw-bold">- Narotam</p>

            <div className="text-center mt-3">
              <p className="history-heading fw-bold">
                How It Started / Our History
              </p>
            </div>

            <div className="our-history position-relative">
              <p className="mt-2 d-inline-block mb-0 text-primary history">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's Lorem Ipsum has been the
                industry's . Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                Lorem Ipsum is simply dummy text of the and type setting
                industry.Lorem Ipsum is simply dummy text printing..
              </p>
              <Link
                to="#"
                className=" mt-2 text-white bg-primary btn-sm px-4 py-2 position-absolute"
              >
                Read more
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Founder;
