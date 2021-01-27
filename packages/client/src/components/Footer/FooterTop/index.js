import React from 'react';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Input, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

const FooterTop = () => {
  const { data, loading } = useSelector((store) => store.websiteDetails);

  if (loading) {
    return 'Loading';
  }

  const logo = process.env.API_URL + data.logo_two.url;

  return (
    <Row className="py-4">
      <Col
        xl={4}
        lg={12}
        className="d-flex justify-content-between justify-content-lg-center justify-content-xl-start mb-0 mb-md-3 mb-xl-0"
      >
        <h4 className="mb-0 text-white ">
          <img width={40} src={logo} alt="logo" />
          <span className="text-info ms-2">{data.name}</span>
        </h4>
        <div className="list-unstyled d-flex d-lg-none align-items-center me-0 me-md-5 pe-0 pe-md-4">
          <FontAwesomeIcon icon={faCubes} style={{ fontSize: 25 }} />
          <Input
            type="select"
            name="select"
            className="bg-transparent text-white border-0 ps-1"
          >
            <option>English(USA)</option>
            <option>English(USA)</option>
            <option>English(USA)</option>
            <option>English(USA)</option>
          </Input>
        </div>
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

          <li className="list-unstyled d-none d-lg-flex align-items-center">
            <FontAwesomeIcon icon={faCubes} style={{ fontSize: 25 }} />
            <Input
              type="select"
              name="select"
              className="bg-transparent text-white border-0 ps-1"
            >
              <option>English(USA)</option>
              <option>English(USA)</option>
              <option>English(USA)</option>
              <option>English(USA)</option>
            </Input>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default FooterTop;
