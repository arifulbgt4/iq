import React from 'react';

import DocCard from 'src/views/Documentation/components/DocCard';
import PostCard from 'src/components/PostCard';

import blogPostImg1 from 'src/assets/image/blog-post-1.png';

const PostCardDoc = () => {
  return (
    <DocCard title="Post Card" id="postCard">
      <div className="w-50">
        <PostCard
          id={1}
          img={blogPostImg1}
          title="investing on market"
          date="22 jun 2021"
          views={460}
        />
      </div>
    </DocCard>
  );
};

export default PostCardDoc;
