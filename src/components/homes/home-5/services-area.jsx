import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';
import { AngelRight } from '../../../svg';

const ser_items = services_data.filter(ser => ser.home_5);

const contents = {
  shapes: ['chose/bp-chose-5.1.webp', 'hero/hero-shape-5.2.webp'],
  subtitle: 'Our Services',
  title: <>Grow you <span className="tp-section-highlight"> business
    <svg width="170" height="12" viewBox="0 0 170 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L170 12H0V0Z" fill="#89CEFB" />
    </svg>
  </span> with our best service</>,
  ser_logo: '/assets/img/service/service-logo.webp',
}

const { ser_logo, shapes, subtitle, title } = contents;

const ServicesArea = () => {
  return (
    <div className="tp-service-area tp-service-bs-space pt-130 pb-130 yellow-bg p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-sv-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-10">
            <div className="tp-best-services-title-box">
              <h5 className="tp-subtitle tp-subtitle-before-color">{subtitle}</h5>
              <h2 className="tp-title tp-title-sm">{title}</h2>
            </div>
            <div className="tp-sv-button">
              <img src={ser_logo} alt="" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-12 col-12">
            <div className="tp-sv-space-wrapper">
              {ser_items.map((ser, i) => {
                const { icon, title, top_border, id } = ser;
                return <Link key={i} href={`/service-details/${id}`}>
                  <a >
                    <div className={`bg-white-wrapper ${top_border ? 'sv-border-top' : ''} sv-border-bottom service-space`}>
                      <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="tpservices__icon">
                            <i className={icon}></i>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-6">
                          <div className="tpservices">
                            <div className="tpservices__content">
                              <h5 className="tp-sv-bs-title">{title}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-3">
                          <div className="tp-services-best-item text-end">
                            <div className="tpservices__icon">
                              <div className="angle-right-svg">
                                <div className="angle-right">{<AngelRight />}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;