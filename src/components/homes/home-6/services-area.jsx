import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';

const services_contents = {
  shapes: ['bp-chose-6.1.webp', 'hero-shape-5.1.webp'],
  subtitle: 'Why Choose us',
  title: 'Excellent it solution service and unlimited support for you business',
  services: services_data.filter(ser => ser.home_6),
}

const { title, shapes, services, subtitle } = services_contents;

const ServicesArea = () => {
  return (
    <div className="tp-service-area pb-90 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bs-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/chose/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title-sm pb-60">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((item, i) => {
            const { id, text_1, title, delay, duration, icon, active } = item;
            return <div key={id} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
              data-wow-duration={duration} data-wow-delay={delay}>
              <div className={`bpservice ${active ? 'active' : ''} text-center`}>
                <div className={`bpservice__item bp-sv-color-${i + 1}`}>
                  <div className='bpservice__icon'>
                    <Link href={`/service-details/${id}`}>
                      <a> {icon} </a>
                    </Link>
                  </div>
                  <div className="bpservice__content">
                    <h3 className="bp-sv-sm-title bp-sv-color-1">
                      <Link href={`/service-details/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <p>{text_1.substring(0, 60)}...</p>
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

export default ServicesArea;