import Link from 'next/link';
import React from 'react';

const contents = {
  shapes: [
    'bp-chose-5.1.webp',
    'bp-chose-5.2.webp',
    'bp-chose-5.3.webp',
  ],
  feature_bg: '/assets/img/feature/fea-2.webp',
  subtitle: 'Who Are We?',
  title: 'We are a Software Devlopment Company',
  highlight_text: 'with a Twist',
  text_1: `That specializes in high-quality software development services, guided by strong ethics, collaboration, tenacity, and responsibility. Our experienced team delivers exceptional, customized solutions, exceeding clients' expectations with a focus on quality and excellence.`,
  text_2: `We aim to build long-lasting relationships and become the trusted partner for all our clients' software development needs.`,
  btn_text: `Let's Xecute Your Idea`
}

const { btn_text, feature_bg, highlight_text, shapes, subtitle, text_1, text_2, title } = contents;

const FeatureArea = () => {
  return (
    <div className="tp-chose-area pt-120 pb-120 p-relative black">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-chose-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/chose/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="tpchosebox-main p-relative">
              <div className="tp-chose-bg">
                <img src={feature_bg} alt="" />
              </div>
              <div className="row gx-40 align-items-center tp-chose-space">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft"
                  data-wow-duration=".3s" data-wow-delay=".5s">
                  <div className="tp-chose-item mb-40">
                    <div className="tpchosebox">
                      <div className="tpchosebox__icon mb-30">
                      <img width="70" src="assets/img/feature/iconss-03.svg" alt="" />
                      </div>
                      <div className="tpchosebox__content">
                        <h4><a href="#">Professional <br /> Team</a></h4>
                        <p>50+ Team Member</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                 

                  <div className="tp-chose-item">
                    <div className="tpchosebox mb-40">
                      <div className="tpchosebox__icon mb-30">
                       <img width="70" src="assets/img/feature/iconss-01.svg" alt="" />
                      </div>
                      <div className="tpchosebox__content">
                        <h4><a href="#">Successful <br /> Projects</a></h4>
                        <p>400+</p>
                      </div>
                    </div>
                    <div className="tpchosebox">
                      <div className="tpchosebox__icon mb-30">
                       <img width="70" src="assets/img/feature/iconss-02.svg" alt="" />
                      </div>
                      <div className="tpchosebox__content">
                        <h4><a href="#">Clients <br /> Worldwide</a></h4>
                        <p>200+ Satisfied Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-10 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".9s">
            <div className="tp-feature-section-title-box">
              <h5 className="tp-subtitle pb-10">{subtitle}</h5>
              <h2 className="tp-title tp-title-sm">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="247" height="12" viewBox="0 0 247 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.000488281 0L247 12H-0.000488281V0Z" fill={"var(--tp-theme-primary)"} />
                  </svg>
                </span>
                </h2>
              <p className="pb-25">{text_1}</p>
              <p className="pb-20">{text_2}</p>
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

export default FeatureArea;

const ChoseItem = ({ item_num, m, icon, title, text, color }) => {
  return (
    <div className={`tpchosebox tpchosebox-${item_num} ${m && 'mb-40'} wow tpfadeIn`}
      data-wow-duration=".5s" data-wow-delay=".7s">
      <div className={`tpchosebox__icon fea-color-${color} mb-30`}>
        <img width="70" src="assets/img/feature/iconss-01.svg" alt="" />
      </div>
      <div className="tpchosebox__content">
        <h4><a href="#">{title}</a></h4>
        <p>{text}</p>
      </div>
    </div>
  )
}