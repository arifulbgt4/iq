import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { fatchAboutUs } from 'src/state/ducks/aboutUs';
import SectionTitle from 'src/components/SectionTitle';

const AboutUs = () => {
  const { data, loading } = useSelector((store) => store.aboutUs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchAboutUs());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }
  const { title, description } = data;
  console.log('data', data);

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
            <iframe
              height="450"
              width="715"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              className="my-2 my-md-5 my-xl-0 rounded"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
