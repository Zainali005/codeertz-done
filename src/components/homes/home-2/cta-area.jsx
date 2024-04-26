import Link from 'next/link';
import React from 'react';

const cta_contents = {
  shapes: [
    { class: 'creative-shape-img-2', img: '/assets/img/creative/creative-circle-img.webp' },
    { class: 'project-shape-img', img: '/assets/img/project/project-zoom-img.webp' },
  ],
  subtitle: 'What We Do?',
  title: 'Hi,👋 I am experts in every aspect lifecycle',
  cta_img: '/assets/img/cta/cta-1.webp',
  social_info: [
    { img: 'cta/1.webp', title: '8k Followers' },
    { img: 'cta/2.webp', title: '12k Followers' },
    { img: 'cta/3.webp', title: '65k Followers' },
    { img: 'cta/4.webp', title: '1.5M Followers' },
  ]
}
const { cta_img, shapes, social_info, subtitle, title } = cta_contents;

const CtaArea = () => {
  return (
    <div className="tp-cta-area black-bg p-relative fix">
      {shapes.map((s, i) => (
        <div key={i} className={s.class}>
          <img src={s.img} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="tp-cta-section-title-box pl-60 pt-180 z-index wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title tp-white-text pb-10">{title}</h2>
              <Link href="/contact">
                <a className="tp-btn-border">Download CV <i className="far fa-download"></i></a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
            <div className="tp-cta-img-item z-index-1 pt-115 pl-10">
              <img src={cta_img} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-cta-bottom-wrapper">
              <div className="row justify-content-center">
                {social_info.map((s, i) => (
                  <div key={i} className="col-xl-3 col-lg-6 col-md-6 col-10">
                    <div className="tp-cta-social-info">
                      <a className="tp-btn-white-lg" href="#">
                        <img className="mr-15" src={`/assets/img/${s.img}`} alt="" /> 8k
                        Followers</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;