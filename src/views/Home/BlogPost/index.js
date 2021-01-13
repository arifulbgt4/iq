import React from 'react';
import { Col, Row } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';

import Posts from 'src/containers/Posts';
import ReadMore from './ReadMore';

const BlogPost = () => {
  return (
    <>
      <SectionTitle title="blog post" />
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
    </>
  );
};

export default BlogPost;
