import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import SectionTitle from 'src/components/SectionTitle';
import Video from './Video';

const AboutUs = () => {
  const { data } = useSelector((store) => store.aboutUs);
  const { title, description } = data;

  return (
    <Container className="about-us">
      <SectionTitle
        title={title}
        description={description}
        border={false}
        color="primary"
      />
      <Row className="mt-2 mt-xl-0 mb-5 mb-xl-0 about-us-row">
        <Col md={12}>
          <div className="d-flex justify-content-center">
            <Video />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
