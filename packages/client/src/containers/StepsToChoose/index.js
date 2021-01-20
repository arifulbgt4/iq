import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fatchchooseUs } from 'src/state/ducks/whyChooseUs';
import conversationImg from 'src/assets/image/whyChooseUs/conversation.png';
import laptopImg from 'src/assets/image/whyChooseUs/laptop.png';
import contractImg from 'src/assets/image/whyChooseUs/contract.png';

import ChooseCard from 'src/components/ChooseCard';

const stepsToChoose = [
  {
    id: 1,
    img: conversationImg,
    title: 'client-centered',
    description: `Our clientele is at the heart of everything we do. We foster a work culture devoted to enhancing our client's satisfaction. We value team spirit and a constructive team that works together with our clients Less pricing. `,
  },
  {
    id: 2,
    img: laptopImg,
    title: 'powerful technology',
    description: `Our infrastructure is the focal point that distinguishes us from our competitors.  By maintaining our position at the forefront of the industry, our constantly-evolving technology also helps us adapt and cater to our clients' needs. `,
  },
  {
    id: 3,
    img: contractImg,
    title: 'compliance',
    description: `In an ever-changing regulatory landscape, we are committed to effectively combining accountability with high organizational performance.`,
  },
];

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
