import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { Parallax } from 'react-skrollr';

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
  const { data } = useSelector((store) => store.guidings);
  const { data: guidingsHeader } = useSelector((store) => store.guidingsHeader);

  return (
    <section className="guiding-principle">
      <Container>
        <SectionTitle title={guidingsHeader?.title} border={false} />
        <Row>
          <Col md={12}>
            {data &&
              data.map((item) => {
                const image = process.env.API_URL + item.image.url;
                const animate = item.id % 2 === 0 ? scroll.left : scroll.right;

                return (
                  <Parallax key={item.id} data={animate}>
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
          <Col xs={12}>
            <p className="text-center bottom-details">
              “We are an organisation of our word, we keep our promises to you.”
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuidingPrinciple;
