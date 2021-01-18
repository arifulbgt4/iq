import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import ProductCard from 'src/components/ProductCard';
import SectionTitle from 'src/components/SectionTitle';

const data = [
  {
    id: 1,
    title: 'Product 1',
    text:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 2,
    title: 'Product 1',
    text:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 3,
    title: 'Product 1',
    text:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
];
const OurProducts = () => {
  return (
    <section className="our-product py-5 my-5">
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
