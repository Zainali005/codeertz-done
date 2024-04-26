import Link from 'next/link';
import React from 'react';

const about_contents = {
  about_img: '/assets/img/about/about-6.1.webp',
  subtitle: 'Why Choose us',
  title: <>We deliver great service with <span className="tp-section-highlight"> outstanding
    <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill="#FFDC60" />
    </svg> </span> value</>,
  sm_desc: 'By understanding the client,s condition and leveraging our experience and knowledge. we support reform by recommending the most appropriate methods and resources.',
  btn_text: 'About Collax'
}
const { about_img, btn_text, sm_desc, subtitle, title } = about_contents;

const AboutArea = () => {
  return (
    <div className="tp-about-area grey-bg pt-120 pb-120 p-relative fix">
      <Shape shape_class="sm-1" img='chose/hero-shape-5.1.webp' />
      <Shape shape_class="sm-2" img='chose/bp-chose-5.2.webp' />
      <div className="bp-about-shape d-none d-md-block">
        <img src="/assets/img/about/about-shape-6.1.webp" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="bp-about-img">
              <img src={about_img} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-10 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-feature-section-title-box bs-section-title-space">
              <h5 className="tp-subtitle tp-subtitle-before-color pb-10">{subtitle}</h5>
              <h2 className="tp-title tp-title-sm">{title}</h2>
              <p className="pb-25">{sm_desc}</p>
              <div className="tp-fea-button-five">
                <Link href="#Package-Plan">
                  <a className="tp-btn">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

const Shape = ({ shape_class, img }) => {
  return (
    <div className={`bs-about-${shape_class} d-none d-lg-block`}>
      <img src={`/assets/img/${img}`} alt="" />
    </div>
  )
}