import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Input, Row } from 'reactstrap';

const FooterTop = () => {
  return (
    <Row className="py-4">
      <Col md={4}>
        <h4 className="mb-0 text-white">
          <span className="text-info">IQ</span>Stock
        </h4>
      </Col>
      <Col md={8}>
        <ul className="d-flex justify-content-between align-items-center m-0 p-0">
          <li className="list-unstyled">
            <h5 className="text-white">Quick Links</h5>{' '}
          </li>
          <li className="list-unstyled">
            <h5 className="text-white">About US</h5>{' '}
          </li>
          <li className="list-unstyled">
            <h5 className="text-white"> Contact US</h5>
          </li>

          <li className="list-unstyled d-flex align-items-center">
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
