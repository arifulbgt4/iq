import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import ProductCard from 'src/components/ProductCard';
import SectionTitle from 'src/components/SectionTitle';

const OurProducts = () => {
  const data = useSelector((store) => store.products);
  return (
    <section className="our-product py-5">
      <Container>
        <SectionTitle color="white" title="our products" />
        <Row>
          {data &&
            data.map((item) => (
              <Col key={item.id} md={4} style={{ padding: '0 3.2rem' }}>
                <ProductCard title={item.title} text={item.text} />{' '}
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurProducts;
