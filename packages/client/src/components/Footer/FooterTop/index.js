import React from 'react';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Input, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

const FooterTop = () => {
  const { data } = useSelector((store) => store.websiteDetails);

  const logo = process.env.API_URL + data.logo_two.url;

  return (
    <Row className="py-4">
      <Col
        xl={4}
        lg={12}
        className="d-flex justify-content-center justify-content-lg-center justify-content-xl-start mb-0 mb-md-3 mb-xl-0"
      >
        <h4 className="mb-0 text-white ">
          <img width={50} src={logo} alt="logo" />
        </h4>
      </Col>
      <Col md={12} lg={12} xl={8} className="d-none d-md-block">
        <ul className="d-flex justify-content-between align-items-center m-0 p-0">
          <li className="list-unstyled">
            <h5 className="text-white">Quick Links</h5>{' '}
          </li>
          <li className="list-unstyled">
            <h5 className="text-white">About US</h5>{' '}
          </li>
          <li className="list-unstyled me-5 me-lg-0">
            <h5 className="text-white me-5 me-lg-0"> Contact US</h5>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default FooterTop;
