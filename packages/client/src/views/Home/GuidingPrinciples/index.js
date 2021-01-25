import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax } from 'react-skrollr';

import { fatchGuid } from 'src/state/ducks/guidings';
import GuidingPrinciples from 'src/components/GuidingPrinciples';
import SectionTitle from 'src/components/SectionTitle';

const scroll = {
  left: {
    'data-top-bottom': 'transform: translateX(-50%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translateX(0%);',
  },
  right: {
    'data-top-bottom': 'transform: translateX(50%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translateX(0%);',
  },
};

const GuidingPrinciple = () => {
  const { data, loading } = useSelector((store) => store.guidings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchGuid());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }
  return (
    <section className="guiding-principle">
      <Container>
        <SectionTitle title="Our Guiding Principles" border={false} />
        <Row>
          <Col md={12}>
            {data &&
              data.map((item) => {
                const image = process.env.API_URL + item.image.url;

                return (
                  <Parallax
                   key={item.id} data={item.id % 2 === 0 ? scroll.left : scroll.right}
                  >
                    <GuidingPrinciples
                      image={image}
                      title={item.title}
                      description={item.description}
                      right={item.id % 2 === 0}
                    />
                  </Parallax>
                );
              })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuidingPrinciple;
