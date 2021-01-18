import React from 'react';

import SectionTitle from 'src/components/SectionTitle';
import BlogPosts from 'src/containers/BlogPosts';

const BlogSection = () => {
  return (
    <section className="blog py-5">
      <SectionTitle color="primary" title="latest blogs" />
      <BlogPosts />
    </section>
  );
};

export default BlogSection;
