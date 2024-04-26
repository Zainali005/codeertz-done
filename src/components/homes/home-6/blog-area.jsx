import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';

const blog_contents = {
  shapes: ['blog/hero-shape-5.1.webp', 'testimonial/testimonial-shape-5.3.webp'],
  subtitle: 'Blog Post',
  title: 'Collax news & blog',
  blog_items: blog_data.filter(b => b.home_6),
}
const { subtitle, title, shapes, blog_items } = blog_contents;

const BlogArea = () => {
  return (
    <div className="tp-blog-area yellow-bg bg-radius-none pt-125 pb-100 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bs-blog-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row gx-0 justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle tp-subtitle-before-color">{subtitle}</h5>
              <h2 className="tp-title-sm pb-65">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blog_items.map((item) => {
            const { id, img, meta_tag, short_desc, duration, delay, title } = item;
            return (
              <div key={id} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration={duration} data-wow-delay={delay}>
                <div className="bpblog">
                  <div className="bpblog__item mb-30">
                    <div className="bpblog__img w-img fix">
                      <Link href={`/blog-details/${id}`}>
                        <a><img src={img} alt="" /></a>
                      </Link>
                    </div>
                    <div className="bpblog__content">
                      <span><a href="#">{meta_tag}</a></span>
                      <h4 className="bp-blog-title">
                        <Link href={`/blog-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <p className="m-0">{short_desc}...</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default BlogArea;