import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { blog_data } from '../../../data';

const blog_items = blog_data.filter(item => item.home_3);

const blog_contents = {
  subtitle: 'Blog Post',
  title: 'Popular',
  highlight_text: 'blog post'
}

const { highlight_text, subtitle, title } = blog_contents;

const BlogArea = () => {
  return (
    <div className="tp-blog-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="tp-testimonial-section-box text-center pb-35">
            <h5 className="tp-subtitle">{subtitle}</h5>
            <h2 className="tp-title">{title} <span className="tp-section-highlight">
                {highlight_text}
                <svg width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L266 12H0V0Z" fill={"var(--tp-theme-primary)"} />
                </svg>
              </span>
            </h2>
          </div>
        </div>
        <div className="row gx-6">
          {blog_items.map((blog) => {
            const { date, delay, duration, id, img, meta_tag, short_desc, title } = blog;
            return <div key={id} className="col-xl-4 col-md-6 tp-blog-border wow tpfadeUp"
              data-wow-duration={duration} data-wow-delay={delay}>
              <div className="tp-blog-item-three">
                <div className="tp-blog-item-three__img fix">
                  <Link href={`/blog-details/${id}`}>
                    <a><Image width={391} height={240} className="w-100" src={img} alt="" /></a>
                  </Link>
                </div>
                <div className="tp-blog-item-three__content">
                  <div className="tp-blog-item-three__meta pt-25 pb-15">
                    <Link href={`/blog-details/${id}`}>
                      <a>{meta_tag}</a>
                    </Link>
                    <Link href={`/blog-details/${id}`}>
                      <a className="tp-meta-text">
                        <i className="fal fa-calendar-alt"></i>{date}
                      </a>
                    </Link>
                  </div>
                  <div className="tp-blog-item-three__title">
                    <h4 className="tp-bp-title">
                      <Link href={`/blog-details/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <p>{short_desc}</p>
                  </div>
                  <div className="tp-blog-item-three__button">
                    <Link href={`/blog-details/${id}`}>
                      <a className="tp-btn tp-btn-sm">Read more</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogArea;