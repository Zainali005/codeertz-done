import React, { useState, useMemo, useEffect } from 'react';
import blog_data from '../../data/blog-data';
import BlogSidebar from './blog-sidebar';
import BlogItems from './blog-items';
import { useDispatch, useSelector } from 'react-redux';

import { setBlogs } from '../../redux/features/blogs-slice';
// blog_items
const blog_items = blog_data.filter(blog => blog.blog_page);

const BlogArea = () => {
  const [blogsData, setBlogsData] = useState([]);
  const blogs = useSelector(state => state.blogs);
  const dispatch = useDispatch();
  const getBlogs = async () => {
    const resp = await fetch(`/api/blogs`, {
      method: "GET"
    });
    const data = await resp.json().catch((e) => console.log(e));
    console.log("blogsAPiTest", data?.blogs?.data?.blogs);
    return data?.blogs?.data?.blogs;
  }
  useMemo(() => {
    getBlogs().then((res) => {
      setBlogsData(res);
      dispatch(setBlogs(res))
    })
  }, [])
  useEffect(() => {
    console.log("blogs123", blogs);
  }, [dispatch])
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {/*BlogItems start  */}
                {blogsData.length > 1 &&
                  <BlogItems itemsPerPage={4} items={blog_items} blogs={blogsData} />
                }
                {/*BlogItems end  */}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              {/* blog sidebar start */}
              <BlogSidebar />
              {/* blog sidebar end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;