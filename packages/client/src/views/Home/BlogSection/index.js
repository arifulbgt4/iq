import React from 'react';
import { Container } from 'reactstrap';

import SectionTitle from 'src/components/SectionTitle';
import BlogPosts from 'src/containers/BlogPosts';

const BlogSection = () => {
  return (
    <section className="blog-section py-5">
      <Container>
        <SectionTitle color="primary" title="latest blogs" border={false} />
        <BlogPosts />
      </Container>
    </section>
  );
};

export default BlogSection;
