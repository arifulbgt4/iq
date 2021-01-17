import React from 'react';

import BlogCard from 'src/components/BlogCard';
import DocCard from 'src/views/Documentation/components/DocCard';

import blogImg from 'src/assets/image/blog.png';

const BlogCardDoc = () => {
  return (
    <DocCard title="blog card" id="blogCard">
      <div className="w-25">
        <BlogCard
          img={blogImg}
          title="blog title here"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the "
          bloggerName="arif"
          createDate="october 30, 2019"
        />
      </div>
    </DocCard>
  );
};

export default BlogCardDoc;
