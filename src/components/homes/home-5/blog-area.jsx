import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';
import { Document, HighlightFive, HighlightFour } from '../../../svg';
import BlogForm from '../../forms/blog-form';

const blog_items = blog_data.filter(blog => blog.home_5);

const blog_contents = {
  shapes: ['bp-chose-5.2.webp', 'bp-chose-5.3.webp', 'hero-shape-5.2.webp'],
  subtitle: 'Blog Post',
  title: <>Read <span className="tp-section-highlight"> Blog <HighlightFour /></span></>,
  contact_subtitle: 'Get in Touch',
  contact_title: <><span className="tp-section-highlight"> Contact <HighlightFive /> </span> us</>,
}

const { contact_subtitle, contact_title, shapes, subtitle, title } = blog_contents;

const BlogArea = () => {
  return (
    <div className="tp-blog-area tp-blog-bs-space yellow-bg pt-130 pb-130 mr-130 ml-130 grey-bg p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-blog-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/blog/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-12">
            <div className="tp-blog-section-box pb-35">
              <h5 className="tp-subtitle tp-subtitle-before-color">{subtitle}</h5>
              <h2 className="tp-title-sm">{title}</h2>
            </div>
            {blog_items.map((blog) => {
              const { date, id, img, meta_tag, title } = blog;
              return <div key={id} className="tpblog mb-50">
                <div className="tpblog__item d-flex align-items-center">
                  <div className="tpblog__thumb fix">
                    <Link href={`/blog-details/${id}`}>
                      <a><img src={img} alt="" /></a>
                    </Link>
                  </div>
                  <div className="tpblog__info">
                    <div className="tpblog__meta d-flex align-item-center">
                      <h4 className="tp-blg-sm-title mb-0"><a href="#">{meta_tag}</a></h4>
                      <span><a href="#">{date}</a></span>
                    </div>
                    <div>
                      <h3 className="tp-blg-lg-title">
                        <Link href={`/blog-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
          <div className="col-xl-6 col-lg-5 tp-contact-space col-12 ">
            <div className="tp-border-left">
              <div className="tp-blog-section-box pb-35">
                <h5 className="tp-subtitle tp-subtitle-before-color">{contact_subtitle}</h5>
                <h2 className="tp-title-sm">{contact_title}</h2>
              </div>
              <div className="tpcontact">
                <div className="tpcontact__heading">
                  <h4 className="tp-contact-title"><Document />
                    Fill the form
                  </h4>
                </div>
                <div className="tpcontact__form">
                  <BlogForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;