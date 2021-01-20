import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import ProductCard from 'src/components/ProductCard';
import SectionTitle from 'src/components/SectionTitle';

const OurProducts = () => {
  const data = useSelector((store) => store.products);
  return (
    <section className="our-product">
      <Container>
        <SectionTitle color="white" title="our products" />
        <Row className="mt-3">
          <Col md={{ size: 10, offset: 1 }}>
            <Row>
              {data &&
                data.map((item) => (
                  <Col
                    key={item.id}
                    md={4}
                    style={{ padding: '0 4.5rem' }}
                    className="product-item"
                  >
                    <ProductCard title={item.title} text={item.text} />{' '}
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurProducts;
