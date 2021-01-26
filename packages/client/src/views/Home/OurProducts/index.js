import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax } from 'react-skrollr';

import { fatchProducts, fatchProductsHeader } from 'src/state/ducks/products';
import ProductCard from 'src/components/ProductCard';
import SectionTitle from 'src/components/SectionTitle';

const scroll = {
  data: {
    'data-top-bottom': '',
    'data-center-center': 'opacity: 1; transform: translate(0%, -100%);',
    'data-bottom-top': 'opacity: 1;transform: translate(0%, 100%);',
  },
};

const OurProducts = () => {
  const { data, loading } = useSelector((store) => store.products);
  const { data: productsHeader, loading: headerLoading } = useSelector(
    (store) => store.productsHeader
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchProducts());
    dispatch(fatchProductsHeader());
  }, [dispatch]);

  if (loading || headerLoading) {
    return 'Loadding';
  }

  return (
    <section className="our-product">
      <Container>
        <SectionTitle color="white" title={productsHeader?.title} />
        <Row className="mt-0 mt-sm-3 product-row">
          <Parallax data={scroll.data}>
            <Col
              xl={{ size: 10, offset: 1 }}
              lg={12}
              md={{ size: 12, offset: 0 }}
              sm={{ size: 10, offset: 1 }}
              xs={12}
            >
              <Row className="justify-content-center">
                {data &&
                  data.map((item) => (
                    <Col
                      key={item.id}
                      xl={4}
                      lg={6}
                      md={6}
                      sm={12}
                      className="product-item pb-4"
                    >
                      <ProductCard
                        name={item.name}
                        title={item.title}
                        description={item.description}
                      />{' '}
                    </Col>
                  ))}
              </Row>
            </Col>
          </Parallax>
        </Row>
      </Container>
    </section>
  );
};

export default OurProducts;
