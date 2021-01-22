import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { fatchGuid } from 'src/state/ducks/guidings';
import GuidingPrinciples from 'src/components/GuidingPrinciples';
import SectionTitle from 'src/components/SectionTitle';

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
                  <GuidingPrinciples
                    key={item.id}
                    image={image}
                    title={item.title}
                    description={item.description}
                    right={item.id % 2 === 0}
                  />
                );
              })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuidingPrinciple;
