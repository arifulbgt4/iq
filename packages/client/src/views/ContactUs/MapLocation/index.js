import React from 'react';
import LocationMap from 'src/components/LocationMap';

import { Col, Row } from 'reactstrap';
const MapLocation = () => {
  return (
    <Row>
      <Col>
        <div className="py-5 p-5 filter-me">
          <LocationMap height={550} />
        </div>
      </Col>
    </Row>
  );
};

export default MapLocation;
