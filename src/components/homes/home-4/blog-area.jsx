import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';

const blog_items = blog_data.filter(blog => blog.home_4);
const big_item = blog_items.find(b => b.big);
const blog_sm_items = blog_items.filter(blog => !blog.big);

const blog_contents = {
  subtitle: 'Blog Post',
  title: 'Popular',
  highlight_text: 'blog post'
}
const { title, subtitle, highlight_text } = blog_contents;

const BlogArea = () => {
  return (
    <div className="tp-blog-area pt-130 pb-90 grey-bg p-relative">
      <div className="ce-blog-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.webp" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="tp-testimonial-section-box text-center pb-70">
            <h5 className="tp-subtitle">{subtitle}</h5>
            <h2 className="tp-title-sm">{title} <span className="tp-section-highlight">
                {highlight_text}
                <svg width="212" height="11" viewBox="0 0 212 11" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                </svg>
              </span>
            </h2>
          </div>
        </div>
        <div className="row gx-7">
          <div className="col-xl-6 col-lg-6 tp-blog-border mb-40  wow tpfadeLeft"
            data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="tp-blog-item-four">
              <div className="tp-blog-item-four__img mb-40 fix">
                <Link href={`/blog-details/${big_item.id}`}>
                  <a><img className="w-100" src={big_item.img} alt="" /></a>
                </Link>
              </div>
              <div className="tp-blog-item-four__content">
                <div className="tp-blog-item-four__meta mb-20">
                  <Link href={`/blog-details/${big_item.id}`}>
                    <a>{big_item.meta_tag}</a>
                  </Link>
                  <Link href={`/blog-details/${big_item.id}`}>
                    <a className="tp-meta-text">
                      <i className="fal fa-clock"></i>{big_item.date}</a>
                  </Link>
                </div>
                <div className="tp-blog-item-four__title">
                  <h4 className="tp-blog-user-title">
                    <Link href={`/blog-details/${big_item.id}`}>
                      <a>{big_item.title}</a>
                    </Link>
                  </h4>
                  <p className="p-0 mb-0">{big_item.short_desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="row">
              {blog_sm_items.map((item, i) => {
                const { date, id, img, meta_tag, title } = item;
                return <div key={id} className="col-xl-12 mb-40">
                  <div className="tp-blog-right-side-sm d-flex align-items-center">
                    <div className="tp-blog-right-side-sm__img fix mr-40">
                      <Link href={`/blog-details/${id}`}>
                        <a><img src={img} alt="" /></a>
                      </Link>
                    </div>
                    <div className="tp-blog-right-side-sm__content">
                      <div className="tp-blog-right-side-sm__meta mb-25">
                        <Link href={`/blog-details/${id}`}>
                          <a>{meta_tag}</a>
                        </Link>
                        <a className="tp-meta-text" href="#"><i className="fal fa-clock"></i>{date}</a>
                      </div>
                      <div className="tp-blog-right-side-sm__title">
                        <h4 className="tp-blog-user-sm-title">
                          <Link href={`/blog-details/${id}`}>
                            <a>{title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;