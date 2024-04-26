import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';
import SingleServiceFour from '../../common/single-service-4';

const services_items = services_data.filter(ser => ser.home_3);

const Services = () => {
  return (
    <>
      <div className="tp-service-area pt-125 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box text-center pb-35">
                <h5 className="tp-subtitle">Core Services</h5>
                <h2 className="tp-title">Start growing
                  <span className="tp-section-highlight">
                    <svg width="290" height="11" viewBox="0 0 290 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L290 11H0V0Z" fill="#FFDC60" />
                    </svg>with collax
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-17">
            {services_items.map((ser, i) => {
              return <SingleServiceFour key={i} service={ser} m={true} />
            })}
          </div>
          <div className="row">
            <div className="col-xl-12 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".5s">
              <div className="tp-service-button text-center pt-55">
                <Link href="/service-1">
                  <a className="tp-btn">View All Services <i className="far fa-arrow-right"></i></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;