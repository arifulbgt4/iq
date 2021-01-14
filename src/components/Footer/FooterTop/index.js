import React from 'react';
import { Col, Input, Row } from 'reactstrap';

const FooterTop = () => {
  return (
    <Row className="py-4">
      <Col md={4}>
        <h4 className="mb-0">Meta Stock</h4>
      </Col>
      <Col md={8}>
        <ul className="d-flex justify-content-between align-items-center m-0 p-0">
          <li className="list-unstyled">
            <h5>Quick Links</h5>{' '}
          </li>
          <li className="list-unstyled">
            <h5>About US</h5>{' '}
          </li>
          <li className="list-unstyled">
            <h5> Contact US</h5>
          </li>

          <li className="list-unstyled">
            <Input
              type="select"
              name="select"
              className="bg-transparent text-white"
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
