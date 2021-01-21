import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import BlogCard from 'src/components/BlogCard';

const BlogPosts = () => {
  const blogPost = useSelector((store) => store.blogs);
  return (
    <Row className="d-flex justify-content-center">
      {Array.isArray(blogPost) &&
        blogPost.map((item) => (
          <Col
            xl={4}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            key={item.id}
            style={{ padding: '0 5rem' }}
            className="blog-col"
          >
            <BlogCard
              id={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              bloggerName={item.bloggerName}
              createDate={item.createDate}
            />
          </Col>
        ))}
    </Row>
  );
};

export default BlogPosts;
