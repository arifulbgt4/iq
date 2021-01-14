import React from 'react';
import { Col } from 'reactstrap';

import blogPostImg1 from 'src/assets/image/blog-post-1.png';
import blogPostImg2 from 'src/assets/image/blog-post-2.png';

import PostCard from 'src/components/PostCard';

const posts = [
  {
    id: 1,
    img: blogPostImg1,
    title: 'investing on market',
    date: '22 jun 2021',
    views: 460,
  },
  {
    id: 2,
    img: blogPostImg2,
    title: 'investing on business',
    date: '22 jun 2021',
    views: 2400,
  },
];

const Posts = () => {
  return (
    <>
      {Array.isArray(posts) &&
        posts.map((item) => {
          if (item.id > 2) return false;
          return (
            <Col md={6} key={item.id}>
              <PostCard
                id={item.id}
                img={item.img}
                title={item.title}
                date={item.date}
                views={item.views}
              />
            </Col>
          );
        })}
    </>
  );
};

export default Posts;
