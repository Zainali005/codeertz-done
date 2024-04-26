import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { services_data } from '../../../data';

const services_items = services_data.filter(ser => ser.service_p);

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-area pt-110 pb-130">
        <div className="container">
          <div className="row">
            {services_items.map((service, i) => {
              const { delay, duration, id, img, title, border_effect } = service;
              return <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-6 wow tpfadeUp"
                data-wow-duration={duration} data-wow-delay={delay}>
                <div className={`tp-sv-border-effect`}>
                  <div className={`tp-service-item-four sv-1-border 
                 mb-30`}>
                    <div className="tp-service-item-four__img  mx-auto mb-40">
                      <Image width={60} height={60} src={img} alt="" />
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        <Link href={`/service-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                    </div>
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

export default ServiceArea;