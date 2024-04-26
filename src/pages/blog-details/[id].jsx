import React from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import { useRouter } from "next/router";
import { blog_data } from "../../data";
import BlogDetailsMain from "../../components/blog-details";
import { useSelector } from "react-redux";

const BlogDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((item) => Number(item.id) === Number(id));
  console.log("blogs32212211", blogs, blog_data, blog);
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Details"} />
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  );
};

export default BlogDynamicDetails;
