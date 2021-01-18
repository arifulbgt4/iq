import React from 'react';
import { Col, Row } from 'reactstrap';

import blogImg from 'src/assets/image/blog.png';

import BlogCard from 'src/components/BlogCard';

const blogPosts = [
  {
    id: 1,
    img: blogImg,
    title: 'blog title here',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `,
    bloggerName: 'arif',
    createDate: 'october 30, 2019',
  },
  {
    id: 2,
    img: blogImg,
    title: 'blog title here',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `,
    bloggerName: 'sunny',
    createDate: 'october 30, 2019',
  },
  {
    id: 3,
    img: blogImg,
    title: 'blog title here',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the `,
    bloggerName: 'antor',
    createDate: 'october 30, 2019',
  },
];

const BlogPosts = () => {
  return (
    <Row>
      {Array.isArray(blogPosts) &&
        blogPosts.map((item) => (
          <Col md={4} key={item.id} style={{ padding: '0 3.2rem' }}>
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
