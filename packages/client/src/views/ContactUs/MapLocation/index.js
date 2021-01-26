import React from 'react';
import LocationMap from 'src/components/LocationMap';
import { Col, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; transform: translate(0, -10%);',
    'data-center-center': 'opacity: 1; ',
    'data-bottom-top': 'opacity: 0;transform: translate(0, 50%);',
  },
};

const MapLocation = () => {
  return (
    <Row>
      <Col lg={{ size: 10, offset: 1 }} md={12} sm={12}>
        <Parallax data={scroll.data}>
          <div className="py-5 filter-me">
            <LocationMap height={442} />
          </div>
        </Parallax>
      </Col>
    </Row>
  );
};

export default MapLocation;
