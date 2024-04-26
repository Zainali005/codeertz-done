import Link from "next/link";
import React from "react";
import BlogSidebar from "../blog/blog-sidebar";
import BlogDetailsForm from "../forms/blog-details-form";

const BlogDetailsArea = ({ blog }) => {
  const { author, date, views, title, description } = blog || {};
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                    {/* <p>
                      <img className="w-100" src={img} alt="" />
                    </p> */}
                    <div className="postbox__meta">
                      <span>
                        <a href="#">
                          <i className="fal fa-user-circle"></i>
                          {author}
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="fal fa-clock"></i>
                          {date}
                        </a>
                      </span>
                      <span>
                        {/* <a href="#">
                          <i className="fal fa-comment-alt-lines"></i>({comment}
                          ) Coments
                        </a> */}
                      </span>
                      <span>
                        <a href="#">
                          <i className="fal fa-eye"></i> {views} views
                        </a>
                      </span>
                    </div>
                    <h3 className="postbox__title">{title}</h3>
                    <div className="postbox__text">
                      {description}
                      {/* <p> <b>Section 1:</b> Increased Productivity and Efficiency
                        Explain how having a dedicated team of experts can help increase productivity and efficiency for businesses. Provide specific examples of how IT services can streamline processes and save time for employees.</p>
                      <p> <b>Section 2:</b> Cost Savings
                        Explain how subscription-based IT services can provide cost savings for businesses. Highlight the benefits of predictable pricing, no surprise costs, and no need for in-house IT staff.</p>
                      <p> <b>Section 3:</b> Flexibility and Scalability
                        Explain how subscription-based IT services can provide flexibility and scalability for businesses. Highlight how businesses can easily scale up or down their services as needed without the hassle of hiring and training new staff.</p>
                      <p> <b>Section 4:</b> Peace of Mind
                        Explain how subscription-based IT services can provide peace of mind for businesses. Highlight how businesses can focus on their core operations without worrying about IT issues and security threats.</p>
                      <p> <b>Conclusion:</b> Summarize the benefits of subscription-based IT services and how they can help businesses achieve their goals. Provide a call-to-action encouraging readers to contact Codeertz (Private) Ltd to learn more about their subscription-based IT services.</p>
                      <p>Remember to make your blog post informative, engaging, and easy to read. Use visuals, such as images or videos, to break up the text and make it more visually appealing. And don't forget to include a relevant meta description, title tag, and keyword optimization to improve your search engine rankings.</p> */}
                    </div>

                    <div className="postbox__thumb2">
                      <div className="row gx-50">
                        <div className="col-xl-6">
                          <p>
                            <img
                              src="/assets/img/blog-details/blog-big-4.webp"
                              alt=""
                            />
                          </p>
                        </div>
                        <div className="col-xl-6">
                          <p>
                            <img
                              src="/assets/img/blog-details/blog-sm-5.webp"
                              alt=""
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="postbox__comment-form">
                  <h3 className="postbox__comment-form-title">Leave a Reply</h3>
                  {/* details form start */}
                  <BlogDetailsForm />
                  {/* details form end */}
                </div>
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

export default BlogDetailsArea;
