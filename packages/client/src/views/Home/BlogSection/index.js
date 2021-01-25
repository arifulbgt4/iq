import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';

import { fatchBlogsHeader } from 'src/state/ducks/blog';
import SectionTitle from 'src/components/SectionTitle';
import BlogPosts from 'src/containers/BlogPosts';

const BlogSection = () => {
  const { data, loading } = useSelector((store) => store.blogsHeader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchBlogsHeader());
  }, [dispatch]);

  return (
    <section className="blog-section pt-5">
      <Container>
        {!loading ? (
          <SectionTitle color="primary" title={data?.title} border={false} />
        ) : (
          'Loadding'
        )}

        <BlogPosts />
      </Container>
    </section>
  );
};

export default BlogSection;
