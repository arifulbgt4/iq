import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax } from 'react-skrollr';

import { fatchBlogs } from 'src/state/ducks/blog';

import BlogCard from 'src/components/BlogCard';

const scroll = {
  data: {
    'data-top-bottom': 'opacity: 1; transform: translate(0%, -50%);',
    'data-center-center': 'opacity: 1;',
    'data-bottom-top': 'opacity: 0;transform: translate(0%, 0%);',
  },
};

const BlogPosts = () => {
  const { data, loading } = useSelector((store) => store.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchBlogs());
  }, [dispatch]);

  if (loading) {
    return 'Loadding';
  }
  console.log('data', data);

  return (
    <Row className="d-flex justify-content-center align-items-center blog-content">
      {Array.isArray(data) &&
        data.map((item) => {
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
