import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import founder from 'src/assets/image/founder.png';

const Founder = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col md={12}>
          <h1 className="text-center text-primary mb-0">
            Few Words From Our Founder
          </h1>
        </Col>
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
            <p className="m-0  info-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </p>
            <h5 className="">-Narotam</h5>

            <div className="text-center mt-3">
              <h4 className="history-heading">How It Started / Our History</h4>
            </div>
            <div className="d-flex justify-content-center"></div>
            <p className="mt-2 d-inline-block mb-0 info-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's Lorem Ipsum has been the industry's
              . Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's Lorem Ipsum is
              simply dummy text of the printing and typesetting industry..
            </p>
            <div className="text-end">
              <Link
                to="#"
                className="ms-5 mt-2 text-white bg-primary btn-sm px-4 py-2"
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
