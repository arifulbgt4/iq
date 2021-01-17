import React from 'react';

import BlogCard from 'src/components/BlogCard';
import DocCard from 'src/views/Documentation/components/DocCard';

const BlogCardDoc = () => {
  return (
    <DocCard title="blog card" id="blogCard">
      <div className="w-25">
        <BlogCard />
      </div>
    </DocCard>
  );
};

export default BlogCardDoc;
