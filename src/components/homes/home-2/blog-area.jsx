import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';

const blog_items = blog_data.filter(b => b.home_2);

const blog_contents = {
  subtitle: 'Blog & Article',
  title: 'Recent blog post'
}
const { subtitle, title } = blog_contents;

const BlogArea = () => {
  return (
    <div className="tp-blog-area pt-125 pb-90 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-section-box text-center mb-50">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title">{title}</h2>
            </div>
          </div>
        </div>
        <div className="tp-blog-space">
          <div className="row gx-120">
            {blog_items.map((blog) => {
              const { date, delay, duration, id, img, meta_tag, short_desc, title } = blog;
              return <div key={id} className="col-xl-6 col-lg-6 col-md-12 col-12 tp-blog-border mb-30 wow tpfadeLeft" data-wow-duration={duration} data-wow-delay={delay}>
                <div className="tp-blog-box ">
                  <div className="tp-blog-item blog-grey-color">
                    <div className="tp-blog-img fix mb-35">
                      <a href="#"><img className="w-100" src={img} alt="" /></a>
                    </div>
                    <div className="tp-blog-meta d-flex justify-content-between mb-30">
                      <a href="#">{meta_tag}</a>
                      <a className="tp-blog-meta-color" href="#">{date}</a>
                    </div>
                    <div className="tp-blog-info">
                      <h3 className="tp-blog-title">
                        <Link href={`/blog-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <p>{short_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;