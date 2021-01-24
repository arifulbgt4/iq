import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import image from 'src/assets/image/404.png';
const NotFound = () => {
  return (
    <Container className="py-4 py-sm-5 error-page">
      <Row className="align-items-center text-center text-md-start">
        <Col md={{size:6,order:1}} xs={{size:12,order:2}} className='py-5 py-md-0'>
          <h1 className="mb-4">Page Not Found!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{' '}
          </p>
          <Button color="primary" className="rounded-pill" href='/'>Back</Button>
        </Col>
        <Col md={{size:6,order:2}} xs={{size:12,order:1}}>
          <figure>
            <img src={image} alt="error" className='img-fluid' />
          </figure>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
