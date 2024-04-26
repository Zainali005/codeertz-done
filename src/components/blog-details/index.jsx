import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogDetailsArea from './blog-details-area';


const BlogDetails = ({ blog }) => {

  useEffect(() => {
    console.log("blog title new", blog)
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={blog?.title} imgName={"about_us-min.webp"} />
      <BlogDetailsArea blog={blog} />
      <FooterThree />
    </Wrapper>
  );
};

export default BlogDetails;