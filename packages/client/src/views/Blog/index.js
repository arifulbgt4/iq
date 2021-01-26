import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import BlogCard from 'src/components/BlogCard';

const Blog = () => {
  const postData = useSelector((store) => store.blogpost);
  return (
    <Container className="blog-page">
      <Row>
        {Array.isArray(postData) &&
          postData.map((item) => (
            <Col key={item.id} md={6} className="p-5">
              <BlogCard {...item} />{' '}
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Blog;
