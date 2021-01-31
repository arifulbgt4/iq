import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

const FooterTop = () => {
  const { data: website } = useSelector((store) => store.websiteDetails);

  return (
    <Row className="py-4">
      <Col
        xl={4}
        lg={12}
        className="d-flex justify-content-center justify-content-lg-center justify-content-xl-start mb-0 mb-md-3 mb-xl-0"
      >
        <h4 className="mb-0 text-white ">{website.name}</h4>
      </Col>
      <Col md={4} lg={4} xl={2} className="d-none d-md-block">
        <h5 className="text-white">Quick Links</h5>{' '}
      </Col>
      <Col md={4} lg={4} xl={2} className="d-none d-md-block">
        <h5 className="text-white">About US</h5>{' '}
      </Col>
      <Col md={4} lg={4} xl={4} className="d-none d-md-block">
        <h5 className="text-white me-5 me-lg-0"> Contact US</h5>
      </Col>
    </Row>
  );
};

export default FooterTop;
