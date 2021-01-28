import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import BlogPosts from 'src/containers/BlogPosts';

const BlogSection = () => {
  const { data } = useSelector((store) => store.blogsHeader);

  return (
    <section className="blog-section pt-5">
      <Container>
        <SectionTitle color="primary" title={data?.title} border={false} />

        <BlogPosts />
      </Container>
    </section>
  );
};

export default BlogSection;
