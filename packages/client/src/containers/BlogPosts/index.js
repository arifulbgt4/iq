import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-skrollr';

import BlogCard from 'src/components/BlogCard';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1;',
    'data-center-center': 'opacity: 1;  transform: translate(0%, -30%);',
    'data-bottom-top': 'opacity: 0.6;transform: translate(0%, 50%);',
  },
};

const BlogPosts = () => {
  const { data } = useSelector((store) => store.blogs);

  let blogs;

  if (data.length >= 3) {
    blogs = data.slice(0, 3);
  } else {
    blogs = data;
  }

  return (
    <Row className="d-flex justify-content-center align-items-center blog-content">
      {Array.isArray(blogs) &&
        blogs.map((item) => {
          const image = process.env.API_URL + item.image.url;
          return (
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
              <Parallax data={scroll.data}>
                <BlogCard
                  id={item.id}
                  img={image}
                  title={item.title}
                  description={item.description}
                  bloggerName={item.author}
                  createDate={item.date}
                />
              </Parallax>
            </Col>
          );
        })}
    </Row>
  );
};

export default BlogPosts;
