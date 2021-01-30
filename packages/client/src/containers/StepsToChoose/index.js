import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-skrollr';

import ChooseCard from 'src/components/ChooseCard';

const scroll = {
  'data-top-bottom': 'opacity: 0; ',
  'data-center-center': 'opacity: 1; transform: translateY(0%);',
  'data-bottom-top': 'opacity: 0.5;transform: translateY(30%);',
};

const StepsToChoose = () => {
  const { data } = useSelector((store) => store.chooseUs);

  return (
    <Row className="mt-3 justify-content-center">
      {data &&
        data.map((step) => {
          const image = process.env.API_URL + step.image.url;

          return (
            <Col xl={4} lg={6} md={6} sm={12} xs={12} key={step.id}>
              <Parallax data={scroll}>
                <ChooseCard
                  id={step.id}
                  img={image}
                  title={step.title}
                  description={step.description}
                />
              </Parallax>
            </Col>
          );
        })}
    </Row>
  );
};

export default StepsToChoose;
