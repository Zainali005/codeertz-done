import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import BlogDetailsMain from '../../components/blog-details';
import { blog_data } from '../../data';

const index = () => {
  const blog = blog_data.filter(blog => blog.blog_page)[0];
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  );
};

export default index;