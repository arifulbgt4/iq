import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from 'reactstrap';

import { getProductById } from 'src/api';
import Calendly from 'src/components/Calendly';

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fatchData = async (id) => {
    const { data } = await getProductById(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fatchData(id);
    }
  }, [id]);

  if (loading) {
    return 'Loading';
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={{ size: 8, offset: 2 }} sm={{ size: 10, offset: 1 }}>
          <Card className="blog-details">
            <CardBody className="py-2 py-sm-3 py-md-4 px-3 px-sm-4 px-md-5">
              <CardTitle tag="h2" className="py-3 border-bottom mb-4">
                {product.title}

                <div className="blog-details-body_details">
                  <CardSubtitle tag="span">
                    <small className="name text-capitalize ms-2">
                      {product.name}
                    </small>
                  </CardSubtitle>
                </div>
              </CardTitle>
              {product?.large_description && (
                <ReactMarkdown>{product.large_description}</ReactMarkdown>
              )}
            </CardBody>
            <CardFooter className="bg-transparent d-flex justify-content-end me-3 border-0">
              <Calendly url={product.calendly_url} />
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(ProductDetails);
