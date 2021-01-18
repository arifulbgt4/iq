import React from 'react';
import { Col, Row } from 'reactstrap';

import ChooseCard from 'src/components/ChooseCard';

const StepsToChoose = () => {
  return (
    <Row>
      <Col md={4}>
        <ChooseCard />
      </Col>
    </Row>
  );
};

export default StepsToChoose;
