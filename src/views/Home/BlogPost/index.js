import React from 'react';
import { Col, Row } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';

import Posts from 'src/containers/Posts';
import ReadMore from './ReadMore';

const BlogPost = () => {
  return (
    <section className="blog-post mb-5">
      <Row>
        <SectionTitle title="blog post" />
      </Row>
      <Row className="mt-5">
        <Col md={8}>
          <Row>
            <Posts />
          </Row>
        </Col>
        <Col md={4}>
          <ReadMore />
        </Col>
      </Row>
    </section>
  );
};

export default BlogPost;
