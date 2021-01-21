import React from 'react';
import LocationMap from 'src/components/LocationMap';

import { Col, Row } from 'reactstrap';
const MapLocation = () => {
  return (
    <Row className="pt-5 pb-5">
      <Col lg={{ size: 10, offset: 1 }} md={12} sm={12}>
        <div className="py-5 filter-me">
          <LocationMap height={442} />
        </div>
      </Col>
    </Row>
  );
};

export default MapLocation;
