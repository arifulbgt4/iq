import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fatchchooseUs } from 'src/state/ducks/whyChooseUs';
import ChooseCard from 'src/components/ChooseCard';

const StepsToChoose = () => {
  const { data, loading } = useSelector((store) => store.chooseUs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchchooseUs());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }

  return (
    <Row className="mt-3 justify-content-center">
      {Array.isArray(data) &&
        data.map((step) => {
          const image = process.env.API_URL + step.image.url;

          return (
            <Col md={4} key={step.id}>
              <ChooseCard
                id={step.id}
                img={image}
                title={step.title}
                description={step.description}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default StepsToChoose;
