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
          <Col xl={{ size: 10, offset: 1 }} md={12} lg={12}>
            <Row>
              {data &&
                data.map((item) => (
                  <Col
                    key={item.id}
                    xxl={4}
                    xl={4}
                    lg={6}
                    md={12}
                    sm={12}
                    className="product-item pb-4"
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
