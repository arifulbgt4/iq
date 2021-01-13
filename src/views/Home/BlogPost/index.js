import React from 'react';
import { Col, Row } from 'reactstrap';

import Posts from 'src/containers/Posts';

const BlogPost = () => {
  return (
    <Row>
      <Col md={8}>
        <Row>
          <Posts />
        </Row>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
};

export default BlogPost;
