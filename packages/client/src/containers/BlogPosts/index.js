import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { fatchBlogs } from 'src/state/ducks/blog';

import BlogCard from 'src/components/BlogCard';

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
    <Row className="d-flex justify-content-center">
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
  );
};

export default BlogPosts;
