import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogArea from './blog-area';


const Blog = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Blogs'} imgName={"blog-min.webp"} />
      <BlogArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default Blog;