import Link from "next/link";
import { blog_data } from "../../../data";

const blogItems = blog_data.filter(b => b.home);

const BlogArea = () => {
  return (
    <div className="tp-blog-area pt-130 pb-120 p-relative">
      <div className="circle-animation blog-animation">
        <span className="tp-circle-3"></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-section-box text-center pb-15">
              <h5 className="tp-subtitle">Blog & Article</h5>
              <h2 className="tp-title">Recent blog post</h2>
            </div>
          </div>
        </div>
        <div className="row gx-40">
          {blogItems.map((item, i) => {
            const { date, delay, duration, id, img, meta_tag, short_desc, title } = item;
            return <div key={id} className="col-xl-6 col-lg-6">
              <div className="tp-blog-box mb-30 wow tpfadeLeft"
                data-wow-duration={duration} data-wow-delay={delay}>
                <div className="tp-blog-item">
                  <div className="tp-blog-img fix mb-35">
                    <Link href={`/blog-details/${id}`}>
                      <a> <img className="w-100" src={img} alt="" /></a>
                    </Link>
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
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-button text-center mt-30">
              <Link href={'/blog'}>
                <a className="tp-btn">View All Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;