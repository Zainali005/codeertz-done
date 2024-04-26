import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';

const services_items = services_data.filter(ser => ser.home_2);

const Services = () => {
  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box-two text-center">
                <h5 className="tp-subtitle pb-10">What i Do</h5>
                <h2 className="tp-title tp-white-text pb-35">My Service Area </h2>
              </div>
            </div>
          </div>
          <div className="row gx-12">
            {services_items.map((ser) => {
              const { delay, duration, id, img, text_1, title, color } = ser;
              return <div key={id} className="col-xl-4  col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration={duration} data-wow-delay={delay}>
                <div className={`tp-sv-item-two ${color} mb-30`}>
                  <div className="tp-sv-img mb-40">
                    <img src={img} alt="" />
                  </div>
                  <div className="tp-sv-content-tow">
                    <h3 className="tp-sv-product-design">{title}</h3>
                    <p>{text_1}</p>
                  </div>
                  <div className="tp-sv-icon-two">
                    <Link href={`/service-details/${id}`}>
                      <a><i className="fas fa-long-arrow-up"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;