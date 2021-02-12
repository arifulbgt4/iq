import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import BlogCard from 'src/components/BlogCard';

const Blog = () => {
  const { data } = useSelector((store) => store.blogs);
  return (
    <Container className="blog-page">
      <Row>
        {Array.isArray(data) &&
          data.map((item) => {
            const image = process.env.REACT_APP_API_URL + item.image.url;
            return (
              <Col key={item.id} md={6} lg={4} xl={4} className="p-5 col-xxl-3">
                <BlogCard
                  id={item.id}
                  img={image}
                  title={item.title}
                  description={item.description}
                  bloggerName={item.author}
                  createDate={item.date}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default Blog;
