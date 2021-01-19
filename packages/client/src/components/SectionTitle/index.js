import React from 'react';
import { Col, Row } from 'reactstrap';

const SectionTitle = (props) => {
  const { color, title, description, border = true } = props;
  return (
    <Row>
      <Col className="section-title" md={12}>
        <h1
          className={`text-center text-capitalize ${
            border ? 'position-relative' : 'mb-0 pb-2'
          }   ${description ? 'heading' : 'mb-5'} text-${color}`}
        >
          {title}
        </h1>
        {description && (
          <p className={`text-${color} text-capitalize text-center`}>
            {description}
          </p>
        )}
      </Col>
    </Row>
  );
};

export default SectionTitle;
